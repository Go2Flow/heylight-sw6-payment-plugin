<?php

declare(strict_types=1);

namespace Go2FlowHeyLightPayment\Handler;

use Go2FlowHeyLightPayment\Helper\Transaction;
use Go2FlowHeyLightPayment\Service\HeyLightApiService;
use Psr\Log\LoggerInterface;
use Shopware\Core\Checkout\Order\Aggregate\OrderTransaction\OrderTransactionEntity;
use Shopware\Core\Checkout\Order\Aggregate\OrderTransaction\OrderTransactionStates;
use Shopware\Core\Checkout\Payment\Cart\PaymentHandler\AbstractPaymentHandler;
use Shopware\Core\Checkout\Payment\Cart\PaymentHandler\PaymentHandlerType;
use Shopware\Core\Checkout\Payment\Cart\PaymentTransactionStruct;
use Shopware\Core\Checkout\Payment\PaymentException;
use Shopware\Core\Framework\Context;
use Shopware\Core\Framework\Struct\Struct;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Criteria;
use Shopware\Core\Checkout\Order\Aggregate\OrderTransaction\OrderTransactionStateHandler;

class PaymentHandler extends AbstractPaymentHandler
{

    const PAYMENT_METHOD_PREFIX = 'heylight_';
    const BASE_URL = 'https://origination.heidipay.com';
    const SANDBOX_BASE_URL = 'https://sandbox-origination.heidipay.com';

    /**
     * @var OrderTransactionStateHandler
     */
    protected OrderTransactionStateHandler $transactionStateHandler;

    /**
     * @var ContainerInterface
     */
    protected ContainerInterface $container;

    /**
     * @var HeyLightApiService
     */
    protected HeyLightApiService $heyLightApiService;

    /**
     * @var TransactionHandler
     */
    protected TransactionHandler $transactionHandler;

    /**
     * @var LoggerInterface
     */
    protected LoggerInterface $logger;

    /**
     * @param OrderTransactionStateHandler $transactionStateHandler
     * @param ContainerInterface $container
     * @param HeyLightApiService $heyLightApiService
     * @param TransactionHandler $transactionHandler
     * @param $logger
     */
    public function __construct(
        OrderTransactionStateHandler $transactionStateHandler,
        ContainerInterface           $container,
        HeyLightApiService           $heyLightApiService,
        TransactionHandler           $transactionHandler,
                                     $logger
    ) {
        $this->transactionStateHandler = $transactionStateHandler;
        $this->container = $container;
        $this->heyLightApiService = $heyLightApiService;
        $this->transactionHandler = $transactionHandler;
        $this->logger = $logger;
    }


    public function pay(
        Request $request,
        PaymentTransactionStruct $transaction,
        Context $context,
        ?Struct $validateStruct
    ): RedirectResponse
    {
        $orderTransaction = $this->getOrderTransaction($transaction->getOrderTransactionId(), $context);
        $order = $orderTransaction->getOrder();
        $totalAmount = $orderTransaction->getAmount()->getTotalPrice();
        $transactionId = $orderTransaction->getId();

        // Workaround if amount is 0
        if ($totalAmount <= 0) {
            $redirectUrl = $transaction->getReturnUrl();
            return new RedirectResponse($redirectUrl);
        }

        // Create HeidiPay Link for checkout and redirect user
        try {
            $gateway = $this->heyLightApiService->processPayment(
                $order,
                $orderTransaction->getPaymentMethod(),
                $transaction->getReturnUrl(),
                $context
            );

            $this->transactionHandler->saveTransactionCustomFields(
                $context,
                $transactionId,
                [ 'external_contract_uuid' => $gateway['external_contract_uuid'] ]
            );

            $redirectUrl = $gateway['redirect_url'] ;
        } catch (\Exception $e) {
            throw PaymentException::asyncProcessInterrupted(
                $transactionId,
                'An error occurred during the communication with external payment gateway' . PHP_EOL . $e->getMessage()
            );
        }

        return new RedirectResponse($redirectUrl);
    }

    public function finalize(
        Request $request,
        PaymentTransactionStruct $transaction,
        Context $context
    ): void
    {
        $orderTransaction = $this->getOrderTransaction($transaction->getOrderTransactionId(), $context);
        $stateMachineState = $orderTransaction->getStateMachineState();
        if (!$stateMachineState) {
            $stateMachineState = $this->transactionHandler->getStateMachineState($orderTransaction->getStateId(), $context);
        }

        $customFields = $orderTransaction->getCustomFields();
        $externalContractUuid = $customFields['external_contract_uuid'];
        $transactionId = $orderTransaction->getId();
        $totalAmount = $orderTransaction->getAmount()->getTotalPrice();

        if ($totalAmount <= 0) {
            if (OrderTransactionStates::STATE_PAID !== $stateMachineState->getTechnicalName()) {
                $this->transactionStateHandler->paid($orderTransaction->getId(), $context);
            }
            return;
        }

        $orderStatus = $this->heyLightApiService->checkOrderStatus($externalContractUuid, $orderTransaction->getOrder()->getSalesChannelId() );

        if (!$externalContractUuid || !$orderStatus) {
            throw PaymentException::customerCanceled(
                $transactionId,
                'Customer canceled the payment on the HeyLight page'
            );
        }

        $this->transactionHandler->handleTransactionStatus($orderTransaction, Transaction::CONFIRMED, $context);
    }

    public function supports(PaymentHandlerType $type, string $paymentMethodId, Context $context): bool
    {
        return false;
    }

    private function getOrderTransaction(string $transactionId, Context $context): OrderTransactionEntity
    {
        $orderTransactionRepository = $this->container->get('order_transaction.repository');
        $criteria = new Criteria([$transactionId]);
        $criteria->addAssociations([
            'order',
            'order.orderCustomer',
            'order.billingAddress',
            'order.lineItems',
            'order.currency',
            'order.salesChannel.domains',
            'stateMachineState',
            'paymentMethod'
        ]);
        return $orderTransactionRepository->search($criteria, $context)->first();
    }
}
