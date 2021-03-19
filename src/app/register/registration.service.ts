import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvService } from '../env.service';

@Injectable()
export class RegistrationService {
  url: string = "";
  constructor(private httpClient: HttpClient, private env: EnvService) {
    this.url =`${env.apiUrl}users.json`;
  }
  registerNewUser(username, email, pwd) {
    this.httpClient.post(this.url, { "name": username, "email": email, "pwd": pwd });
  }

}
