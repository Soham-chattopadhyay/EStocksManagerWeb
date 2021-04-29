import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserProfile } from '../Models/UserProfile';

@Injectable()
export class usermanagementapiservice
{
    constructor(private httpClient: HttpClient) {}

    registerUser(user: UserProfile): Observable<any> {
        return this.httpClient.post('http://localhost:53870/api/v1.0/market/user/add', user, {responseType: 'text' as 'json'});
    }

    // getCompanyInfo(comnapnyCode: string): Observable<any> {
    //     return this.httpClient.get('http://localhost:53870/api/v1.0/market/company/info/' + comnapnyCode );
    // }

    // getStockyInfo(comnapnyCode: string, startDate: string, toDate: string): Observable<any> {
    //     return this.httpClient.get('http://localhost:53870/api/v1.0/market/stock/get/' 
    //     + comnapnyCode
    //     + '/' + startDate
    //     + '/' + toDate );
    // }
}
