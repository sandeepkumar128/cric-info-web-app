import { Component, OnInit } from '@angular/core';
import { CricAPIService } from '../services/cric-api.service';
import { RouterService } from '../services/router.service';
@Component({
  selector: 'app-viewlivematch',
  templateUrl: './viewlivematch.component.html',
  styleUrls: ['./viewlivematch.component.css']
})
export class ViewlivematchComponent implements OnInit {
  matchid: number;
  scoredata: Array<any> = [];
  scoreline: string;
  scores: Array<any> = [];
  cid: number;
  team1: string;
  team2: string;
  team1namebat: string;
  team1nameball: string;
  team1databat: Array<any> = [];
  team1playerbat: Array<any> = [];
  team1playersbat: Array<any> = [];
  team1databall: Array<any> = [];
  team1playerball: Array<any> = [];
  team1playersball: Array<any> = [];
  team2namebat: string;
  team2nameball: string;
  team2databat: Array<any> = [];
  team2playerbat: Array<any> = [];
  team2playersbat: Array<any> = [];
  team2databall: Array<any> = [];
  team2playerball: Array<any> = [];
  team2playersball: Array<any> = [];
  temparr: Array<any> = [];
  fdata: Array<any> = [];
  tosswin: string;
  manofmatch: string;
  startflag: boolean = false;
  constructor(private cplayerservice: CricAPIService, private routerservice: RouterService) { }
  ngOnInit() {
    this.matchid = this.cplayerservice.getMatchid();
    this.cplayerservice.getScore(this.matchid).subscribe(
      data => {
        this.scoredata = data;
        if (this.scoredata['stat'] == "") {
          alert("Match is not started yet !");
          this.routerservice.toLiveScore();
        }
        else {
          this.scoreline = this.scoredata['score'];
          console.log(this.scoreline);
          this.scores = this.scoreline.split(" v ");
          console.log(this.scores);
          this.team1 = this.scores[0].trim();
          this.team2 = this.scores[1].trim();
          console.log(this.team1);
          console.log(this.team2);
          if (this.team2.includes("&amp;")) {
            this.temparr = this.team2.split(" ");
            console.log(this.temparr.indexOf("&amp;"));
            this.temparr[this.temparr.indexOf("&amp;")] = "&";
            console.log(this.temparr);
            this.team2 = this.temparr.join(" ");
            console.log(this.team2);
          }
          if (this.team1.includes("&amp;")) {
            this.temparr = this.team1.split(" ");
            console.log(this.temparr.indexOf("&amp;"));
            this.temparr[this.temparr.indexOf("&amp;")] = "&";
            console.log(this.temparr);
            this.team1 = this.temparr.join(" ");
            console.log(this.team1);
          }
          this.cplayerservice.getMatch(this.matchid).subscribe(
            data => {
              this.fdata = data;
              console.log(this.fdata);
              this.tosswin = this.fdata['data']['toss_winner_team'];
              this.manofmatch = this.fdata['data']['man-of-the-match']['name'];
              if (this.fdata['data']['batting'][0]['title'] == "") {
                alert("Match is not started yet !");
                this.routerservice.toLiveScore();
              }
              else {
                this.startflag = true;
                this.team1namebat = this.fdata['data']['batting'][0]['title'];
                console.log(this.fdata['data']['batting'][0]['title']);
                this.team1databat = this.fdata['data']['batting'][0]['scores'];
                console.log(this.fdata['data']['batting'][0]['scores']);
                for (let i = 0; i < this.team1databat.length - 1; i++) {
                  this.team1playerbat['batsman'] = this.team1databat[i]['batsman'];
                  this.team1playerbat['info'] = this.team1databat[i]['dismissal-info'];
                  this.team1playerbat['R'] = this.team1databat[i]['R'];
                  this.team1playerbat['B'] = this.team1databat[i]['B'];
                  this.team1playerbat['fours'] = this.team1databat[i]['4s'];
                  this.team1playerbat['sixs'] = this.team1databat[i]['6s'];
                  this.team1playerbat['SR'] = this.team1databat[i]['SR'];
                  this.team1playersbat.push(this.team1playerbat);
                  this.team1playerbat = [];
                }
                console.log(this.team1playersbat);
                this.team1nameball = this.fdata['data']['bowling'][0]['title'];
                console.log(this.fdata['data']['bowling'][0]['title']);
                this.team1databall = this.fdata['data']['bowling'][0]['scores'];
                console.log(this.fdata['data']['bowling'][0]['scores']);
                for (let i = 0; i < this.team1databall.length; i++) {
                  this.team1playerball['bowler'] = this.team1databall[i]['bowler'];
                  this.team1playerball['O'] = this.team1databall[i]['O'];
                  this.team1playerball['M'] = this.team1databall[i]['M'];
                  this.team1playerball['R'] = this.team1databall[i]['R'];
                  this.team1playerball['W'] = this.team1databall[i]['W'];
                  this.team1playerball['Econ'] = this.team1databall[i]['Econ'];
                  this.team1playerball['zeros'] = this.team1databall[i]['0s'];
                  this.team1playerball['fours'] = this.team1databall[i]['4s'];
                  this.team1playerball['sixs'] = this.team1databall[i]['6s'];
                  this.team1playersball.push(this.team1playerball);
                  this.team1playerball = [];
                }
                console.log(this.team1playersball);
                this.team2namebat = this.fdata['data']['batting'][1]['title'];
                console.log(this.fdata['data']['batting'][1]['title']);
                this.team2databat = this.fdata['data']['batting'][1]['scores'];
                console.log(this.fdata['data']['batting'][1]['scores']);
                for (let i = 0; i < this.team2databat.length - 1; i++) {
                  this.team2playerbat['batsman'] = this.team2databat[i]['batsman'];
                  this.team2playerbat['info'] = this.team2databat[i]['dismissal-info'];
                  this.team2playerbat['R'] = this.team2databat[i]['R'];
                  this.team2playerbat['B'] = this.team2databat[i]['B'];
                  this.team2playerbat['fours'] = this.team2databat[i]['4s'];
                  this.team2playerbat['sixs'] = this.team2databat[i]['6s'];
                  this.team2playerbat['SR'] = this.team2databat[i]['SR'];
                  this.team2playersbat.push(this.team2playerbat);
                  this.team2playerbat = [];
                }
                console.log(this.team2playersbat);
                this.team2nameball = this.fdata['data']['bowling'][0]['title'];
                console.log(this.fdata['data']['bowling'][0]['title']);
                this.team2databall = this.fdata['data']['bowling'][0]['scores'];
                console.log(this.fdata['data']['bowling'][0]['scores']);
                for (let i = 0; i < this.team2databall.length; i++) {
                  this.team2playerball['bowler'] = this.team2databall[i]['bowler'];
                  this.team2playerball['O'] = this.team2databall[i]['O'];
                  this.team2playerball['M'] = this.team2databall[i]['M'];
                  this.team2playerball['R'] = this.team2databall[i]['R'];
                  this.team2playerball['W'] = this.team2databall[i]['W'];
                  this.team2playerball['Econ'] = this.team2databall[i]['Econ'];
                  this.team2playerball['zeros'] = this.team2databall[i]['0s'];
                  this.team2playerball['fours'] = this.team2databall[i]['4s'];
                  this.team2playerball['sixs'] = this.team2databall[i]['6s'];
                  this.team2playersball.push(this.team2playerball);
                  this.team2playerball = [];
                }
                console.log(this.team2playersball);
              }
            }
          )
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}