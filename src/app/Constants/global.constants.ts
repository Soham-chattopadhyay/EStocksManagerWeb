export const appConstants = {
    API_BASE_URI: 'https://new-az-wba-sc-fse.azurewebsites.net/',
    API_COMPANY_BASE_ROUTE: 'api/v1.0/market/company/',
    API_STOCK_BASE_ROUTE: 'api/v1.0/market/stock/',
    API_USER_BASE_ROUTE: 'api/v1.0/market/user/',

    //Company API endpoints
    REGISTER_COMPANY: 'register',
    COMPANY_INFO: 'info/',
    ALL_COMPANY_INFO: 'getall',
    DELETE_COMPANY: 'delete/',

    //Stock API endpoints
    ADD_STOCK: 'add/',
    GET_STOCK_INFO: 'get/',

    //User API endpoints
    REGISTER_USER: 'add',
    GET_USER: 'get/',
    VERIFY_USER_ID: 'verifyUserID/',
    DELETE_USER: 'delete/'
}