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
  selectedFromDate = '';
  selectedToDate = '';
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

  ngOnInit() {
    //Make API call to populate list of available companies on page load
    this._stockmanagementapiservice.getCompanyInfo()
    .subscribe
    (
      data=>
      {
        this.listOfCompanies = data;
      }
    );
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


}
