import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { SessionStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient,private sessionSt:SessionStorageService) { }

  post(postText){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(this.sessionSt.retrieve('email')+':'+this.sessionSt.retrieve('password')),
      }),
    };
    return this.http.post<boolean>('http://localhost:8080/post',postText,httpOptions);
  }

  getArticles(){
    console.log("getting articles...");
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(this.sessionSt.retrieve('email')+':'+this.sessionSt.retrieve('password')),
      }),
    };
    return this.http.get('http://localhost:8080/articles',httpOptions);
  }

  comment(articleId,commentText){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(this.sessionSt.retrieve('email')+':'+this.sessionSt.retrieve('password')),
      }),
      params: new HttpParams().set('articleId',articleId).set('commentText',commentText),

    };
    return this.http.post<boolean>('http://localhost:8080/comment',null,httpOptions);
  }

  getComments(articleId){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(this.sessionSt.retrieve('email')+':'+this.sessionSt.retrieve('password')),
      }),
      params: new HttpParams().set('articleId',articleId)

    };
    return this.http.get('http://localhost:8080/getComments',httpOptions);
  }

  like(articleId,status){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(this.sessionSt.retrieve('email')+':'+this.sessionSt.retrieve('password')),
      }),
      params: new HttpParams().set('articleId',articleId).set('status',status),

    };
    return this.http.post<boolean>('http://localhost:8080/like',null,httpOptions);
  }

  getLike(articleId){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(this.sessionSt.retrieve('email')+':'+this.sessionSt.retrieve('password')),
      }),
      params: new HttpParams().set('articleId',articleId)

    };
    return this.http.get('http://localhost:8080/getLike',httpOptions);
  }

}
