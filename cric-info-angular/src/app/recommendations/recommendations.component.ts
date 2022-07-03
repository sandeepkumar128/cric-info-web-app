import { Component, OnInit } from '@angular/core';
import { CricAPIService } from '../services/cric-api.service';
import { UserDataService } from '../services/user-data.service';
@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {
  obj:Array<any>=[];
  i:number;
  rList:Array<any>=[];
  recommendations:Array<any>=[];
  constructor(private apiService:UserDataService) { }
  ngOnInit() {
    this.apiService.allRecommendations().subscribe(data=>{
      console.log(data);
      this.obj=data;
      console.log(data.length);
      for (this.i = 0; this.i < data.length; this.i++) {
        this.rList['team1']=this.obj[this.i]['rdetails']['team1'];
        this.rList['team2']=this.obj[this.i]['rdetails']['team2'];
        this.rList['type']=this.obj[this.i]['rdetails']['type'];
        this.rList['date']=this.obj[this.i]['rdetails']['date'];
        this.rList['count']=this.obj[this.i]['total'];
        this.recommendations.push(this.rList);
        this.rList=[];
      }
      
    },
    error=>{
      console.log(error);
    })
  }
}
