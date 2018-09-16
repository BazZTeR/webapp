import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Job } from '../entities/job';
import { JobsService } from '../services/jobs.service';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  @ViewChild('f') jobname: NgForm;
  
  displaySwitch=true;
  displayYourJobsSwitch=false;
  jobs: Job[] = [];
  myjobs: Job[] = [];
  myemail: String;

  constructor(private job:JobsService,private sessionSt:SessionStorageService) { }
  ngOnInit() {
    this.myemail=this.sessionSt.retrieve('email');
    this.job.getjobs().subscribe(
      (jobs: Job[]) => {
        for(var i in jobs){
          if(jobs[i].creator.email == this.myemail)
          {
            this.myjobs.push(jobs[i]);
            this.displayYourJobsSwitch=true;
            continue;
          }
          this.jobs.push(jobs[i]);
        }
      }
    );
  }

  postjob()
  {
    console.log(this.jobname.value.jobname);
    if(!this.jobname.value.jobname || !this.jobname.value.description || !this.jobname.value.skills)
    {
      window.alert("Please dont leave empty fields");
      return;
    }
    this.displaySwitch=true;
    this.job.postjob(this.jobname.value.jobname,this.jobname.value.description,this.jobname.value.skills).subscribe(
      (jobs: any[]) => {
        for(var i in jobs){
          this.jobs[i] = jobs[i];
        }
      }
    );
  }
  
}
