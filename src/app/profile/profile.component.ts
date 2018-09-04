import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SessionStorageService } from 'ngx-webstorage';
import { ProfileService } from '../services/profile.service';
import { User } from '../entities/user';
import { NotificationsService } from '../services/notifications.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('f') form: NgForm;

  displaySwitch = true;
  myprofile = false;
  user: User;
  friendStatus = "Add Friend";
  adminSwitch = true;
  
  constructor(private route: ActivatedRoute,private sessionSt:SessionStorageService,private profile:ProfileService,private notifications:NotificationsService) { }

  ngOnInit() {
    var email = this.route.snapshot.paramMap.get('email');
    if(email === 'admin')
    {
      this.adminSwitch=true;
      return;
    }
    if(email === 'me' || email === this.sessionSt.retrieve('email')){
      this.myprofile = true;
      this.profile.getUser(this.sessionSt.retrieve('email')).subscribe(
        (user:User)=>{
          console.log(user);
          this.user = user;
        }
      )
    }
    else{
      this.profile.getUser(email).subscribe(
        (user:User)=>{
          console.log(user);
          this.user = user;
        }
      );
      console.log("getStatus");
      this.profile.getFriendshipStatus(email).subscribe(
        status=>{
          console.log("status: ", status);
          if(status === "Pending" || status === "Friends"){
            this.friendStatus = "Remove Friend";  
          }
          else{
            this.friendStatus = status;
          }
        },
        error =>{
          console.log(error);
        }
      );
    }
  }

  onClick(){
    if(this.friendStatus === "Add Friend"){
      this.profile.addFriend(this.user.email).subscribe();
      this.friendStatus = "Remove Friend";
    }
    else if(this.friendStatus === "Remove Friend"){
      this.notifications.Decline(this.user.email).subscribe();
      this.friendStatus = "Add Friend";
    }
  }

  editProf(){
    this.displaySwitch = false;
  }

  saveChanges(){
    this.profile.editProfile(this.form.value.name,this.form.value.phone,this.form.value.workExp,this.form.value.eduExp,this.form.value.skillsExp).subscribe();
  }

}
