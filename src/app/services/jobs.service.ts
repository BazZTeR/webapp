import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { SessionStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  
  constructor(private http:HttpClient,private sessionSt:SessionStorageService) { }
}
