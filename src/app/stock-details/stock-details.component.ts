import { Component, Input, OnInit } from '@angular/core';
import { CompanyStocks } from '../Models/CompanyStocks';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {
  @Input() stocksInfoHidden = true;
  @Input() hideNoStocksMessage = true;
  @Input() stockInfo = new CompanyStocks();

  stockInfoHeaders = ['Stock ID','Stock Price','Date','TIME'];

  constructor() { }

  ngOnInit(): void {
  }

}
