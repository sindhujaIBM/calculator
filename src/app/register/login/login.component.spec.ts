import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { UserloginService } from '../userlogin.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';


const jsonResponse = [{
  "name": "abc",
  "email": "a@b",
  "pwd": "12345678"
},
{
  "name": "xyz",
  "email": "x@y",
  "pwd": "12345678"
}];
const userloginServiceStub = {
  fetchUsers() {
    return of(jsonResponse);
  }
};


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule],
      providers: [{ provide: UserloginService, useValue: userloginServiceStub }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
