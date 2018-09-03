import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { SessionStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient,private sessionSt:SessionStorageService) { }

  getUser(email){
    const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Basic ' + btoa(this.sessionSt.retrieve('email')+':'+this.sessionSt.retrieve('password')),
        }),
        params: new HttpParams().set('email',email)
      };
      return this.http.get('http://localhost:8080/user',httpOptions);
  }

  addFriend(email){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(this.sessionSt.retrieve('email')+':'+this.sessionSt.retrieve('password')),
      }),
    };
    return this.http.post('http://localhost:8080/addFriend',email,httpOptions);
  }

  getFriendshipStatus(email){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(this.sessionSt.retrieve('email')+':'+this.sessionSt.retrieve('password')),
      }),
      params: new HttpParams().set('email',email),
      responseType: 'text' as 'text'//due to angular bug: https://github.com/angular/angular/issues/18586
    };
    return this.http.get('http://localhost:8080/friendshipStatus',httpOptions);
  }

  editProfile(name,phone,workExp,eduExp,skillsExp){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(this.sessionSt.retrieve('email')+':'+this.sessionSt.retrieve('password')),
      }),
      params: new HttpParams().set('name',name).set('phone',phone).set('workExp',workExp).set('eduExp',eduExp).set('skillsExp',skillsExp),
    };
    return this.http.put('http://localhost:8080/editProfile',null,httpOptions);
  }
}