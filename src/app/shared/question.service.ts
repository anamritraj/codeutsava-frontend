import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
// import { GlobalConfig } from './config.model';

import 'rxjs/add/operator/map';

@Injectable()

export class QuestionService{
  _url: String;

  constructor( private http: Http) { 
  	this._url = "http://localhost/codeutsava-backend/public/api/";
    // console.log(GlobalConfig.BASE_API_URL);
  }

  getCategoryQuestions(category:any){
  	return this.http.get(this._url+'question/'+category)
  	.map(res => res.json());
  }

  getCategories(){
  	return this.http.get(this._url+'category')
  	.map(res => res.json());
  }

  saveResponses(responses: Response[]){
  	
  	console.log("Sending a post request");
  	console.log(responses);

  	return this.http.post(this._url+'response', responses)
  	.map(res => res.json());
  }
}


interface Response{
	itemId: number;
	rating: number;
	user_id: number;
	hospital_id: number;
}
