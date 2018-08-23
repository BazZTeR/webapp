import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HomeService } from '../services/home.service';
import { Article } from './article';
import { text } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  @ViewChild('f') post: NgForm;

  constructor(private home:HomeService) { }

  articles: Article[] = [];

  ngOnInit() {
    console.log("calling getArticles()")
    this.home.getArticles().subscribe(
      (articles: any[]) => {
        console.log(articles);
        for(var i in articles){
          console.log(i);
          console.log(articles[i].text);
          this.articles[i] = articles[i];
          
        }
      }
    );
  }

  onSubmit(){
    console.log(this.post);
    console.log(this.post.value.postText);
    this.home.post(this.post.value.postText).subscribe();
  }

}
