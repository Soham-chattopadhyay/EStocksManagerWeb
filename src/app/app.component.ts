import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { CompanyProfile } from './Models/CompanyProfile';
import { stockmanagementapiservice } from './Services/stockmanagementapi.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private _stockmanagementapiservice:stockmanagementapiservice ){}

  //Properties
  companyDropDownSelection = 'List All Companies';
  selectedFromDate = '';
  selectedToDate = '';
  companyCode = '';
  stockInfoHeaders = ['Stock Price','Date','TIME'];
  stockInfoRows = [
    {
      "companyCode": "APL",
      "stockID": "AAPL",
      "stockPrice": 126128,
      "priceAsOfDate": "04-23-2021",
      "priceAsOfTime": "16:51:33"
    },
    {
      "companyCode": "APL",
      "stockID": "AAPL",
      "stockPrice": 126129,
      "priceAsOfDate": "04-23-2021",
      "priceAsOfTime": "16:51:39"
    },
    {
      "companyCode": "APL",
      "stockID": "AAPL",
      "stockPrice": 126116,
      "priceAsOfDate": "04-23-2021",
      "priceAsOfTime": "16:51:47"
    },
    {
      "companyCode": "APL",
      "stockID": "AAPL",
      "stockPrice": 134251,
      "priceAsOfDate": "04-23-2021",
      "priceAsOfTime": "16:55:50"
    },
    {
      "companyCode": "APL",
      "stockID": "AAPL",
      "stockPrice": 14526,
      "priceAsOfDate": "04-25-2021",
      "priceAsOfTime": "08:16:08"
    },
    {
      "companyCode": "APL",
      "stockID": "AAPL",
      "stockPrice": 14579,
      "priceAsOfDate": "04-25-2021",
      "priceAsOfTime": "08:16:19"
    }
  ];

  listOfCompanies: CompanyProfile[];
  selectedCompanyInfo: CompanyProfile = new CompanyProfile();

  ngOnInit() {
    //Make API call to populate list of available companies on page load
    this._stockmanagementapiservice.getAllCompanyInfo()
    .subscribe
    (
      data=>
      {
        this.listOfCompanies = data;
      }
    );

    console.log('listOfCompanies', this.listOfCompanies);
    
  }

  //#region  Get Date Range
  FromDateEntry(event: any) {
    console.log(event.target.valueAsDate);
    this.selectedFromDate = formatDate(event.target.valueAsDate, 'MM-dd-yyyy', 'en-US');
    console.log('selectedFromDate', this.selectedFromDate);
  }

  ToDateEntry(event: any) {
    console.log(event.target.valueAsDate);
    this.selectedToDate = formatDate(event.target.valueAsDate, 'MM-dd-yyyy', 'en-US');
    console.log('selectedToDate', this.selectedToDate);
  }

  //#endregion

  onOptionsSelected(event: any){
    console.log(event.target.value);

    //Make API call to populate list of available companies on page load
    this._stockmanagementapiservice.getCompanyInfo(event.target.value)
    .subscribe
    (
      data=>
      {
        this.selectedCompanyInfo = data;
        console.log('selectedCompanyInfo', this.selectedCompanyInfo);
      }
    );
  }

  intitaSearch () {
    //Make API call to populate list of available companies on page load
    this._stockmanagementapiservice.getCompanyInfo(this.companyCode)
    .subscribe
    (
      data=>
      {
        this.selectedCompanyInfo = data;
        console.log('selectedCompanyInfo', this.selectedCompanyInfo);
      }
    );
  }
  
  setCompanyCode(event: any) {
    this.companyCode = event.target.value;
    console.log('companyCode', this.companyCode);
  }

  setHeader(event: any, header: string) {
    console.log(event.target.value);
    this.companyDropDownSelection = header;
  }
  
}
