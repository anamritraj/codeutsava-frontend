import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question-rating',
  templateUrl: './question-rating.component.html',
  styleUrls: ['./question-rating.component.css']
})
export class QuestionRatingComponent implements OnInit {
	@Input() rating: number;
	@Input() itemId: number;
	@Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();

  inpustName:string;	

  constructor() { }

  ngOnInit() {
  	this.inpustName = this.itemId + '_rating';
  }

  onClick(rating: number): void {
      this.rating = rating;
      this.ratingClick.emit({
          itemId: this.itemId,
          rating: rating
      });
      console.log(this.rating);
  }

}
