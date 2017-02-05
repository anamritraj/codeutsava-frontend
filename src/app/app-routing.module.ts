import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionRatingComponent } from './question-rating/question-rating.component';
import { AdminComponent } from './admin/admin.component';
import { GeneralFeebackComponent } from './general-feeback/general-feeback.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const appRoutes: Routes = [
  {
    path: 'feedback',
    component: FeedbackComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },

  {
    path: 'general-feedback',
    component: GeneralFeebackComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  { 
    path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    },
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})

export class AppRoutingModule {}