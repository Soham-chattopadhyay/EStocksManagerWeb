
export class CompanyProfile
{
    constructor () {
        this.companyCode = '';
        this.stockID = '';
        this.companyName = '';
        this.companyCEO = '';
        this.companyTurnover = 0.0;
        this.companyWebsite = '';
        this.stockExchange = '';
        this.regStatusConfirmation = new RegStatusConfirmation();
    }
  companyCode: string;
  stockID: string;
  companyName: string;
  companyCEO: string;
  companyTurnover: number;
  companyWebsite: string;
  stockExchange: string;
  companyRegistrationDate: string;
  companyDeletionDate: string;
  latestStockPrice: number;
  isDeleted: boolean;
  isRegistrationSuccessful: boolean;
  regStatusConfirmation: RegStatusConfirmation;
}

class RegStatusConfirmation {
  companyCode?: any;
  regStatusMessage?: any;
  errorMessage: any[];
}