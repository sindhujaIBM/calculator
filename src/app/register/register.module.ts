import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserloginService } from './userlogin.service';
import { PreviousdataService } from './previousdata.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationService } from './registration.service';

@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    RegistrationComponent,
    LoginComponent
  ],
  providers: [
    UserloginService,
    PreviousdataService,
    RegistrationService
  ]
})
export class RegisterModule { }
