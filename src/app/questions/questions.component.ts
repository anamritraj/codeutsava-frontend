import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../shared/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  providers: [QuestionService]
})
export class QuestionsComponent implements OnInit {
	ratingClicked: number;
  itemIdRatingClicked: number;
  user_id: number;
  hospital_id: number;
  reciept_id : number;
  questions = new Array<Questions>();
  categories = new Array<Categories>();
  currentCategory: number;
  showNext : boolean;
  isLast: boolean;
  responses = new Array<Response>();

  constructor(private _questionService : QuestionService) { 
  	this.currentCategory = 1;
  	// TODO: make hospital_id and user_id dynamic
  	this.user_id = 333;
  	this.reciept_id = 10;
  	this.hospital_id = 23;
		this.showNext = true;
		this.isLast = false;
  	// Get Categories
  	_questionService.getCategories().subscribe((result) =>{
  		this.categories = result;
  		console.log(this.categories);
  		
  	},(error)=>{
  		console.log(error);
  	});

  	// Get Questions
  	_questionService.getCategoryQuestions(this.currentCategory).subscribe((result) =>{
  		this.questions = result;
  		console.log(this.questions);
  	},(error)=>{
  		console.log(error);
  	});
  }

  ngOnInit() {
  }

  showCategoryQuestions(category_id:number){
  	this._questionService.getCategoryQuestions(category_id).subscribe((result) =>{
  		this.currentCategory = category_id;
  		this.questions = result;
  		// console.log(this.questions);
  		if(this.currentCategory < this.categories.length) {
  			this.showNext = true;
  		}else{
  			this.showNext = false;
  		}
  	},(error)=>{
  		console.log(error);
  	});
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

	clickNext(){
		this.showCategoryQuestions(this.currentCategory + 1);
		this.onlySave();
	}

	onlySave(isLast?: any){
		this._questionService.saveResponses(this.responses).subscribe((result) =>{
			console.log("after");
			console.log("After the insertion"+ result);
			this.responses = [];
			if(isLast){
				this.isLast = true;
			}else{
				this.isLast = false;
			}
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

interface Categories{
  category_id: number;
  name: string;
}

interface Response{
	itemId: number;
	reciept_id: number;
	rating: number;
	user_id: number;
	hospital_id: number;
}