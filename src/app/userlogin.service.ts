import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserloginService {
  url:string = "";
  constructor(private httpClient: HttpClient) {
    this.url="./assets/data/api/users.json";
   }
   fetchUsers() {
    return this.httpClient.get(this.url);
  }
}
