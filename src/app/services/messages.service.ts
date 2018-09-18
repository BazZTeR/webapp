import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { SessionStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http:HttpClient,private sessionSt:SessionStorageService) { }

  getChatUsers(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(this.sessionSt.retrieve('email')+':'+this.sessionSt.retrieve('password')),
      }),
    };
    return this.http.get('http://localhost:8080/getLatestChats',httpOptions);
  }

  getLastChatUser(){
    const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Basic ' + btoa(this.sessionSt.retrieve('email')+':'+this.sessionSt.retrieve('password')),
        }),
        responseType: 'text' as 'text',
      };
      return this.http.get('http://localhost:8080/getLastChat',httpOptions);
  }

  getChat(email){
    const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Basic ' + btoa(this.sessionSt.retrieve('email')+':'+this.sessionSt.retrieve('password')),
        }),
        params: new HttpParams().set('email',email)
      };
      return this.http.get('http://localhost:8080/getChat',httpOptions);
  }

  sendMessage(email,message){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(this.sessionSt.retrieve('email')+':'+this.sessionSt.retrieve('password')),
      }),
      params: new HttpParams().set('email',email)
    };
    return this.http.put('http://localhost:8080/sendMessage',message,httpOptions);
  }
}
