const { Application } = Shopware;
const ApiService = Shopware.Classes.ApiService;

class HeyLightOrderService extends ApiService {
    constructor(httpClient, loginService, apiEndpoint = 'heylight_order_service') {
        super(httpClient, loginService, apiEndpoint);
    }

    submitRefund(transaction) {
        const headers = this.getBasicHeaders();

        return this.httpClient
            .post(
                `_action/${this.getApiBasePath()}/refund`,
                {
                    transaction: transaction,
                },
                {
                    headers: headers
                }
            )
            .then((response) => {
                return ApiService.handleResponse(response);
            });
    }

}

Application.addServiceProvider('HeyLightOrderService', (container) => {
    const initContainer = Application.getContainer('init');

    return new HeyLightOrderService(initContainer.httpClient, container.loginService);
});

