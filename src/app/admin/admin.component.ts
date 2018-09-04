import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { User } from '../entities/user';

@Component({
  selector: 'app-network',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  @ViewChild('f') search: NgForm;

  displaySwitch = true;
  users: User[] = [];

  constructor(private admin:AdminService) { }

  ngOnInit() {
    this.users=[];
    this.admin.getAllUsers().subscribe(
      (users: any[]) => {
        console.log(users);
        for(var i in users){
          if(users[i].firstname=="admin")
            continue;
          console.log(i);
          console.log(users[i]);
          console.log(users[i].firstname+ " " +users[i].lastname);
          this.users[i] = users[i];
        }
      }
    );
  }

  onSubmit(){
    this.users=[];
    console.log(this.search);
    console.log(this.search.value.search);
    this.admin.search(this.search.value.search).subscribe(
      (users: any[]) => {
        console.log(users);
        for(var i in users){
          if(users[i].firstname=="admin")
            continue;
          console.log(i);
          console.log(users[i]);
          console.log(users[i].firstname+ " " +users[i].lastname);
          this.users[i] = users[i];
        }
      }
    );
    this.displaySwitch = false;
  }

}