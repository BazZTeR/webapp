import { Injectable } from '@angular/core';
import { Job } from '../entities/job';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  
  displaySwitch = true;
  jobs : Job[]=[];
  constructor() { }
}
