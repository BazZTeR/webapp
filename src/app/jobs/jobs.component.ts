import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Job } from '../entities/job';
import { JobsService } from '../services/jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  @ViewChild('f') jobname: NgForm;
  
  displaySwitch=true;
  jobs: Job[] = [];

  constructor(private job:JobsService) { }
  ngOnInit() {

  }

  postjob()
  {
    this.displaySwitch=true;
  }
  
}
