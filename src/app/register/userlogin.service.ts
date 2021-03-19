import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvService } from '../env.service';


@Injectable()
export class UserloginService {
  url:string = "";
  constructor(
    private httpClient: HttpClient,
    private env: EnvService
  ) {
    this.url=`${env.apiUrl}users.json`;
   }
   
   fetchUsers() {
    return this.httpClient.get(this.url);
  }
}
