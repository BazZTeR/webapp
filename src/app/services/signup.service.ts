import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }

  signup(email,password,name,surname,phone,fd){
    const httpOptions = {
      headers: new HttpHeaders({
        //'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(email+':'+password+':'+name+':'+surname+':'+phone)
      }),
    };
    return this.http.post<boolean>('http://localhost:8080/signup',fd,httpOptions);
  }
}
