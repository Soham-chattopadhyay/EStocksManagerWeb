import { formatDate } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EStocksManagerWeb';
  selectedFromDate = '';
  selectedToDate = '';

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
}
