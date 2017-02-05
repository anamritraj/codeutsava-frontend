import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
// import { GlobalConfig } from './config.model';

import 'rxjs/add/operator/map';

@Injectable()

export class DataService{
  _url: String;

  constructor( private http: Http) { 
  	this._url = "http://localhost/codeutsava-backend/public/api/";
  }

  getHospitals(district_id: number){
    return this.http.get(this._url+'graph/get-hospitals/'+district_id)
    .map(res => res.json());
  }

  getHospitalOverallYearlyData(hosp_id: number){
    return this.http.get(this._url+'graph/overall-yearly-hospital/'+hosp_id)
    .map(res => res.json());
  }

  getDistricts(){
   return this.http.get(this._url+'graph/districts')
    .map(res => res.json()); 
  }

}
