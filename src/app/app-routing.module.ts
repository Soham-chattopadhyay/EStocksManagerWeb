import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyManagementComponent } from './company-management/company-management.component';
import { CompanyRegisterComponent } from './company-register/company-register.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'company-detail', component: CompanyDetailsComponent },
  { path: 'manage-company', component: CompanyManagementComponent },
  { path: 'register-company', component: CompanyRegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //, { initialNavigation: 'enabledBlocking' } 
  exports: [RouterModule]
})
export class AppRoutingModule { }
