import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  UserProfile
} from '../Models/UserProfile';
import {
  usermanagementapiservice
} from '../Services/usermanagementapi.services';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private _usermanagementapiservice: usermanagementapiservice, private router: Router) {};
  @ViewChild('signuserID') inputUserID: any;
  @ViewChild('signPassword') inputPassword: any;
  @ViewChild('reguserName') regUserName: any;
  @ViewChild('reguserID') regUserID: any;
  @ViewChild('regPassword') regPassword: any;

  //Properties
  userID: string;
  userName: string;
  password: string;
  showSignInPage = true;
  notVerified = true;
  hideRegError = true;

  ngOnInit(): void {}

  setUserProfile(event: any, field: string) {
    if (field == 'ID') {
      this.userID = event.target.value;
    } else if (field == 'NAME') {
      this.userName = event.target.value;
    } else {
      this.password = event.target.value;
    }
  }

  showRegistrationForm() {
    this.showSignInPage = false;
    this.inputUserID.nativeElement.value = '';
    this.regUserName.nativeElement.value = '';
    this.inputPassword.nativeElement.value = '';
    this.regUserID.nativeElement.value = '';
    this.regPassword.nativeElement.value = '';
  }

  registerNewUser() {

    var userProfile = new UserProfile();
    userProfile.userID = this.userID;
    userProfile.userName = this.userName;
    userProfile.password = this.password;

    console.log('userProfile', userProfile);
    this._usermanagementapiservice.registerUser(userProfile)
      .subscribe(
        data => {
          this.userID = data;
          console.log('UserID', data);
          if (data) {
            this.showSignInPage = true;
          } else {
            this.inputUserID.nativeElement.value = '';
            this.regUserName.nativeElement.value = '';
            this.inputPassword.nativeElement.value = '';
            this.regUserID.nativeElement.value = '';
            this.regPassword.nativeElement.value = '';
          }
        }
      );
  }

  validateLogin() {
    if (this.userID && this.password) {
      this._usermanagementapiservice.getUserInfo(this.userID, this.password)
        .subscribe(
          data => {
            this.userID = data;
            console.log('UserID', data);
            if (data) {
              console.log('User Validated');
              this.navigateToCompanyDetails();
            } else {
              console.log('Invalid user');
              this.inputUserID.nativeElement.value = '';
              this.regUserName.nativeElement.value = '';
              this.inputPassword.nativeElement.value = '';
              this.regUserID.nativeElement.value = '';
              this.regPassword.nativeElement.value = '';
              this.notVerified = false;
            }
          },
          err => {
            console.log('HTTP Error', err);
            this.notVerified = false;
          }
        );
    } else {
      alert('Please enter UserID and Passowrd!')
    }

  }

  findUser() {
    if (this.userID) {
      if (this.userID.length > 3) {
        this._usermanagementapiservice.getUserIDAvailability(this.userID)
          .subscribe(
            data => {
              this.userID = data;
              console.log('UserID', data);
              if (data) {
                console.log('User Found');
                this.inputUserID.nativeElement.value = '';
                this.regUserName.nativeElement.value = '';
                this.inputPassword.nativeElement.value = '';
                this.regUserID.nativeElement.value = '';
                this.regPassword.nativeElement.value = '';
                this.hideRegError = false;
              }
            },
            err => {
              console.log('HTTP Error', err);
            }
          );
      } else {
        alert('User ID must be greater than 3 characters!');
      }
    } else {
      alert('Please enter UserID!')
    }
  }

  navigateToCompanyDetails() {
    this.router.navigate(['company-detail']);
  }

}
