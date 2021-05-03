import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { appConstants } from '../Constants/global.constants';
import { CompanyProfile } from '../Models/CompanyProfile';

@Injectable()
export class companymanagementapiservice
{
    constructor(private httpClient: HttpClient) {}

    // registerCompany(company: CompanyProfile): Observable<any> {
    //     return this.httpClient.post('http://localhost:53870/api/v1.0/market/company/register', company);
    // }

    registerCompany(company: CompanyProfile): Observable<any> {
        return this.httpClient.post(appConstants.API_BASE_URI 
            + appConstants.API_COMPANY_BASE_ROUTE 
            + appConstants.REGISTER_COMPANY
            , company);
    }

    // deleteCompany(companyCode: string): Observable<any> {
    //     return this.httpClient.delete('http://localhost:53870/api/v1.0/market/company/delete/' + companyCode);
    // }

    deleteCompany(companyCode: string): Observable<any> {
        return this.httpClient.delete(appConstants.API_BASE_URI 
            + appConstants.API_COMPANY_BASE_ROUTE 
            + appConstants.DELETE_COMPANY
            + companyCode);
    }
}
