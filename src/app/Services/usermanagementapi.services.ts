import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { appConstants } from '../Constants/global.constants';
import { UserProfile } from '../Models/UserProfile';

@Injectable()
export class usermanagementapiservice
{
    constructor(private httpClient: HttpClient) {}

    // registerUser(user: UserProfile): Observable<any> {
    //     return this.httpClient.post('http://localhost:53870/api/v1.0/market/user/add', user, {responseType: 'text' as 'json'});
    // }

    registerUser(user: UserProfile): Observable<any> {
        return this.httpClient.post(appConstants.API_BASE_URI 
            + appConstants.API_USER_BASE_ROUTE 
            + appConstants.REGISTER_USER
            , user
            , {responseType: 'text' as 'json'});
    }


    // getUserIDAvailability(userID: string): Observable<any> {
    //     return this.httpClient.get('http://localhost:53870/api/v1.0/market/user/verifyUserID/' 
    //     + userID, {responseType: 'text' as 'json'});
    // }

    getUserIDAvailability(userID: string): Observable<any> {
        return this.httpClient.get(appConstants.API_BASE_URI 
            + appConstants.API_USER_BASE_ROUTE 
            + appConstants.VERIFY_USER_ID
            + userID, {responseType: 'text' as 'json'});
    }

    // getUserInfo(userID: string, passowrd: string): Observable<any> {
    //     return this.httpClient.get('http://localhost:53870/api/v1.0/market/user/get/' 
    //     + userID
    //     + '/' + passowrd, {responseType: 'text' as 'json'});
    // }

    getUserInfo(userID: string, passowrd: string): Observable<any> {
        return this.httpClient.get(appConstants.API_BASE_URI 
            + appConstants.API_USER_BASE_ROUTE 
            + appConstants.GET_USER
            + userID
            + '/' + passowrd, {responseType: 'text' as 'json'});
    }
}
