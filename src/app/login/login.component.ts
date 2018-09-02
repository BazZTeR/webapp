import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  @ViewChild('f') loginform: NgForm;

  constructor(private login: LoginService, private router:Router){}

  onSubmit(){
    console.log(this.loginform);
    this.login.login(this.loginform.value.email,this.loginform.value.password).subscribe(
      res=>{
        console.log('res',res);
        if(res==1){
          this.login.setLoggedin(res); 
          this.router.navigate(['home']);
        }
        else if(res==2)
        {
          this.router.navigate(['admin']);
        }
        else{
          window.alert("Wrong email and/or password!");
        }
        
      },
      error => {
  			console.log(error);
  		}
    );
  }

}
