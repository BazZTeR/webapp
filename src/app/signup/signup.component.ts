import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignupService } from '../services/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{
  @ViewChild('f') signupForm: NgForm;

  constructor(private signup:SignupService,private router:Router){}

  onSubmit(){
    console.log("submitted");
    console.log(this.signupForm);
    if(this.signupForm.value.email=="admin")
    {
      window.alert("Cannot enter that username");
      return;
    }
    if(this.signupForm.value.password != this.signupForm.value.confirm_password){
      window.alert("Password doesnt match with Confirm password");
    }
    else{
      this.signup.signup(this.signupForm.value.email,this.signupForm.value.password,this.signupForm.value.name,this.signupForm.value.surname,this.signupForm.value.phone).subscribe(
        res=>{
          console.log('res',res);
          if(res){
            this.router.navigate(['login']);
          }
          else{
            window.alert("User with same email already exists!");
          }
          
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
