import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { SessionStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(private http:HttpClient,private sessionSt:SessionStorageService) { }

  search(name){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(this.sessionSt.retrieve('email')+':'+this.sessionSt.retrieve('password')),
      }),
      params: new HttpParams().set('name',name)
    };
    return this.http.get('http://localhost:8080/search',httpOptions);
  }
}
