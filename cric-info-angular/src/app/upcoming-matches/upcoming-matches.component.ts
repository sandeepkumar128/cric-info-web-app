import { Component, OnInit } from '@angular/core';
import { CMatch } from '../model/cmatch';
import { CricAPIService } from '../services/cric-api.service';
import { DatePipe } from '@angular/common';
import { RouterService } from '../services/router.service';
import { UserDataService } from '../services/user-data.service';
@Component({
  selector: 'app-upcoming-matches',
  templateUrl: './upcoming-matches.component.html',
  styleUrls: ['./upcoming-matches.component.css']
})
export class UpcomingMatchesComponent implements OnInit {
  i: number;
  x:number;
  x2:number;
  x3:number;
  x4:number;
  obj: Array<any> = [];
  matches: Array<CMatch> = [];
  team_1: String;
  team_2: String;
  listTest: Array<any> = [];
  listtwenty: Array<any> = [];
  listODI: Array<any> = [];
  listFirstclass: Array<any> = [];
  reminderlist:Array<any>=[];
  rid:number;
  robj:Array<any>=[];
  remind= new CMatch();
  isClicked:boolean = true;
  date:Date;
  wt:String;
  username:String; //11-19
  constructor(private apiService1: CricAPIService,private apiService: UserDataService,public datepipe: DatePipe,private routerService:RouterService) { }
  ngOnInit() {
    this.username=sessionStorage.getItem("username");
    this.apiService1.getUpcomingMatches().subscribe(data => {
      this.obj = data;
      console.log(data);
      console.log(this.obj);
      this.x=0;
      this.x2=0;
      this.x3=0;
      this.x4=0;
      for (this.i = 0; this.i < Object.keys(data['matches']).length; this.i++) {
            this.date = this.obj['matches'][this.i]['date'].substr(0,10);
      //  if (this.obj['matches'][this.i]['matchStarted'] == false) {
          if ((this.obj['matches'][this.i]['type'] == "Twenty20")) {
            this.setData();
            this.x3=this.x3+1;
            this.listtwenty.push(this.matches);
            this.matches = [];
          }
          else if (this.obj['matches'][this.i]['type'] == "Test") {
            this.setData();
            this.x2=this.x2+1;
            this.listTest.push(this.matches);
            this.matches = [];
          }
          else if (this.obj['matches'][this.i]['type'] == "ODI") {
            this.setData();
            this.x=this.x+1;
            this.listODI.push(this.matches);
            this.matches = [];
          }
          else if (this.obj['matches'][this.i]['type'] == "First-class") {
            this.setData();
            this.x4=this.x4+1;
            this.listFirstclass.push(this.matches);
            this.matches = [];
          }
        // }
      }
      console.log(this.listODI);
    },
      error => {
        console.log(error);
      })
  }
  setData() {
    var a = new Date(this.date);
    this.wt=this.obj['matches'][this.i]['winner_team'];
    this.matches['team1'] = this.obj['matches'][this.i]['team-1'];
    this.matches['team2'] = this.obj['matches'][this.i]['team-2'];
    this.matches['dateTimeGMT'] = this.datepipe.transform(a, 'dd/MM/yyyy')
    this.matches['matchid']=this.obj['matches'][this.i]['unique_id'];
    this.matches['matchStarted']=this.obj['matches'][this.i]['matchStarted'];
    this.matches['winner']=this.obj['matches'][this.i]['toss_winner_team'];
    this.matches['type']=this.obj['matches'][this.i]['type'];
    // this.matches['winner_team']=this.obj['matches'][this.i]['winner_team'];
    
  }
  reminder(id){ 
    if (sessionStorage.getItem("username") !== null) {
    console.log(id);
    this.rid = this.listODI.findIndex(ep => ep.matchid === id);
    console.log(this.rid);
    var today = new Date();
    this.apiService1.getUpcomingMatches().subscribe(data=>{
      this.robj=data;
      console.log(this.robj);
      for (this.i = 0; this.i < Object.keys(data['matches']).length; this.i++) {
        if (id == this.robj['matches'][this.i]['unique_id'] ) {
          console.log(id);
          console.log(this.listODI);
          this.setData();
          this.reminderlist.push(this.matches);
          this.matches = [];
          this.remind.matchid=this.listODI[this.rid].matchid;
          console.log(this.remind.matchid);
          this.remind.team1=this.listODI[this.rid].team1;
          this.remind.team2=this.listODI[this.rid].team2;
          this.remind.dateTimeGMT=this.listODI[this.rid].dateTimeGMT;
          this.remind.matchStarted=this.listODI[this.rid].matchStarted;
          this.remind.winner=this.listODI[this.rid].winner;
          this.remind.type=this.listODI[this.rid].type;
          this.remind.username=this.username;
          this.remind.winner_team="";
          this.apiService.addReminders(this.remind).subscribe(data=>{
          },
          error=>{
            console.log(error);
          })
        }
      }
    },
    error=>{
      console.log(error);   
    })}
    else
    this.routerService.toLogin();
  }
  testReminder(id){
    if (sessionStorage.getItem("username") !== null) {
    console.log(id);
    this.rid = this.listTest.findIndex(ep => ep.matchid === id);
    console.log(this.rid);
    this.apiService1.getUpcomingMatches().subscribe(data=>{
      this.robj=data;
      console.log(this.robj);
      for (this.i = 0; this.i < Object.keys(data['matches']).length; this.i++) {
        if (id == this.robj['matches'][this.i]['unique_id'] ) {
          console.log(id);
          this.setData();
          this.reminderlist.push(this.matches);
          this.matches = [];
          this.remind.matchid=this.listTest[this.rid].matchid;
          this.remind.team1=this.listTest[this.rid].team1;
          this.remind.team2=this.listTest[this.rid].team2;
          this.remind.dateTimeGMT=this.listTest[this.rid].dateTimeGMT;
          this.remind.matchStarted=this.listTest[this.rid].matchStarted;
          this.remind.winner=this.listTest[this.rid].winner;
          this.remind.type=this.listTest[this.rid].type;
          this.remind.username=this.username;
          this.remind.winner_team="";
          this.apiService.addReminders(this.remind).subscribe(data=>{
          },
          error=>{
            console.log(error);
          })
        }
      }
    },
    error=>{
      console.log(error);   
    })
  }
}
  twentyReminder(id){
    if (sessionStorage.getItem("username") !== null) {
    console.log(id);
    this.rid = this.listtwenty.findIndex(ep => ep.matchid === id);
    console.log(this.rid);
    this.apiService1.getUpcomingMatches().subscribe(data=>{
      this.robj=data;
      console.log(this.robj);
      for (this.i = 0; this.i < Object.keys(data['matches']).length; this.i++) {
        if (id == this.robj['matches'][this.i]['unique_id'] ) {
          console.log(id);
          console.log(this.listtwenty);
          this.setData();
          this.reminderlist.push(this.matches);
          this.matches = [];
          this.remind.matchid=this.listtwenty[this.rid].matchid;
          console.log(this.remind.matchid);
          this.remind.team1=this.listtwenty[this.rid].team1;
          this.remind.team2=this.listtwenty[this.rid].team2;
          this.remind.dateTimeGMT=this.listtwenty[this.rid].dateTimeGMT;
          this.remind.matchStarted=this.listtwenty[this.rid].matchStarted;
          this.remind.winner=this.listtwenty[this.rid].winner;
          this.remind.type=this.listtwenty[this.rid].type;
          this.remind.username=this.username;
          this.remind.winner_team="";
          this.apiService.addReminders(this.remind).subscribe(data=>{
          },
          error=>{
            console.log(error);
          })
        }
      }
    },
    error=>{
      console.log(error);   
    })
  }
}
  fcReminder(id){
    if (sessionStorage.getItem("username") !== null) {
    console.log(id);
    if(this.isClicked) {
    this.rid = this.listFirstclass.findIndex(ep => ep.matchid === id);
    console.log(this.rid);
    this.apiService1.getUpcomingMatches().subscribe(data=>{
      this.robj=data;
      console.log(this.robj);
      for (this.i = 0; this.i < Object.keys(data['matches']).length; this.i++) {
        if (id == this.robj['matches'][this.i]['unique_id'] ) {
          console.log(id);
          console.log(this.listFirstclass);
          this.setData();
          this.reminderlist.push(this.matches);
          this.matches = [];
          this.remind.matchid=this.listFirstclass[this.rid].matchid;
          console.log(this.remind.matchid);
          this.remind.team1=this.listFirstclass[this.rid].team1;
          this.remind.team2=this.listFirstclass[this.rid].team2;
          this.remind.dateTimeGMT=this.listFirstclass[this.rid].dateTimeGMT;
          this.remind.matchStarted=this.listFirstclass[this.rid].matchStarted;
          this.remind.winner=this.listFirstclass[this.rid].winner;
          this.remind.type=this.listFirstclass[this.rid].type;
          this.remind.username=this.username;
          this.remind.winner_team="";
          this.apiService.addReminders(this.remind).subscribe(data=>{
          },
          error=>{
            console.log(error);
          })
        }
      }
    },
    error=>{
      console.log(error);   
    })
    this.isClicked=!this.isClicked;
    }
    else{
      console.log("unreminded!");
      this.isClicked=!this.isClicked;
    } 
  }  
}
// else {
//   console.log("unrecommended!");
//   this.isClicked=!this.isClicked;
// }
}