export class CompanyStocks {
    constructor () {
        this.stockDetails = [];
    }
  stockDetails: StockDetail[];
  maxStockPrice: number;
  minStockPrice: number;
  avgStockPrice: number;
}

class StockDetail {
  companyCode: string;
  stockID: string;
  stockPrice: number;
  priceAsOfDate: string;
  priceAsOfTime: string;
}