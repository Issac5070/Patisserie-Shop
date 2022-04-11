import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
  loginUser(signUpForm:NgForm){
    console.log(signUpForm);
    console.log(signUpForm.value.email);
    console.log(signUpForm.value.username);
    console.log(signUpForm.value.password);
    console.log(signUpForm.value.repassword);
    console.log(signUpForm.value.terms);
  }
}
