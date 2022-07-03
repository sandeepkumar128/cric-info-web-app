import { Component, OnInit } from '@angular/core';
import { CricAPIService } from '../services/cric-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  obj:Array<any>=[];
  news:Array<any>=[];
  newsList:Array<any>=[];
  i:number;
  date:Date;
  constructor(private apiService:CricAPIService) { }

  ngOnInit() {
    
    this.apiService.getNews().subscribe(data=>{
      this.obj=data;
      console.log(this.obj);
      for (this.i = 0; this.i < Object.keys(data['articles']).length; this.i++) {
        this.date = this.obj['articles'][this.i]['publishedAt'].substr(0,10);
        var a = new Date(this.date);
        this.news['title'] = this.obj['articles'][this.i]['title'];
        this.news['description'] = this.obj['articles'][this.i]['description'];
        this.news['urlToImage'] = this.obj['articles'][this.i]['urlToImage'];
        this.news['publishedAt']=a;
        this.newsList.push(this.news);
        this.news = [];
      }console.log(this.newsList);
    },error=>{
      console.log(error);
    })
  }

}
