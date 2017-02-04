import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionRatingComponent } from './question-rating/question-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeedbackComponent,
    QuestionsComponent,
    QuestionRatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
