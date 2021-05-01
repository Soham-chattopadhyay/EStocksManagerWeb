import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyProfile } from '../Models/CompanyProfile';

@Injectable()
export class companymanagementapiservice
{
    constructor(private httpClient: HttpClient) {}

    registerCompany(company: CompanyProfile): Observable<any> {
        return this.httpClient.post('http://localhost:53870/api/v1.0/market/company/register', company);
    }

    deleteCompany(companyCode: string): Observable<any> {
        return this.httpClient.delete('http://localhost:53870/api/v1.0/market/company/delete/' + companyCode);
    }
}
