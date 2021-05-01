import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NewStock } from '../Models/NewStock';
import { stockmanagementapiservice } from '../Services/stockmanagementapi.services';

@Component({
  selector: 'app-company-management',
  templateUrl: './company-management.component.html',
  styleUrls: ['./company-management.component.css']
})
export class CompanyManagementComponent implements OnInit {

  constructor(private _stockmanagementapiservice: stockmanagementapiservice, 
    private router: Router) { }

  @Input() showCompanyManagerScreen = false;
  @Input() companyCode = '';
  @Input() stockID = '';
  @Input() isReadOnly = false;
  @Output() showCompanyManagerScreenEvent = new EventEmitter<boolean>();
  @ViewChild('stockPriceInput') stockPriceInputName: any;

  //Properties  
  stockPrice = 0.0;
  inputStockID = '';
  notAdded = true;
  additionNotFailed = true;


  ngOnInit(): void {
  }

  // MakeReadOnly(): boolean  {
  //   console.log('StockID', this.stockID);
  //   if(this.stockID && this.stockID != '')
  //   {
  //     this.isReadOnly = true;
  //   }

  //   return this.isReadOnly;
  // }

  SetStockPrice (event: any) {
    this.additionNotFailed = true;
    this.notAdded = true;
    this.stockPrice = event.target.value;
  }

  SetStockID (event: any) {
    this.additionNotFailed = true;
    this.notAdded = true;
    this.inputStockID = event.target.value;
  }

  AddStock(event: any) {
    console.log('Stock details Added');
    console.log('stock price', this.stockPrice);
    if((this.stockID || this.inputStockID) && this.stockPrice > 0)
    {
      var stocks = new NewStock();
      stocks.stockID = this.stockID ? this.stockID : this.inputStockID;
      stocks.stockPrice = this.stockPrice;

      console.log('stocks', stocks);
      console.log('Compnay Code', this.companyCode);
      //Make API call to Add Stock
      this._stockmanagementapiservice.addStockToCompany(this.companyCode, stocks)
      .subscribe
      (
        data=>
        {
          if(data && data.regStatusMessage == 'Registration unsuccessful!')
          {
            this.additionNotFailed = false;
          }
          else
          {
            this.notAdded = false;
          }
        }
      );
      this.stockPrice = 0.0;
      this.stockPriceInputName.nativeElement.value = 0.0;
    }
    else
    {
      alert('Stock ID and Stock Price are mandatory, Stock price must be greater than 0!')
    }    

  }

  navigateToHome(event: any) {
    this.companyCode = '';
    this.stockPrice = 0.0;
    this.stockPriceInputName.nativeElement.value = 0.0;
    this.isReadOnly = false;
    this.showCompanyManagerScreenEvent.emit(true);
  }

}
