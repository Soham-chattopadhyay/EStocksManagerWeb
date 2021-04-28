
export class CompanyProfile
{
    constructor () {
        this.companyCode = '';
        this.companyName = '';
    }
  companyCode: string;
  companyName: string;
  companyCEO: string;
  companyTurnover: number;
  companyWebsite: string;
  stockEnchange: string;
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