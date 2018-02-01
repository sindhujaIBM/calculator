import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { CalculatorViewComponent } from './calculator-view/calculator-view.component';

import { HttpClientModule } from '@angular/common/http';

import { UserloginService } from './userlogin.service';
import { RegistrationService } from './registration.service';
import { PreviousdataService } from './previousdata.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    CalculatorViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserloginService, RegistrationService, PreviousdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
