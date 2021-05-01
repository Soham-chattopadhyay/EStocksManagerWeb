import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-management',
  templateUrl: './company-management.component.html',
  styleUrls: ['./company-management.component.css']
})
export class CompanyManagementComponent implements OnInit {

  @Input() showCompanyManagerScreen = false;
  @Input() companyCode = '';
  @Input() stockID = '';
  @Output() showCompanyManagerScreenEvent = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  //Properties
  isReadOnly = false;

  ngOnInit(): void {
  }

  MakeReadOnly(): boolean  {
    console.log('StockID', this.stockID);
    if(this.stockID)
    {
      this.isReadOnly = true;
    }

    return this.isReadOnly;
  }

  navigateToHome(event: any) {
    this.showCompanyManagerScreenEvent.emit(true);
  }

}
