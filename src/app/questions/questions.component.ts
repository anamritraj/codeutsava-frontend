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
  
  questions = new Array<Questions>();
  categories = new Array<Categories>();
  currentCategory: Number;
  constructor(private _questionService : QuestionService) { 
  	this.currentCategory = 1;
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

  showCategoryQuestions(category_id:Number){
  	this._questionService.getCategoryQuestions(category_id).subscribe((result) =>{
  		this.currentCategory = category_id;
  		this.questions = result;
  		console.log(this.questions);
  	},(error)=>{
  		console.log(error);
  	});
  }

  ratingComponetClick(clickObj: any): void {
	  console.log();
	}
}

interface Questions{
  category_id: Number;
  question: string;
  question_description: string;
}

interface Categories{
  category_id: Number;
  name: string;
}