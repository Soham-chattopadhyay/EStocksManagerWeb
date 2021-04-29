import { formatDate } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CompanyProfile } from '../Models/CompanyProfile';
import { CompanyStocks } from '../Models/CompanyStocks';
import { stockmanagementapiservice } from '../Services/stockmanagementapi.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  constructor(private _stockmanagementapiservice:stockmanagementapiservice,
    private router: Router ){}
  @ViewChild('compnayCodeSearch') inputName: any;

  //Properties
  title = 'EStocksManagerWeb'
  companyDropDownSelection = 'List All Companies';
  selectedFromDate = '';
  selectedToDate = '';
  companyCode = '';
  stockInfoHeaders = ['Stock Price','Date','TIME'];
  stockInfo: CompanyStocks = new CompanyStocks();
  stockFetchNotAllowed = true;
  stocksInfoHidden = true;
  disableSearch = true;
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
    
    //Set Default date value
    this.selectedFromDate = formatDate(new Date(), 'MM-dd-yyyy', 'en-US');
    console.log('default-selectedFromDate', this.selectedFromDate);
    this.selectedToDate = formatDate(new Date(), 'MM-dd-yyyy', 'en-US');
    console.log('default-selectedToDate', this.selectedToDate);
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
    this._stockmanagementapiservice.getCompanyInfo(event.target.value)
    .subscribe
    (
      data=>
      {
        this.selectedCompanyInfo = data;
        console.log('selectedCompanyInfo', this.selectedCompanyInfo);
        this.stockFetchNotAllowed = false;
        this.inputName.nativeElement.value = '';
        this.companyCode = this.selectedCompanyInfo.companyCode;
        this.stockInfo = new CompanyStocks();        
        this.stocksInfoHidden = true;        
        this.disableSearch = true;
      }
    );
  }

  initiateSearch () {
    this._stockmanagementapiservice.getCompanyInfo(this.companyCode)
    .subscribe
    (
      data=>
      {
        this.selectedCompanyInfo = data;
        console.log('selectedCompanyInfo', this.selectedCompanyInfo);

        if(data != null && data.companyCode)
        {
          this.stockFetchNotAllowed = false;
        }
        else
        {
          this.stockFetchNotAllowed = true;
        }
        
        this.companyDropDownSelection = 'List All Companies';
        this.stockInfo = new CompanyStocks();
        this.stocksInfoHidden = true;
        this.disableSearch = true;
        this.inputName.nativeElement.value = '';
      }
    );
  }
  
  setCompanyCode(event: any) {
    this.companyCode = event.target.value;
    this.disableSearch = false;
    this.stockFetchNotAllowed = true;
  }

  setCompanyListDropDownHeader(event: any, header: string) {
    this.companyDropDownSelection = header;
  }

  fetchStockInfo() {
    this._stockmanagementapiservice.getStockyInfo(this.companyCode, this.selectedFromDate, this.selectedToDate)
    .subscribe
    (
      data=>
      {
        this.stockInfo = data;
        console.log('stockInfo', this.stockInfo);

        if(this.stockInfo != null && this.stockInfo.stockDetails !=null && this.stockInfo.stockDetails.length > 0)
        {
          this.stocksInfoHidden = false;
        }
        else{
          this.stocksInfoHidden = true;
        }
      }
    );
  }

  navigateToCompanyManager (event: any) {
    this.router.navigate( ['manage-company'] );
  }

  navigateToCompanyRegister (event: any) {
    this.router.navigate( ['register-company'] );
  }

}
