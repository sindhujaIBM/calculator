import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isRegister:boolean = false;
  isLogin:boolean= true;
  getStatus(status){

  }
  showForgotPassword(event){
    console.log("hi");
    
  }
  showRegistration(event){
    this.isRegister=true;
    this.isLogin=false;
  }
}
