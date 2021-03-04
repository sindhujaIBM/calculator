import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PreviousdataService {

  url:string = "";
  constructor(private httpClient: HttpClient) {
    this.url="./assets/data/api/previousCalc.json/?name=";
   }
   fetchPreviousData(name:String) {
    return this.httpClient.get(this.url+name).pipe();
  }

}
