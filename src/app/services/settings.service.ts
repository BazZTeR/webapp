import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private http:HttpClient,private sessionSt:SessionStorageService) { }

  updateCredentials(email,password){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(this.sessionSt.retrieve('email')+':'+this.sessionSt.retrieve('password')),
      }),
    };
    this.sessionSt.store('email',email);
    this.sessionSt.store('password',password);
    return this.http.put<boolean>('http://localhost:8080/settings',email+':'+password,httpOptions);
  }
}
