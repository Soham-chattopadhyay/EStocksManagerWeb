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

    getUserIDAvailability(userID: string): Observable<any> {
        return this.httpClient.get('http://localhost:53870/api/v1.0/market/user/verifyUserID/' 
        + userID, {responseType: 'text' as 'json'});
    }

    getUserInfo(userID: string, passowrd: string): Observable<any> {
        return this.httpClient.get('http://localhost:53870/api/v1.0/market/user/get/' 
        + userID
        + '/' + passowrd, {responseType: 'text' as 'json'});
    }
}
