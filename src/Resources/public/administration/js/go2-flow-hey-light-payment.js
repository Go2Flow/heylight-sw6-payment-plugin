(function(){var e={236:function(e,t,s){var n={"./icons-heylight-color.svg":324};function i(e){return s(r(e))}function r(e){if(!s.o(n,e)){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id=236},975:function(){},720:function(){},324:function(e){e.exports='<svg width="180" height="65" viewBox="0 0 180 65" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 10C0 4.47715 4.47715 0 10 0H170C175.523 0 180 4.47715 180 10V55C180 60.5228 175.523 65 170 65H10C4.47716 65 0 60.5228 0 55V10Z" fill="black"></path><g clip-path="url(#clip0_495_4399)"><g clip-path="url(#clip1_495_4399)"><path d="M71.4328 42.7492L65.547 25.41H61.276L68.1915 45.5904H70.7738L69.5161 49.0977H63.0296V52.6256H68.1264C71.196 52.6256 72.8302 50.9898 73.6794 48.5234L81.6332 25.41H77.3758L71.4328 42.7492Z" fill="white"></path><path d="M103.555 18C102.034 18 100.774 19.2718 100.774 20.8049C100.774 22.3752 102.035 23.647 103.555 23.647C105.113 23.647 106.374 22.3752 106.374 20.8049C106.374 19.2718 105.113 18 103.555 18Z" fill="white"></path><path d="M105.624 25.4091H101.481V45.5884H105.624V25.4091Z" fill="white"></path><path d="M162.568 28.9496V25.4031H157.347V18.361H153.203V25.4031H149.887V28.9496H153.203V39.9922C153.203 43.2559 155.547 45.5912 158.745 45.5912H162.568V42.0545H157.347V28.9496H162.568Z" fill="white"></path><path d="M87.5394 18.361H83.2859V45.5883H99.3421V41.7072H87.5394V18.361Z" fill="white"></path><path d="M141.283 25.0323C137.875 25.0323 135.578 26.6779 134.737 29.1541V18.361H130.557V45.5893H134.737V35.39C134.737 31.2252 136.649 28.6346 140.236 28.6346C143.16 28.6346 144.564 30.3486 144.564 33.5498V45.5893H148.743V33.2886C148.743 28.1473 146.043 25.0323 141.283 25.0323Z" fill="white"></path><path d="M52.2731 25.0323C46.364 25.0323 42.4055 28.8821 42.4055 35.5271C42.4055 42.1974 46.4368 45.9464 52.44 45.9464C58.6917 45.9464 61.0761 41.8706 61.5701 38.8534H57.401C57.0477 40.7358 55.9851 42.4293 52.5924 42.4293C48.794 42.4293 46.8026 40.2838 46.6745 36.8067H61.5846V34.8745C61.5846 29.2725 58.4287 25.0323 52.2731 25.0323ZM46.6784 33.497C46.7881 31.0795 48.1904 28.5612 52.1052 28.5612C56.02 28.5612 57.4379 31.0795 57.5475 33.497H46.6784Z" fill="white"></path><path d="M35.721 29.7714H21.2904V18.361H17V45.5883H21.2904V33.6701H35.721V45.5883H40.0114V18.361H35.721V29.7714Z" fill="white"></path><path d="M123.704 28.8205C122.413 26.4549 120.059 25.0323 116.935 25.0323C112.371 25.0323 107.837 28.0408 107.837 34.8765C107.837 41.7278 112.371 44.702 116.96 44.702C120.136 44.702 122.569 43.2775 123.461 40.8062V43.8665C123.461 47.459 121.973 49.4196 117.817 49.4196C114.411 49.4196 112.943 48.1135 112.61 45.5933H107.964C108.405 50.214 111.773 53.0003 117.692 53.0003C124.234 53.0003 127.64 49.5947 127.64 43.6434V25.409H124.469L123.704 28.8205ZM117.776 41.1418C114.727 41.1418 111.991 39.416 111.991 34.895C111.991 30.3859 114.727 28.6376 117.776 28.6376C120.824 28.6376 123.572 30.3497 123.572 34.8579C123.572 39.3788 120.825 41.1418 117.776 41.1418Z" fill="white"></path></g></g><defs><clipPath id="clip0_495_4399"><rect width="145.568" height="35" fill="white" transform="translate(17 18)"></rect></clipPath><clipPath id="clip1_495_4399"><rect width="145.568" height="35.0003" fill="white" transform="translate(17 18)"></rect></clipPath></defs></svg>'},756:function(){let{Application:e}=Shopware,t=Shopware.Classes.ApiService;class s extends t{constructor(e,t,s="heylight_order_service"){super(e,t,s)}submitRefund(e){let s=this.getBasicHeaders();return this.httpClient.post(`_action/${this.getApiBasePath()}/refund`,{transaction:e},{headers:s}).then(e=>t.handleResponse(e))}}e.addServiceProvider("HeyLightOrderService",t=>new s(e.getContainer("init").httpClient,t.loginService))},769:function(){let{Application:e}=Shopware,t=Shopware.Classes.ApiService;class s extends t{constructor(e,t,s="heylight_settings_service"){super(e,t,s)}validateApiCredentials(e){let s=this.getBasicHeaders();return this.httpClient.post(`_action/${this.getApiBasePath()}/validate-api-credentials`,{merchant_key:e},{headers:s}).then(e=>t.handleResponse(e))}}e.addServiceProvider("HeyLightSettingsService",t=>new s(e.getContainer("init").httpClient,t.loginService))},406:function(e,t,s){var n=s(975);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),s(346).Z("5a762549",n,!0,{})},621:function(e,t,s){var n=s(720);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),s(346).Z("4aed74da",n,!0,{})},346:function(e,t,s){"use strict";function n(e,t){for(var s=[],n={},i=0;i<t.length;i++){var r=t[i],a=r[0],o={id:e+":"+i,css:r[1],media:r[2],sourceMap:r[3]};n[a]?n[a].parts.push(o):s.push(n[a]={id:a,parts:[o]})}return s}s.d(t,{Z:function(){return p}});var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r={},a=i&&(document.head||document.getElementsByTagName("head")[0]),o=null,l=0,c=!1,d=function(){},h=null,g="data-vue-ssr-id",u="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e,t,s,i){c=s,h=i||{};var a=n(e,t);return m(a),function(t){for(var s=[],i=0;i<a.length;i++){var o=r[a[i].id];o.refs--,s.push(o)}t?m(a=n(e,t)):a=[];for(var i=0;i<s.length;i++){var o=s[i];if(0===o.refs){for(var l=0;l<o.parts.length;l++)o.parts[l]();delete r[o.id]}}}}function m(e){for(var t=0;t<e.length;t++){var s=e[t],n=r[s.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](s.parts[i]);for(;i<s.parts.length;i++)n.parts.push(y(s.parts[i]));n.parts.length>s.parts.length&&(n.parts.length=s.parts.length)}else{for(var a=[],i=0;i<s.parts.length;i++)a.push(y(s.parts[i]));r[s.id]={id:s.id,refs:1,parts:a}}}}function f(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function y(e){var t,s,n=document.querySelector("style["+g+'~="'+e.id+'"]');if(n){if(c)return d;n.parentNode.removeChild(n)}if(u){var i=l++;t=v.bind(null,n=o||(o=f()),i,!1),s=v.bind(null,n,i,!0)}else t=b.bind(null,n=f()),s=function(){n.parentNode.removeChild(n)};return t(e),function(n){n?(n.css!==e.css||n.media!==e.media||n.sourceMap!==e.sourceMap)&&t(e=n):s()}}var w=function(){var e=[];return function(t,s){return e[t]=s,e.filter(Boolean).join("\n")}}();function v(e,t,s,n){var i=s?"":n.css;if(e.styleSheet)e.styleSheet.cssText=w(t,i);else{var r=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function b(e,t){var s=t.css,n=t.media,i=t.sourceMap;if(n&&e.setAttribute("media",n),h.ssrId&&e.setAttribute(g,t.id),i&&(s+="\n/*# sourceURL="+i.sources[0]+" */\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=s;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(s))}}}},t={};function s(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={id:n,exports:{}};return e[n](r,r.exports,s),r.exports}s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="bundles/go2flowheylightpayment/",window?.__sw__?.assetPath&&(s.p=window.__sw__.assetPath+"/bundles/go2flowheylightpayment/"),function(){"use strict";let e=Shopware.Classes.ApiService;var t=class extends e{constructor(e,t,s="heylight_api_service"){super(e,t,s)}get(t){return this.httpClient.get(`_action/${this.getApiBasePath()}${t}`,{headers:this.getBasicHeaders()}).then(t=>e.handleResponse(t))}post(t,s){return this.httpClient.post(`_action/${this.getApiBasePath()}${t}`,s,{headers:this.getBasicHeaders()}).then(t=>e.handleResponse(t))}};s(769),s(756);var n=(()=>{let e=s(236);return e.keys().reduce((t,s)=>{let n=s.split(".")[1].split("/")[1];return t.push({name:n,functional:!0,render(t,n){let i=n.data;return t("span",{class:[i.staticClass,i.class],style:i.style,attrs:i.attrs,on:i.on,domProps:{innerHTML:e(s)}})}}),t},[])})();let{Component:i}=Shopware;(()=>n.map(e=>i.register(e.name,e)))();let{Component:r}=Shopware;r.register("heylight-settings-icon",{template:'{% block heylight_settings_icon %}\n    <icons-heylight-color class="sw-icon"></icons-heylight-color>\n{% endblock %}\n'}),s(406);let{Component:a}=Shopware;a.override("sw-settings-index",{template:'{% block sw_settings_content_card_slot_plugins %}\n    {% parent %}\n\n    <sw-settings-item :label="$tc(\'HeyLight.mainMenuItemGeneral\')"\n                      :to="{ name: \' heylight.settings.index\' }"\n                      :backgroundEnabled="false">\n        <template #icon>\n            <img class="sw-settings-index__heidipay-icon" :src="\'heylight/administration/plugin.png\' | asset">\n        </template>\n    </sw-settings-item>\n{% endblock %}\n'}),s(621);let{Component:o,Mixin:l}=Shopware;o.register("heylight-settings",{template:'{% block heylight_settings %}\n<sw-page class="heylight-settings">\n    {% block heylight_settings_header %}\n    <template slot="smart-bar-header">\n        <h2>\n            {{ $tc(\'sw-settings.index.title\') }}\n            <sw-icon name="small-arrow-medium-right" small></sw-icon>\n            {{ $tc(\'HeyLight.mainMenuItemGeneral\') }}\n        </h2>\n    </template>\n    {% endblock %}\n    {% block heylight_actions %}\n    <template #smart-bar-actions>\n        {% block heylight_settings_actions_feedback %}\n        <sw-button\n            @click="isSupportModalOpen = true"\n            :disabled="false"\n            variant="ghost"\n            :square="false"\n            :block="false"\n            :isLoading="false">\n            {{ $tc(\'HeyLight.supportModal.supportButton\') }}\n        </sw-button>\n        {% endblock %}\n        {% block heylight_settings_actions_test %}\n        <sw-button-process @click="onTest"\n                           :isLoading="isTesting"\n                           :processSuccess="isTestSuccessful"\n                           :disabled="isLoading">\n            {{ $tc(\'HeyLight.settingsForm.test\') }}\n        </sw-button-process>\n        {% endblock %}\n\n\n        {% block heylight_settings_actions_save %}\n        <sw-button-process\n            class="sw-settings-login-registration__save-action"\n            :isLoading="isLoading"\n            :processSuccess="isSaveSuccessful"\n            :disabled="isLoading || isTesting"\n            variant="primary"\n            @process-finish="saveFinish"\n            @click="onSave">\n            {{ $tc(\'HeyLight.settingsForm.save\') }}\n        </sw-button-process>\n        {% endblock %}\n    </template>\n    {% endblock %}\n    {% block heylight_settings_content %}\n    <template #content>\n        <sw-modal\n            v-if="isSupportModalOpen"\n            @modal-close="isSupportModalOpen = false"\n            :title="$tc(\'HeyLight.supportModal.title\')"\n            class="heidpay-support sw-modal--medium">\n            <sw-container columns="1fr 1fr">\n                <div class="heidpay-support__col">\n                    <div class="heidpay-support__icon">\n                        <sw-icon name="regular-file" :large="true"></sw-icon>\n                    </div>\n                    <p class="heidpay-support__desc">\n                        {{ $tc(\'HeyLight.supportModal.manualDesc\') }}\n                    </p>\n                    <sw-button\n                        :disabled="false"\n                        variant="primary"\n                        :square="false"\n                        :block="false"\n                        :isLoading="false"\n                        link="https://www.heidipay.com/de-ch/">\n                        {{ $tc(\'HeyLight.supportModal.manualButton\') }}\n                    </sw-button>\n                </div>\n                <div class="heidpay-support__col">\n                    <div class="heidpay-support__icon">\n                        <sw-icon name="regular-headset" :large="true"></sw-icon>\n                    </div>\n                    <p class="heidpay-support__desc">\n                        {{ $tc(\'HeyLight.supportModal.supportDesc\') }}\n                    </p>\n                    <sw-button\n                        :disabled="false"\n                        variant="primary"\n                        :square="false"\n                        :block="false"\n                        :isLoading="false"\n                        link="mailto:kontakt@go2flow.ch">\n                        {{ $tc(\'HeyLight.supportModal.supportButton\') }}\n                    </sw-button>\n                </div>\n            </sw-container>\n        </sw-modal>\n\n        <sw-card-view>\n            <div class="sw-system-config">\n                <div  class="sw-system-config__global-sales-channel-switch">\n                    <h3>{{ $tc(\'HeyLight.settingsForm.attention\') }}</h3>\n                    <p style="margin-bottom: 10px;">{{ $tc(\'HeyLight.settingsForm.attentionText\') }}</p>\n                    <p style="margin-bottom: 10px;">{{ $tc(\'HeyLight.settingsForm.descriptionWebservice\') }}</p>\n                    <p style="margin-bottom: 10px;"><a href="https://merchant-portal.heidipay.com/auth/login" target="_blank" rel="noopener nofollow">Merchant-Portal</a> </p>\n                </div>\n            </div>\n            <sw-system-config\n                    ref="systemConfig"\n                    domain="Go2FlowHeyLightPayment.settings"\n                    sales-channel-switchable\n                    :sales-channel-id="salesChannelId"\n            />\n        </sw-card-view>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n\n',mixins:[l.getByName("notification"),l.getByName("sw-inline-snippet")],inject:["HeyLightSettingsService"],data(){return{isLoading:!1,isTesting:!1,isSaveSuccessful:!1,isTestSuccessful:!1,secretKey:!1,isSupportModalOpen:!1,validations:{secretKey:{required:!0},promotionPublicApiKey:{required:!0},romotionWidgetFee:{required:!0},promotionProductMode:{required:!0},promotionTerms:{required:!0},promotionTermsCredit:{required:!0}}}},methods:{saveFinish(){this.isSaveSuccessful=!1},onSave(){this.isLoading=!0;let e=this.validateConfig();if(e.length){this.createNotificationsForValidation(e),this.isLoading=!1;return}this.isSaveSuccessful=!1,this.$refs.systemConfig.saveAll().then(()=>{this.isLoading=!1,this.isSaveSuccessful=!0}).catch(()=>{this.isLoading=!1})},onTest(){this.isTesting=!0,this.isTestSuccessful=!1;let e=this.getConfigValue("secretKey");this.HeyLightSettingsService.validateApiCredentials(e).then(e=>{let t=e.credentialsValid;e.error,t?(this.createNotificationSuccess({title:this.$tc("HeyLight.settingsForm.messages.titleSuccess"),message:this.$tc("HeyLight.settingsForm.messages.messageTestSuccess")}),this.isTestSuccessful=!0):this.createNotificationError({title:this.$tc("HeyLight.settingsForm.messages.titleError"),message:this.$tc("HeyLight.settingsForm.messages.messageTestError")}),this.isTesting=!1}).catch(e=>{this.createNotificationError({title:this.$tc("HeyLight.settingsForm.messages.titleError"),message:this.$tc("HeyLight.settingsForm.messages.messageTestErrorGeneral")}),this.isTesting=!1})},createNotificationsForValidation(e){e.forEach(e=>{let t="",s=this.$tc("HeyLight.settingsForm.fields."+e.field);e.errors.forEach(e=>{t=t+" "+this.$tc("HeyLight.settingsForm.messages."+e,{field:s})}),this.createNotificationError({title:this.$tc("HeyLight.settingsForm.messages.titleError"),message:t})})},validateConfig(){let e=[];for(let[t,s]of Object.entries(this.$refs.systemConfig.actualConfigData))for(let[n,i]of Object.entries(this.validations)){let r=[],a=s[`Go2FlowHeyLightPayment.settings.${n}`];i.required&&!this.isSet(a,"null"!==t)&&r.push("required"),r.length&&e.push({sci:t,field:n,errors:r})}return e},isSet(e,t){return""!==e&&(null!==e||t)&&(!Array.isArray(e)||e.length)},getConfigValue(e){let t=this.$refs.systemConfig.actualConfigData.null,s=this.$refs.systemConfig.currentSalesChannelId;return(null===s?t:this.$refs.systemConfig.actualConfigData[s])[`Go2FlowHeyLightPayment.settings.${e}`]||t[`Go2FlowHeyLightPayment.settings.${e}`]}}});let{Component:c,Mixin:d,State:h,Context:g}=Shopware,{mapPropertyErrors:u,mapGetters:p,mapState:m}=Shopware.Component.getComponentHelper(),{Criteria:f}=Shopware.Data;Shopware.Utils,c.register("heylight-order-detail",{template:'{% block maximizly_shipping_detail %}\n\n<div class="sw-order-detail-heylight">\n    <sw-card :title="$tc(\'HeyLight.order.detail.actions\')">\n        <sw-button-process\n            class=""\n            :isLoading="isLoading"\n            :disabled="isLoading || !buttonEnabled"\n            variant="primary"\n            @click.prevent="submitRefund">\n            {{ $tc(\'HeyLight.order.detail.actions_refund\') }}\n        </sw-button-process>\n    </sw-card>\n</div>\n\n{% endblock %}\n',inject:["repositoryFactory","HeyLightOrderService"],mixins:[d.getByName("notification")],metaInfo(){return{title:"HeyLight"}},data(){return{isLoading:!0,transaction:null}},computed:{buttonEnabled(){return!(null===this.transaction||"cancelled"===this.transaction.stateMachineState.technicalName||"refunded"===this.transaction.stateMachineState.technicalName||this.transaction.amount.totalPrice<=0)}},created(){this.loadOrderData()},methods:{submitRefund(){this.isLoading=!0,this.HeyLightOrderService.submitRefund(this.$route.params.transaction).then(e=>{e.success?this.createNotificationSuccess({title:this.$tc("HeyLight.order.messages.refundSuccessTitle"),message:this.$tc("HeyLight.order.messages.refundSuccessMessage")}):this.createNotificationError({title:this.$tc("HeyLight.order.messages.refundErrorTitle"),message:this.$tc("HeyLight.order.messages.refundErrorMessage")})}).catch(e=>{console.error(e)}).finally(()=>{this.loadOrderData()})},loadOrderData(){let e=this.repositoryFactory.create("order_transaction"),t=new f(1,1);return t.addAssociation("order"),t.addAssociation("order.lineItems"),t.addAssociation("stateMachineState"),e.get(this.$route.params.transaction,g.api,t).then(e=>{this.transaction=e,this.isLoading=!1})}}});var y=JSON.parse('{"HeyLight":{"mainMenuItemGeneral":"HeyLight","module":{"title":"HeyLight","description":"Buy now, pay later."},"settingsForm":{"title":"HeyLight","test":"Teste den API-Zugang","save":"Speichern","attention":"Wichtig","attentionText":"Damit das Plugin funktioniert, m\xfcssen alle * Pflichtfelder ausgef\xfcllt und die korrekten Adressdaten hinterlegt sein.","descriptionWebservice":"Den Secret Key bekommen Sie direkt von HeyLight zugewiesen und zugeschickt. Falls Sie diese noch nicht beantragt oder zugeschickt bekommen haben, k\xf6nnen Sie diese unter nachfolgendem Link bestellen: ","fields":{"secretKey":"Secret API Key","promotionPublicApiKey":"Public API Key","promotionWidgetFee":"Geb\xfchr","promotionProductMode":"Werbebotschaft Produkt","promotionTerms":"Anzahl der Raten (BNPL)","promotionTermsCredit":"Anzahl der Raten (Credit)"},"messages":{"required":"{field} darf nicht leer sein.","messageNotBlank":"Dieses Feld darf nicht leer sein.","titleSuccess":"Erfolg","titleError":"Fehler","titleMissing":"Pflichtfelder fehlen","messageMissing":"Bitte f\xfcllen Sie alle Pflichtfelder aus.","messageTestSuccess":"Die API-Zugangsdaten sind korrekt.","messageTestError":"Die API-Zugangsdaten sind falsch.","messageTestErrorGeneral":"Die API-Zugangsdaten konnten nicht verifiziert werden.","messageTestTitleEmpty":"Die API-Zugangsdaten sind leer.","messageTestErrorEmpty":"Die API-Zugangsdaten d\xfcrfen nicht leer sein.","messageSaveSuccess":"Die Plugin-Einstellungen wurden gespeichert.","messageSaveError":"Die Plugin-Einstellungen konnten nicht gespeichert werden."}},"supportModal":{"supportButton":"Support","title":"Wie k\xf6nnen wir Ihnen helfen?","supportDesc":"Kontaktieren Sie unser Support-Team","manualButton":"Dokumentation","manualDesc":"Lesen Sie unsere Integrations Anleitung"},"order":{"detail":{"actions":"Aktionen","actions_refund":"R\xfcckerstatten","tab":"HeyLight"},"messages":{"refundSuccessTitle":"R\xfcckerstattung erfolgreich!","refundSuccessMessage":"Die R\xfcckerstattung wurde erfolgreich verarbeitet","refundErrorTitle":"R\xfcckerstattung fehlgeschlagen!","refundErrorMessage":"Bitte versuchen Sie es erneut oder wenden Sie sich an den HeyLight-Support"}}}}'),w=JSON.parse('{"HeyLight":{"mainMenuItemGeneral":"HeyLight","module":{"title":"HeyLight","description":"HeyLight"},"settingsForm":{"title":"HeyLight","test":"Test API-Credentials","save":"Save","attention":"Important","attentionText":"For the plugin to work, all *mandatory fields must be filled in and the correct address data must be stored.","descriptionWebservice":"The Client Secret Key will be assigned and sent to you directly by HeyLight. If you have not yet requested or received them, you can order them at the following link: ","fields":{"secretKey":"Secret API Key","promotionPublicApiKey":"Public API Key","promotionWidgetFee":"Display price","promotionProductMode":"Promotion Product","promotionTerms":"Number of Instalments (BNPL)","promotionTermsCredit":"Number of Instalments (Credit)"},"messages":{"required":"{field} must not be empty.","messageNotBlank":"This Field must not be empty.","titleSuccess":"Success","titleError":"Error","titleMissing":"Required Fields","messageMissing":"Please fill out all required fields","messageTestSuccess":"The API credentials are correct.","messageTestError":"The API credentials are wrong.","messageTestErrorGeneral":"The API-Credentials could not be verified.","messageTestTitleEmpty":"The API credentials are empty.","messageTestErrorEmpty":"The API credentials cant be empty. please fill in the Secret Key.","messageSaveSuccess":"The plugin settings have been saved.","messageSaveError":"The plugin settings could not be saved."}},"supportModal":{"supportButton":"Support","title":"How Can We Help You?","supportDesc":"Contact our support team","manualButton":"Manual","manualDesc":"Read our integration manual"},"order":{"detail":{"actions":"Actions","actions_refund":"Refund","tab":"HeyLight"},"messages":{"refundSuccessTitle":"Refund successful!","refundSuccessMessage":"The refund was successfully processed","refundErrorTitle":"Refund failed!","refundErrorMessage":"Please try again or contact the HeyLight-Support"}}}}');let{Module:v}=Shopware;v.register("heylight-heylight",{type:"plugin",name:"HeyLight",title:"HeyLight.mainMenuItemGeneral",version:"1.0.0",targetVersion:"1.0.0",color:"#2b52ff",icon:"regular-cog",snippets:{"de-DE":y,"de-CH":y,"en-GB":w},routes:{index:{component:"heylight-settings",path:"index",meta:{parentPath:"sw.settings.index"}}},settingsItem:{name:"heylight-settings",group:"plugins",to:"heylight.heylight.index",iconComponent:"heylight-settings-icon",backgroundEnabled:!0},routeMiddleware(e,t){"sw.order.detail"===t.name&&t.children.push({component:"heylight-order-detail",name:"heylight.order.detail",path:"/sw/order/detail/:id/heylight/:transaction",meta:{parentPath:"sw.order.index",privilege:"order.viewer"}}),e(t)}});var b=JSON.parse('{"sw-order":{"list":{"heylight_reference":"HeyLight Reference"}}}'),S=JSON.parse('{"sw-order":{"list":{"heylight_reference":"HeyLight Reference"}}}');let{Component:_}=Shopware;Shopware.Locale.extend("de-DE",b),Shopware.Locale.extend("en-GB",S),Shopware.Component.override("sw-order-list",{template:'{% block sw_order_list_grid_columns %}\n    {% parent() %}\n\n    {% block sw_order_list_grid_columns_heylight_reference %}\n        <template #column-id="{ item }">\n            {{ getExternalPayReference(item)}}\n        </template>\n    {% endblock %}\n\n{% endblock %}',methods:{getOrderColumns(){let e=this.$super("getOrderColumns");return e.push({property:"id",label:"sw-order.list.heylight_reference",align:"left"}),e},getExternalPayReference(e){return e.transactions.length&&e.transactions.find(e=>e.customFields&&e.customFields.external_contract_uuid)?"HL_"+e.orderNumber:"-"}}});let{Component:H,Context:C}=Shopware,{Criteria:L}=Shopware.Data;H.override("sw-order-detail",{template:'{% block sw_order_detail_content_tabs_general %}\n    {% parent %}\n\n    <template v-for="transaction in heylightTransactions">\n        {% block heylight_payment_payment_tab %}\n            <sw-tabs-item :route="{ name: \'heylight.order.detail\', params: { id: $route.params.id, transaction: transaction.id } }" title="HeyLight">\n                {{ $tc(\'HeyLight.order.detail.tab\') }}\n            </sw-tabs-item>\n        {% endblock %}\n    </template>\n\n{% endblock %}\n',data(){return{heylightTransactions:[]}},watch:{orderId:{deep:!0,handler(){this.heylightTransactions=[],this.orderId&&this.loadOrderData()},immediate:!0}},methods:{loadOrderData(){let e=this.repositoryFactory.create("order"),t=new L(1,1);return t.addAssociation("transactions"),t.addAssociation("transactions.paymentMethod"),e.get(this.$route.params.id,C.api,t).then(e=>{this.loadTransactions(e)})},loadTransactions(e){e.transactions.forEach(e=>{"heylight_heylight"===e.paymentMethod.technicalName&&this.heylightTransactions.push(e)})}}});let{Application:k}=Shopware,T=k.getContainer("init");k.addServiceProvider("HeyLightAPIService",e=>new t(T.httpClient,e.loginService))}()})();