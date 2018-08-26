import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../services/notifications.service';
import { User } from '../entities/user';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  users: User[] = [];

  constructor(private notifications:NotificationsService) { }

  ngOnInit() {
    this.notifications.getFriendRequests().subscribe(
      (users: any[]) => {
        console.log(users);
        for(var i in users){
          this.users[i] = users[i];
        }
      }
    );
  }

  Accept(email){
    for(var i = 0; i < this.users.length; i++){
      if(this.users[i].email === email){
        this.users.splice(i,1);
      }
    }
    this.notifications.Accept(email).subscribe();
  }

  Decline(email){
    for(var i = 0; i < this.users.length; i++){
      if(this.users[i].email === email){
        this.users.splice(i,1);
      }
    }
    this.notifications.Decline(email).subscribe();
  }

}
