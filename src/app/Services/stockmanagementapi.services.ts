import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class stockmanagementapiservice
{
    constructor(private httpClient: HttpClient) {}

    getCompanyInfo(): Observable<any> {
        return this.httpClient.get('http://localhost:53870/api/v1.0/market/company/getall');
    }
}
