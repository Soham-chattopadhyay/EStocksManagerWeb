import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { appConstants } from '../Constants/global.constants';
import { NewStock } from '../Models/NewStock';

@Injectable()
export class stockmanagementapiservice
{
    constructor(private httpClient: HttpClient) {}

    // getAllCompanyInfo(): Observable<any> {
    //     return this.httpClient.get('http://localhost:53870/api/v1.0/market/company/getall');
    // }

    getAllCompanyInfo(): Observable<any> {
        return this.httpClient.get(appConstants.API_BASE_URI 
            + appConstants.API_COMPANY_BASE_ROUTE 
            + appConstants.ALL_COMPANY_INFO);
    }

    // getCompanyInfo(comnapnyCode: string): Observable<any> {
    //     return this.httpClient.get('http://localhost:53870/api/v1.0/market/company/info/' + comnapnyCode );
    // }

    getCompanyInfo(comnapnyCode: string): Observable<any> {
        return this.httpClient.get(appConstants.API_BASE_URI 
            + appConstants.API_COMPANY_BASE_ROUTE 
            + appConstants.COMPANY_INFO
            + comnapnyCode );
    }

    // getStockyInfo(comnapnyCode: string, startDate: string, toDate: string): Observable<any> {
    //     return this.httpClient.get('http://localhost:53870/api/v1.0/market/stock/get/' 
    //     + comnapnyCode
    //     + '/' + startDate
    //     + '/' + toDate );
    // }

    getStockyInfo(comnapnyCode: string, startDate: string, toDate: string): Observable<any> {
        return this.httpClient.get(appConstants.API_BASE_URI 
            + appConstants.API_STOCK_BASE_ROUTE 
            + appConstants.GET_STOCK_INFO
            + comnapnyCode
            + '/' + startDate
            + '/' + toDate );
    }

    // addStockToCompany(companyCode: string, stock: NewStock): Observable<any> {
    //     return this.httpClient.post('http://localhost:53870/api/v1.0/market/stock/add/' + companyCode, stock);
    // }

    addStockToCompany(companyCode: string, stock: NewStock): Observable<any> {
        return this.httpClient.post(appConstants.API_BASE_URI 
            + appConstants.API_STOCK_BASE_ROUTE 
            + appConstants.ADD_STOCK
            + companyCode, stock);
    }
}
