import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  isRegister:boolean = false;
  isLogin:boolean= true;
  ngOnInit(){
    
  }
  showForgotPassword(event){
    console.log("hi");
    
  }
  showRegistration(event){
    this.isRegister=true;
    this.isLogin=false;
  }
}
