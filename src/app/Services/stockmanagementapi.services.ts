import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewStock } from '../Models/NewStock';

@Injectable()
export class stockmanagementapiservice
{
    constructor(private httpClient: HttpClient) {}

    getAllCompanyInfo(): Observable<any> {
        return this.httpClient.get('http://localhost:53870/api/v1.0/market/company/getall');
    }

    getCompanyInfo(comnapnyCode: string): Observable<any> {
        return this.httpClient.get('http://localhost:53870/api/v1.0/market/company/info/' + comnapnyCode );
    }

    getStockyInfo(comnapnyCode: string, startDate: string, toDate: string): Observable<any> {
        return this.httpClient.get('http://localhost:53870/api/v1.0/market/stock/get/' 
        + comnapnyCode
        + '/' + startDate
        + '/' + toDate );
    }

    addStockToCompany(companyCode: string, stock: NewStock): Observable<any> {
        return this.httpClient.post('http://localhost:53870/api/v1.0/market/stock/add/' + companyCode, stock);
    }
}
