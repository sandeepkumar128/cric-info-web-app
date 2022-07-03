import { Component, OnInit, ɵConsole } from '@angular/core';
import { CricAPIService } from '../services/cric-api.service';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import{ MatDialog} from '@angular/material/dialog';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-current-matches',
  templateUrl: './current-matches.component.html',
  styleUrls: ['./current-matches.component.css']
})
export class CurrentMatchesComponent implements OnInit {
  
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
  clicked:boolean=false;
  currentScore:Array<String>=[];
  team1:any;
  team2:any;
  winnerTeam:any;
  matchType:any;
  score1: string;
  score2: any;
  matchStatus: any;

  constructor(private apiService: CricAPIService , public dialog: MatDialog , public datepipe: DatePipe) { }

  ngOnInit() {

    this.apiService.getUpcomingMatches().subscribe(data =>{ 
      
      this.obj=data;
      var today = new Date();
      this.totalMatches = this.obj['matches'].length;
      
      for (this.i = 0; this.i < this.totalMatches; this.i++) {
        
        this.date = this.obj['matches'][this.i]['date'].substr(0,10);
        var a = new Date(this.date);

        this.date = this.datepipe.transform(this.date, 'dd/MM/yyyy')

        if(a.getDate() == today.getDate()){
                    
          this.matches['unique_id'] = this.obj['matches'][this.i]['unique_id'];
          this.matches['team_1'] = this.obj['matches'][this.i]['team-1'];
          this.matches['team_2'] = this.obj['matches'][this.i]['team-2'];
          this.matches['date'] = this.date;
          this.matches['matchStarted'] = this.obj['matches'][this.i]['matchStarted'];
          
          if(this.matches['matchStarted'] === false){
            this.matches['matchStarted'] = "Not yet started";
          }
          else{
            this.matches['matchStarted'] = "Yes, Match started";  
          }

          this.apiService.getScoreById(this.uniqueId).subscribe(data=>{
            this.score = data['score'];
          });

          this.winnerTeam = this.obj['matches'][this.i]['winner_team'];
     
          if(typeof this.winnerTeam == 'undefined')
             this.matches['winner_team'] = "Winner not yet announced !!!";

          else
            this.matches['winner_team'] = this.obj['matches'][this.i]['winner_team'];               

          this.matchType = this.obj['matches'][this.i]['type'];
          console.log(typeof this.matchType);

          let m:string;
          m=this.matchType;

          if(m.length == 0)
            this.matches['type'] = "Plase wait for some time to know this";
          else
            this.matches['type'] = this.matchType;

          this.currentMatches.push(this.matches);
          this.matches = [];

        }
    }
  });
}
  
getScore(id : any) {

  this.apiService.getScoreById(id).subscribe(data=>{
  
    this.matchStatus = data['stat'];
    this.score = data['score'];

    this.team1 = data['team-1'];
    this.team2 = data['team-2'];

    let sc : String;
    sc = this.score;

    let scoreArr : string[];
    let scoreArr1 : string[]; 
    let score2: string;
    
    scoreArr1 = sc.split(' v ');
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