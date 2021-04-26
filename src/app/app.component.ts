import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EStocksManagerWeb';
  selectedDate = '';

  onDateEntry(event: any) {
    console.log(event);
  }
}
