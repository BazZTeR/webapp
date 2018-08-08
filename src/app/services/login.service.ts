import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginStatus = false;

  constructor(private http:HttpClient) { }

  setLoggedin(value:boolean){
    this.loginStatus = value;
  }

  isLoggedin(){
    return this.loginStatus;
  }


  login(email,password){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(email+':'+password)
      }),
    };
    return this.http.get<boolean>('http://localhost:8080/login',httpOptions);
  }
}
