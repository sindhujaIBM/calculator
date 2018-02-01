import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { UserloginService } from '../userlogin.service';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { CalculatorViewComponent } from '../calculator-view/calculator-view.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let userloginServiceStub= [ {
    "name":"abc",
    "email":"a@b",
    "pwd": "12345678"
},
{
    "name":"xyz",
    "email":"x@y",
    "pwd": "12345678"
}];


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent, CalculatorViewComponent ],
      imports:[FormBuilder,FormGroup,Validators,FormsModule],
     providers:    [ {provide: UserloginService, useValue: userloginServiceStub }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    let userService = fixture.debugElement.injector.get(UserloginService);
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
