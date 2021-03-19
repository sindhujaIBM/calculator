import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvService } from '../env.service';

@Injectable()
export class PreviousdataService {

  url:string = "";
  constructor(private httpClient: HttpClient, private env: EnvService) {
    this.url=`${this.env.apiUrl}previousCalc.json/?name=`;
   }
   fetchPreviousData(name:String) {
    return this.httpClient.get(this.url+name).pipe();
  }

}
