import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { stockmanagementapiservice } from './Services/stockmanagementapi.services';
import { StockDetailsComponent } from './stock-details/stock-details.component';
import { CompanyManagementComponent } from './company-management/company-management.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyRegisterComponent } from './company-register/company-register.component';

@NgModule({
  declarations: [
    AppComponent,
    StockDetailsComponent,
    CompanyManagementComponent,
    CompanyDetailsComponent,
    CompanyRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [stockmanagementapiservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
