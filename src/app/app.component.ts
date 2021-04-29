import { formatDate } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { CompanyProfile } from './Models/CompanyProfile';
import { CompanyStocks } from './Models/CompanyStocks';
import { stockmanagementapiservice } from './Services/stockmanagementapi.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(){}

  //Properties
  title = 'EStocksManagerWeb';
  stockInfo: CompanyStocks = new CompanyStocks();
  stocksInfoHidden = true;

  ngOnInit() {
  }
  
  GetStockInfoFromCompanyDetail (stockInfoData: CompanyStocks) {
    if(stockInfoData != null) {
      this.stockInfo = stockInfoData;
    }
  }

  GetStockInfoHideenFlagFromCompanyDetail (stocksInfoHiddenFlag: boolean) {
    this.stocksInfoHidden = stocksInfoHiddenFlag;
  }
  
}
