import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyProfile } from '../Models/CompanyProfile';
import { companymanagementapiservice } from '../Services/companymanagementapi.service';
import { stockmanagementapiservice } from '../Services/stockmanagementapi.services';

@Component({
  selector: 'app-company-register',
  templateUrl: './company-register.component.html',
  styleUrls: ['./company-register.component.css']
})
export class CompanyRegisterComponent implements OnInit {
  

  constructor(private _companymanagementapiservice: companymanagementapiservice,
    private router: Router,
    private _stockmanagementapiservice: stockmanagementapiservice) { };

  @ViewChild('code') code: any;
  @ViewChild('name') name: any;
  @ViewChild('ceo') ceo: any;
  @ViewChild('website') website: any;
  @ViewChild('turnover') turnover: any;
  @ViewChild('stockEx') stockEx: any;

  //Properties
  companyCode: string = '';
  comapanyName: string = '';
  companyCEO: string = '';
  companyWebsite: string = '';
  comapanyStockExchange: string = '';
  regStatusMessage = '';
  companyTurnover: number = 0.0;
  showSignInPage = true;
  notVerified = true;
  hideRegError = true;
  notRegistered = true;
  hideRegFailMessage = true;
  companyCodeNotAvailable = true;

  ngOnInit(): void {}

  setCompanyProfile(event: any, field: string) {
    if (field == 'CCD') {
      this.companyCode = event.target.value;
    } else if (field == 'CCO') {
      this.companyCEO = event.target.value;
    } else if (field == 'CCM' ) {
      this.comapanyName = event.target.value;
    } else if (field == 'CTO' ) {
      this.companyTurnover = event.target.value;
    } else if (field == 'CWS' ) {
      this.companyWebsite = event.target.value;
    } else if (field == 'CSE' ) {
      this.comapanyStockExchange = event.target.value;
    }
    this.notRegistered = true;
    this.hideRegFailMessage = true;
  }

  registerNewCompany() {

    if(this.companyCode 
    && this.comapanyName 
    && this.companyCEO 
    && this.companyWebsite 
    && this.comapanyStockExchange
    && (this.companyTurnover > 100000000))
    {
      var compnayProfile = new CompanyProfile();
      compnayProfile.companyCode = this.companyCode;
      compnayProfile.companyName = this.comapanyName;
      compnayProfile.companyCEO = this.companyCEO;
      compnayProfile.companyWebsite = this.companyWebsite;
      compnayProfile.companyTurnover = this.companyTurnover;
      compnayProfile.stockEnchange = this.comapanyStockExchange;

      console.log('compnayProfile', compnayProfile);
      this._companymanagementapiservice.registerCompany(compnayProfile)
        .subscribe(
          data => {
            console.log('CompanyInfo', data);
            if (data && data.companyCode) {
              this.companyCode = data.companyCode;
              this.comapanyName = data.comapanyName;
              this.companyCEO = data.companyCEO;
              this.companyWebsite = data.companyWebsite;
              this.companyTurnover = data.companyTurnover;
              this.comapanyStockExchange = data.comapanyStockExchange;

              console.log(data.regStatusMessage);
              if(data.regStatusMessage == 'Registration unsuccessful!')
              {                
                this.hideRegFailMessage = false;
              }
              else{
                this.notRegistered = false;
              }                          
            }
            else
            {
              this.hideRegFailMessage = false;
            }
            
            this.code.nativeElement.value = '';
            this.name.nativeElement.value = '';
            this.website.nativeElement.value = '';
            this.ceo.nativeElement.value = '';
            this.turnover.nativeElement.value = '';
            this.stockEx.nativeElement.value = '';
          },
          err => {
            console.log('HTTP Error', err);
            this.code.nativeElement.value = '';
            this.name.nativeElement.value = '';
            this.website.nativeElement.value = '';
            this.ceo.nativeElement.value = '';
            this.turnover.nativeElement.value = '';
            this.stockEx.nativeElement.value = '';
          }
        );
    }
    else
    {
      alert('All fields are mandatory and Company Turnover must be greater than 10Cr.')
      this.hideRegFailMessage = false;
    }
    this.hideRegError = true;
    this.companyCodeNotAvailable = true;
  }

  findCompany() {
    this.companyCodeNotAvailable = true;
    console.log('Company Code Check', this.companyCode);

    if (this.companyCode) {
      this._stockmanagementapiservice.getCompanyInfo(this.companyCode)
        .subscribe(
          data => {
            console.log('Company', data);
            if (data && data.companyCode) {
              console.log('Company - Found');
              this.companyCode = data.companyCode;
              this.comapanyName = data.comapanyName;
              this.companyCEO = data.companyCEO;
              this.companyWebsite = data.companyWebsite;
              this.companyTurnover = data.companyTurnover;
              this.comapanyStockExchange = data.comapanyStockExchange;
              this.hideRegError = false;
              this.companyCodeNotAvailable = true;
            }
            else {
              this.hideRegError = true;
              this.companyCodeNotAvailable = false;
            }
          },
          err => {
            console.log('HTTP Error', err);
          }
        );
    } else {
      alert('Please enter a Company Code!')
    }
  }

  navigateToHome(event: any) {
    this.router.navigate(['company-detail']);
  }

}
