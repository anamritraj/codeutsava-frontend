import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User;
  isLoggedIn : boolean;
  constructor(private _router: Router) { }

  ngOnInit() {
  }

  LoginFormSubmit(){
	this.isLoggedIn = true;
  	this._router.navigate(['/feedback']);
  }
}


export class User {
	name : string = "";
	email: string = "";
	aadhar_id: string = "";
	password: string = "";
	contact: string = "";
}