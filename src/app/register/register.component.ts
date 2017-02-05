import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user :User;
  registered: boolean;
  constructor(private _router: Router) {
  	this.registered = false;
  	this.user = new User;
  	this.user.name = "";
  	this.user.email = "";
  	this.user.aadhar_id = "";
  	this.user.password = "";
  	this.user.contact = "";
  }

  ngOnInit() {
  }

  registerFormSubmit(){
  	this.registered = true;
  	this._router.navigate(['/login']);
  }
}

export class User {
	name : string = "";
	email: string = "";
	aadhar_id: string = "";
	password: string = "";
	contact: string = "";
}
