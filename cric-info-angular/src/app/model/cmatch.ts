export class CMatch {
    team1: string;
    team2:string;
    type:string;
    dateTimeGMT:string;
    winner:string;
    matchid:number;
    matchStarted:boolean;
    date:string;
    time:string;
    winner_team:string;
    username:String;
  
    constructor() {
      this.matchid=0;
      this.team1='';
      this.team2='';
      this.type='';
      this.dateTimeGMT='';
      this.winner='';
      this.date='';
      this.winner_team='';
      this.time='';
      this.username='';
    }
  }
  