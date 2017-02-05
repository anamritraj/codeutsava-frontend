import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../shared/question.service';

@Component({
  selector: 'app-general-feeback',
  templateUrl: './general-feeback.component.html',
  styleUrls: ['./general-feeback.component.css'],
  providers: [QuestionService]
})
export class GeneralFeebackComponent implements OnInit {
  questions = new Array<Questions>();
  responses = new Array<Response>();
	user_id: number;
	isFilled: boolean; 
  hospital_id: number;
  reciept_id : number;
  	
  constructor(private _questionService : QuestionService) {
	  this.user_id = 333;
		this.reciept_id = 10;
		this.hospital_id = 23;
		this.isFilled = false;
		this.questions = [
  		{
  			id : 1,
  			category_id : 10,
  			question : "How would you rate overall water facilities in your area?",
  			question_description : "water",
  			rating : 0
  		},
  		{
  			id : 2,
  			category_id : 10,
  			question : "How good is the garabage disposal technique in your locality?",
  			question_description : "",
  			rating : 0
  		},
  		{
  			id : 3,
  			category_id : 10,
  			question : "How much polluted is the air in your surroundings?",
  			question_description : "",
  			rating : 0
  		},
  		{
  			id : 4,
  			category_id : 10,
  			question : "How good is the sanitation and sewage problems handled in your area?",
  			question_description : "",
  			rating : 0
  		},
  		{
  			id : 5,
  			category_id : 10,
  			question : "How clean are the surroundings of your locality?",
  			question_description : "",
  			rating : 0
  		},
  		{
  			id : 6,
  			category_id : 10,
  			question : "How often you have to complain for problems before concerned authroity acts?",
  			question_description : "",
  			rating : 0
  		},
  		{
  			id : 7,
  			category_id : 10,
  			question : "How well are the roads constructed in your area?",
  			question_description : "",
  			rating : 0
  		},
  		{
  			id : 8,
  			category_id : 10,
  			question : "How much safe is your locality interms of theft and robbery?",
				question_description : "",
  			rating : 0
  		}
  	];
  }

  ngOnInit() {

  }

  ratingComponentClick(response: Response): void {
	  // Append to current responses.
	  response.hospital_id = this.hospital_id;
	  response.user_id = this.user_id;
	  response.reciept_id = this.reciept_id;
	  this.responses.push(response);

	  for (var i = this.questions.length - 1; i >= 0; i--) {
	  	if(this.questions[i].id == response.itemId){
	  		this.questions[i].rating = response.rating;
	  		break;
	  	}
	  }
	}

	saveOnly(){
		this.isFilled = true;
		this._questionService.saveResponses(this.responses).subscribe((result) =>{
			console.log(result);
		},(error) => {
			console.log(error);
		});
	}	
}

interface Questions{
	id: number,
  category_id: number;
  question: string;
  question_description: string;
  rating: number;
}

interface Response{
	itemId: number;
	reciept_id: number;
	rating: number;
	user_id: number;
	hospital_id: number;
}