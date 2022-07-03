import { Component, OnInit } from '@angular/core';
import { CMatch } from '../model/cmatch';
import { CricAPIService } from '../services/cric-api.service';
@Component({
  selector: 'app-old-matches',
  templateUrl: './old-matches.component.html',
  styleUrls: ['./old-matches.component.css']
})
export class OldMatchesComponent implements OnInit {
  i:number;
  obj1: Array<any> = [];
  obj2: Array<any> = [];
  matches:Array<CMatch> = [];
  team_1:String;
  team_2:String;
  datelist:Array<any>=[];
  oldlist:Array<any>=[];
  listdate:Array<any>=[];
  dates:Array<any>=[];
  id:number;
  unique_idlist:Array<any>=[];
  uni:number;
  scorelist:Array<any>=[];
  score: String;
  score2: string;
  constructor(private apiService: CricAPIService) { }
  ngOnInit() {
    this.apiService.getOldMatches().subscribe(data =>{
      this.obj1=data;
      console.log(this.obj1);
      for(this.i = 0; this.i < 7; this.i++){
      this.matches['unique_id']=this.obj1['data'][this.i]['unique_id'];
      this.unique_idlist.push(this.matches);
      this.matches=[];
      }
      console.log(this.unique_idlist);
      for(this.i=0;this.i<7;this.i++)
      this.scores(this.unique_idlist[this.i]);
    },
    error=>{
      console.log(error);
    })
  }
  scores(uni){
    console.log( "uni"+ uni + typeof(uni));
    this.id=uni;
    console.log(this.id);
    let x= Number(uni.unique_id);
    console.log(x);
    this.apiService.getScore(x).subscribe(data=>{
      this.obj2=data;
      this.matches['team_1']=this.obj2['team-1'];
      this.matches['team_2']=this.obj2['team-2'];
      let sc : String;
      sc = this.obj2['score'];
      if(sc.includes("Jammu")){
        sc = sc.replace("Jammu" , "");
      }
      let scoreArr : string[];
      let scoreArr1 : string[];
      console.log(sc.length);
      console.log(sc);
      scoreArr1 = sc.split(' v ');
      console.log(scoreArr1);
      if(scoreArr1[0].includes('/' , 0) && scoreArr1[0].includes('&amp;' , 0))
        this.score =  scoreArr1[0].replace("&amp;" , " , ");
      else if(scoreArr1[0].includes('/' , 0))
        this.score = scoreArr1[0];
      else
        this.score = "Match still going onn";
      if(scoreArr1[1].includes('/' , 0) && scoreArr1[1].includes('&amp;' , 0))
        this.score2 =  scoreArr1[1].replace("&amp;" , " , ");
      else if(scoreArr1[1].includes('/' , 0))
        this.score2 =  scoreArr1[1];
      else
        this.score2 = "Match still going onn";
      //this.matches['score']=this.obj2['score'];
      this.matches['score'] = " " + this.score + " , " + this.score2;
      this.oldlist.push(this.matches);
      this.matches=[];
      console.log(this.oldlist);
    },
    error=>{
      console.log(error);
    })
  }
}