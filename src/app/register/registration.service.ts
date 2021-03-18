import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegistrationService {
  url: string = "";
  constructor(private httpClient: HttpClient) {
    this.url = "./assets/data/api/users.json";
  }
  registerNewUser(username, email, pwd) {
    this.httpClient.post(this.url, { "name": username, "email": email, "pwd": pwd });
  }

}
