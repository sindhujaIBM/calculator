import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserloginService } from '../userlogin.service';
import { Validuser } from '../../validuser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  rForm: FormGroup;
  post: any;                     // A property for our submitted form
  password: string = '';
  username: string = '';

  showLogin: string = "showLogin";
  show: boolean = false;
  userList: Validuser[];
  constructor(
    public userLoginService: UserloginService,
    private fb: FormBuilder,
    private router: Router) {
    this.rForm = fb.group({
      'username': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      'validate': ''
    });
  }

  ngOnInit() {
    this.userLoginService.fetchUsers().subscribe((users: Validuser[]) => {
      console.log(users);
      this.userList = users;
    }, err => {
      console.log("error");
    });
  }
  addPost(post) {
    this.password = post.password;
    this.username = post.username;
    for (var i = 0; i < this.userList.length; i++) {
      var currentUser = this.userList[i];
      if (currentUser.name == post.username && currentUser.pwd == post.password) {
        this.showLogin = "calc";
        sessionStorage.setItem("loggedUser", currentUser.name);
        this.router.navigateByUrl('/calc');
        break;
      }
    }
    if (i == this.userList.length) {
      this.showLogin = "showLogin";
      this.username = post.username;
      this.show = true;
    }
  }
  showRegistration() {
    this.router.navigateByUrl('/reg/register')
  }

}
