import { Component, OnInit, Input } from '@angular/core';
import { CricAPIService } from 'src/app/services/cric-api.service';
import { RouterService } from 'src/app/services/router.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-search-results-child',
  templateUrl: './search-results-child.component.html',
  styleUrls: ['./search-results-child.component.css']
})
export class SearchResultsChildComponent implements OnInit {
  username:String;
  isClicked:boolean = true;
  matchId:number;
  userName:String;
  userRecom:UserRecommendation = new UserRecommendation();
  winnerC:String="";
  //for snackbar
  message:string="Added to recommendation list!";
  action:string="Done!"
  messageDeleted:string="Deleted from recommendation list!";
  actionDeleted:string="Done!"
  constructor(private userdataservice:UserDataService, private router:RouterService,private _snackBar: MatSnackBar) { }
  @Input() result:any;
  ngOnInit() {
    console.log(this.result.winner);
  }
  //for snackbar
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  addToRecommendations(result){
    console.log(result.winner);
    this.username=sessionStorage.getItem("username");
    if (sessionStorage.getItem("username") !== null) {
    if(this.isClicked) {
      this.userRecom=result;
      this.userRecom.username=this.username;
      console.log("ninjaaaaaaaaaaaaaaaaaa");
      console.log(result);
      console.log("**************")
      console.log(this.userRecom);
      console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
      this.userdataservice.addUserRecommendations(this.userRecom).subscribe(
        data=>{
            console.log(data);
            console.log("added to user recommended list..");
            //for snackbar
            this.openSnackBar(this.message,this.action);
        },
        error=>{
            console.log("error in adding recommendations")
        }
      );
      this.isClicked=!this.isClicked;
    }
    else{
      console.log("unrecommended!");
      this.userdataservice.deleteUserRecommendation(result['matchid'],this.username).subscribe();
      this.openSnackBar(this.messageDeleted,this.actionDeleted);
      this.isClicked=!this.isClicked;
    } 
  }
  else{
    this.router.toLogin();
  }
}


}
export class UserRecommendation{
  team1: string;
  team2:string;
  type:string;
  dateTimeGMT:string;
  winner:string;
  id:number;
  matchStarted:boolean;
  date:string;
  username:String;

  constructor() {
    this.id=0;
    this.team1='';
    this.team2='';
    this.type='';
    this.dateTimeGMT='';
    this.winner='';
    this.date='';
    this.username=''
  }
}

