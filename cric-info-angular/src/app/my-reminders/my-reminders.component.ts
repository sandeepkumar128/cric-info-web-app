import { Component, OnInit, ɵConsole } from '@angular/core';
import { RouterService } from '../services/router.service';
import { CricAPIService } from '../services/cric-api.service';
import { DatePipe } from '@angular/common';
import { CMatch } from '../model/cmatch';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { UserDataService } from '../services/user-data.service';
@Component({
  selector: 'app-my-reminders',
  templateUrl: './my-reminders.component.html',
  styleUrls: ['./my-reminders.component.css']
})
export class MyRemindersComponent implements OnInit {
  o: number = 1;
  i:number;
  k:number;
  deleteindex:number;
  reminders:Array<any>=[];
  odiReminders:Array<any>=[];
  testReminders:Array<any>=[];
  twentyReminders:Array<any>=[];
  fcReminders:Array<any>=[];
  username:String;
  list:Array<any>=[];
  rid: any;
  dlist : Array<CMatch> = [ ];
  id: number;
  score1: string;
  score2: any;
  matchStatus: any;
  score: any;
  team1:any;
  team2:any;
  constructor(private router:RouterService,private apiService:UserDataService,public dialog: MatDialog,private cricapiService:CricAPIService) { }
  ngOnInit() {
    if (sessionStorage.getItem("username") !== null) {
    this.cricapiService.getUpcomingMatches().subscribe(data1=>{
      console.log(data1); 
      this.list=data1;
      for(this.k=0 ; this.k < this.list['matches'].length ; this.k++){
        this.dlist.push(this.list['matches'][this.k]['unique_id']);  
      }
    this.username = sessionStorage.getItem("username");
    this.apiService.getReminders(this.username).subscribe(data=>{
      console.log(data);
      this.reminders=data;
      console.log(this.reminders)
      for (this.i = 0; this.i < Object.keys(data).length; this.i++) {
        if ((this.reminders[this.i]['type'] == "Test")) { 
          this.rid = this.dlist.findIndex(ep => ep === this.reminders[this.i].matchid);
          if(this.rid==-1){
          console.log("id not found");
          this.id=this.reminders[this.i].matchid;
          this.apiService.deleteReminder(this.id,this.username).subscribe(data=>{
          });}
          console.log("found");
          this.reminders[this.i]['winner_team']=this.list['matches'][this.rid]['winner_team'];
          this.testReminders.push(this.reminders[this.i]);
        }
        else if ((this.reminders[this.i]['type'] == "ODI")){
          this.rid = this.dlist.findIndex(ep => ep === this.reminders[this.i].matchid);
          console.log(this.reminders[this.i].matchid);
          console.log(this.rid);
          if(this.rid==-1){
          console.log("id not found");
          this.id=this.reminders[this.i].matchid;
          this.apiService.deleteReminder(this.id,this.username).subscribe(data=>{
          });}
          this.reminders[this.i]['winner_team']=this.list['matches'][this.rid]['winner_team'];
          this.odiReminders.push(this.reminders[this.i]);
          console.log(this.odiReminders);
         }
         else if ((this.reminders[this.i]['type'] == "Twenty20")) {
          this.rid = this.dlist.findIndex(ep => ep === this.reminders[this.i].matchid);
          console.log(this.reminders[this.i].matchid);
          console.log(this.rid);
          if(this.rid==-1){
          console.log("id not found");
          this.id=this.reminders[this.i].matchid;
          this.apiService.deleteReminder(this.id,this.username).subscribe(data=>{
          });}
          this.reminders[this.i]['winner_team']=this.list['matches'][this.rid]['winner_team'];
          this.twentyReminders.push(this.reminders[this.i]);
          console.log(this.twentyReminders['winner_team']);
            }
            else if ((this.reminders[this.i]['type'] == "First-class")) {
              this.rid = this.dlist.findIndex(ep => ep === this.reminders[this.i].matchid);
              if(this.rid==-1){
          console.log("id not found");
          this.id=this.reminders[this.i].matchid;
          this.apiService.deleteReminder(this.id,this.username).subscribe(data=>{
          });}
          this.reminders[this.i]['winner_team']=this.list['matches'][this.rid]['winner_team'];
          this.fcReminders.push(this.reminders[this.i]);
              }
      
           };
           console.log(this.testReminders);
      console.log(this.odiReminders);
      console.log(this.twentyReminders);
      console.log(this.fcReminders);
    },error=>{
      console.log(error);
    });console.log(this.dlist)})
  }
}
  odiDelReminder(id){
    this.deleteindex = this.odiReminders.findIndex(ep => ep.matchid === id);
    console.log(this.deleteindex);
    this.odiReminders.splice(this.deleteindex, 1);
    this.apiService.deleteReminder(id,this.username).subscribe(data=>{
    }),
    error=>{
      console.log(error);
    }
  }
  testDelReminder(id){
    this.deleteindex = this.testReminders.findIndex(ep => ep.matchid === id);
    console.log(this.deleteindex);
    this.testReminders.splice(this.deleteindex, 1);
    this.apiService.deleteReminder(id,this.username).subscribe(data=>{
    }),
    error=>{
      console.log(error);
    }
  }
  ttDelReminder(id){
    this.deleteindex = this.twentyReminders.findIndex(ep => ep.matchid === id);
    console.log(this.deleteindex);
    this.twentyReminders.splice(this.deleteindex, 1);
    this.apiService.deleteReminder(id,this.username).subscribe(data=>{
    }),
    error=>{
      console.log(error);
    }
  }
  fcDelReminder(id){
    this.deleteindex = this.fcReminders.findIndex(ep => ep.matchid === id);
    console.log(this.deleteindex);
    this.fcReminders.splice(this.deleteindex, 1);
    this.apiService.deleteReminder(id,this.username).subscribe(data=>{
    }),
    error=>{
      console.log(error);
    }
  }
  getScore(id : any) {
    this.cricapiService.getScoreById(id).subscribe(data=>{
      this.matchStatus = data['stat'];
      this.score = data['score'];
      this.team1 = data['team-1'];
      this.team2 = data['team-2'];
      let sc : String;
      sc = this.score;
      let scoreArr : string[];
      let scoreArr1 : string[];
      let score2: string;
      scoreArr1 = sc.split('v ');
      console.log(scoreArr1);
      if(scoreArr1[0].includes('/' , 0) && scoreArr1[0].includes('&amp;' , 0))
        this.score = "Team 1 Score: Innings 1: " + scoreArr1[0].replace("&amp;" , " ,Innings 2: ");
      else if(scoreArr1[0].includes('/' , 0))
        this.score = "Team 1 Score: Innings: " + scoreArr1[0];
      else
        this.score = "Match still going onn";
      if(scoreArr1[1].includes('/' , 0) && scoreArr1[1].includes('&amp;' , 0))
        this.score2 = "Team 2 Score: Innings 1: " + scoreArr1[1].replace("&amp;" , " ,Innings 2: ");
      else if(scoreArr1[0].includes('/' , 0))
        this.score2 = "Team 2 Score: Innings: " + scoreArr1[1];
      else
        this.score2 = "Match still going onn";
      scoreArr = sc.split(' ');
      console.log(scoreArr);
      if(sc.includes('/' , 0))
        console.log("true , it contains score");
      else{
        console.log("false it doest contain score");
        this.score = "Please Wait for score";
        this.matchStatus = "Wait for it";
      }
      sc = " ";
    const dialogRef = this.dialog.open(DialogBoxComponent , {
          data:{score: this.score , score2: this.score2 , stat: this.matchStatus}
        });
        dialogRef.afterClosed().subscribe(result => console.log(result));
    });
  }
}