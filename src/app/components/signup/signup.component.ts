import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Signup } from './signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  ngOnInit(): void {
    
  }
  constructor(private http: HttpClient) { }
  title = '';
  passwordConfirmationFailed = false;
  passwordConfirmationTxt = '';
  emailFormat = false;
  signup = new Signup('', '', '', '');



  confirmPassword() {
    if (this.signup.password === this.passwordConfirmationTxt) {
      this.passwordConfirmationFailed = false;
    } else {
      this.passwordConfirmationFailed = true;
    }
  }
  confirmEmail() {
    console.log("d5lt");
    if (this.signup.email.includes('@')){
      this.emailFormat = true;
    }
    console.log(this.emailFormat);
      
  }

  email: any
  pass: any
  name:any
  phone:any

  onSubmit() {
    console.log('Name: ' + this.signup.name + ', Email: ' + this.signup.email + ', Password: ' + this.signup.password);
    
    this.email = this.signup.email;
    this.pass = this.signup.password;
    this.name=this.signup.name;
    this.phone=this.signup.phonenumber;
    console.log( JSON.stringify({
      "email": this.email,
      "password": this.pass,
      "username":this.name,
      "phoneNumber":this.phone

    }))
    this.signupp();
  

  }
  signupp() {
    var httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'authentication': 'key' 
      })
    }
    this.http.post('http://localhost:8080/signup', JSON.stringify({
      "email": this.email,
      "password": this.pass,
      "username":this.name,
      "phoneNumber":this.phone
    }
    
    ), httpOptions)

    .subscribe({
        next: (data: any) => {
            console.log("hii")
            console.log(data)
            console.log(Response.toString)
            console.log(JSON.parse(data));
            },
            error: (error: any) => {
            console.error(error);
            }
        });
  }



}
