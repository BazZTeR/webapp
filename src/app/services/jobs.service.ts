import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { SessionStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  
  constructor(private http:HttpClient,private sessionSt:SessionStorageService) { }
  getjobs(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(this.sessionSt.retrieve('email')+':'+this.sessionSt.retrieve('password')),
      })
    };
    return this.http.get('http://localhost:8080/getjobs',httpOptions);
  }
  postjob(jobname,description,skills){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(this.sessionSt.retrieve('email')+':'+this.sessionSt.retrieve('password')+":"+jobname+":"+description+":"+skills),
      })
    };
    return this.http.get('http://localhost:8080/postjob',httpOptions);
  }
}
