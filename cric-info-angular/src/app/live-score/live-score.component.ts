
import { Component, OnInit } from '@angular/core';
import { CricAPIService } from '../services/cric-api.service';
import { DatePipe } from '@angular/common';
import { CMatch } from '../model/cmatch';
import { RouterService } from '../services/router.service';
@Component({
  selector: 'app-live-score',
  templateUrl: './live-score.component.html',
  styleUrls: ['./live-score.component.css']
})
export class LiveScoreComponent implements OnInit {
 
  currentMatches:Array<any> = [];
  matches:Array<any> = [];
  obj: Array<any> = [];
  i:number;
  team_1: String;
  team_2: String;
  date: string;
  totalMatches: number;
  uniqueId: number;
  score: any;
  flag: boolean;
  constructor(private apiService: CricAPIService, private routerservice:RouterService) { }
  ngOnInit() {
   
    this.apiService.getUpcomingMatches().subscribe(data =>{
      this.obj=data;
      var today = new Date();
      this.totalMatches = this.obj['matches'].length;
      for (this.i = 0; this.i < this.totalMatches; this.i++) {
        this.date = this.obj['matches'][this.i]['date'].substr(0,10);
        var a = new Date(this.date);
        if(a.getDate() == today.getDate()){
          //this.uniqueId = this.obj['matches'][this.i]['unique_id'];
          this.matches['unique_id'] = this.obj['matches'][this.i]['unique_id'];
          this.matches['team_1'] = this.obj['matches'][this.i]['team-1'];
          this.matches['team_2'] = this.obj['matches'][this.i]['team-2'];
          this.matches['type'] = this.obj['matches'][this.i]['type'];
          this.matches['date'] = this.date;
          this.currentMatches.push(this.matches);
          this.matches = [];
          
        }
    }
    console.log(this.currentMatches);
  });
}
// getScore(id : any) {
//   this.flag = true;
//   this.apiService.getScoreById(id).subscribe(data=>{
//     console.log(data['score']);
//     this.score = data['score'];
//     alert(this.score);
//   });
//   console.log(id)
//   console.log("hello");
// }
// toggleDisplay() {
//   this.flag = !this.flag;
// }
viewDetails(id)
{
  this.apiService.setMatchid(id);
  this.routerservice.toViewlivematch();
}
}