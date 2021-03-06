import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, EmailValidator, Validators } from '@angular/forms';
import { UserloginService } from '../userlogin.service';
import { Validuser } from '../../validuser';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  rForm: FormGroup;
  post: any;                     // A property for our submitted form
  password: string = '';
  username: string = '';
  email: string = '';
  userList: Validuser[];
  constructor(
    private fb: FormBuilder,
    public userLoginService: UserloginService,
    public registrationService: RegistrationService,
    private router: Router) {
    this.rForm = fb.group({
      'username': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      'email': [],
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
    this.email = post.email;

    if (!this.checkUserExists(post.username, post.password)) {
      this.registrationService.registerNewUser(this.username, this.email, this.password);
    }
  }
  checkUserExists(username: string, password: string) {
    for (var i = 0; i < this.userList.length; i++) {
      var currentUser = this.userList[i];
      if (currentUser.name == username && currentUser.pwd == password) {
        return true;
      }
    }
    if (i == this.userList.length) {
      console.log("User not found");
      return false;
    }
  }

  back() {
    this.router.navigateByUrl('/reg');
  }
}
