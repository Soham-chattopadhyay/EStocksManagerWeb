import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfile } from '../Models/UserProfile';
import { usermanagementapiservice } from '../Services/usermanagementapi.services';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private _usermanagementapiservice: usermanagementapiservice, private router: Router ){};

  //Properties
  userID: string;
  userName: string;
  password: string;

  ngOnInit(): void {
  }
  
  setUserProfile(event: any, field: string) {
    if( field == 'ID')
    {
      this.userID = event.target.value;
    }
    else if(field == 'NAME')
    {
      this.userName = event.target.value;
    }
    else
    {
      this.password = event.target.value;
    }
  }
  
  registerNewUser() {
  //Test request data
  var userProfile = new UserProfile();
  userProfile.userID = this.userID;
  userProfile.userName = this.userName;
  userProfile.password = this.password;

  console.log('userProfile', userProfile);
  this._usermanagementapiservice.registerUser(userProfile)
    .subscribe
    (
      data=>
      {
        this.userID = data;
        console.log('UserID', data);
        if(data)
        {
          this.navigateToCompanyDetails();
        }
      }
    );

  }

  navigateToCompanyDetails () {
    this.router.navigate( ['company-detail'] );
  }

}
