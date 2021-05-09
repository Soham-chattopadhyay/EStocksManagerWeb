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
  hideNoStocksMessage = true;
  disableSearch = true;
  listOfCompanies: CompanyProfile[];
  selectedCompanyInfo: CompanyProfile = new CompanyProfile();
  manageStockIDEntry = false;

  showCompanyManagerScreen = false;

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

  MakeHidden() : boolean {
    if(this.companyCode)
    {
      return false;
    }

    return true;

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
    this.manageStockIDEntry = false;
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
        this.hideNoStocksMessage = true;        
        this.disableSearch = true;

        if(data && data.stockID && data.stockID !== '')
        {
          this.manageStockIDEntry = true;
        }

      }
    );
  }

  initiateSearch () {
    this.manageStockIDEntry = false;
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
        if(data && data.stockID && data.stockID !== '')
        {
          this.manageStockIDEntry = true;
        }
        
        this.companyDropDownSelection = 'List All Companies';
        this.stockInfo = new CompanyStocks();
        this.stocksInfoHidden = true;
        this.hideNoStocksMessage = true;
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
    this.hideNoStocksMessage = true;
    this._stockmanagementapiservice.getStockInfo(this.companyCode, this.selectedFromDate, this.selectedToDate)
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
          this.hideNoStocksMessage = false;
          this.stocksInfoHidden = true;
        }
      }
    );
  }

  UpdateCompanyManagerScreenFlag(event: any)
  {
    this.showCompanyManagerScreen = false;
  }

  navigateToCompanyManager (event: any) {
    this.showCompanyManagerScreen = true;
    this.stocksInfoHidden = true;
    this.hideNoStocksMessage = true;
  }

  navigateToCompanyRegister (event: any) {
    this.router.navigate( ['register-company']); // , { skipLocationChange: true }
  }

  navigateToLogin (event: any) {
    this.router.navigate( ['']);
  }

}
