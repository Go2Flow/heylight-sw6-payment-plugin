const ApiService = Shopware.Classes.ApiService;

class HeyLightAPIService extends ApiService {
    constructor(httpClient, loginService, apiEndpoint = 'heylight_api_service') {
        super(httpClient, loginService, apiEndpoint);
    }

    get(path) {

        return this.httpClient.get(
            `_action/${this.getApiBasePath()}${path}`,
            {
                headers: this.getBasicHeaders()
            }
        ).then((response) => {
            return ApiService.handleResponse(response);
        });
    }

    post(path, data) {

        return this.httpClient.post(
            `_action/${this.getApiBasePath()}${path}`,
            data,
            {
                headers: this.getBasicHeaders()
            }
        ).then((response) => {
            return ApiService.handleResponse(response);
        });
    }
}

export default HeyLightAPIService;
