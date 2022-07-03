import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpBackend } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { CMatch } from '../model/cmatch';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class CricAPIService {

  // cmatches:Array<any> = [];
  // subject: BehaviorSubject<Array<any>>= new BehaviorSubject(this.cmatches);
  playerid: number;
  matchid:number;

  // constructor(private httpClient: HttpClient) { }
  constructor(private httpClient:HttpClient,handler: HttpBackend) {
    this.httpClient=new HttpClient(handler);
  }
  // fetchFromServer(){
  //   return this.httpClient.get<Array<any>>('https://cricapi.com/api/matches?apikey=lzseRrsQatMsoDJ8MonyZgvN3bh2').subscribe(
  //     (data)=>{
  //       this.cmatches=data;
  //       this.subject.next(this.cmatches); 
  //     }
  //     );
  // }


  // data from api

  getMatch(id)
  {
    return this.httpClient.get<Array<any>>(`https://cricapi.com/api/fantasySummary?apikey=7KpNAKmr2khyQ4Qzt0rt53qb43X2&unique_id=${id}`);
  }
  setMatchid(id) {
    this.matchid = id;
  }
  getMatchid(): number {
    return this.matchid;
  }


  getMatchDetails(): Observable<Array<any>> {
    // return this.httpClient.get<Array<any>>('https://cricapi.com/api/matches',{headers : new HttpHeaders().set(`apikey`, `lzseRrsQatMsoDJ8MonyZgvN3bh2`)});
    return this.httpClient.get<Array<any>>('https://cricapi.com/api/matches?apikey=lzseRrsQatMsoDJ8MonyZgvN3bh2');
  }

  getNews() {
    return this.httpClient.get<Array<any>>(`https://newsapi.org/v2/everything?q="cricket" NOT "Football"&apiKey=0c09e9f0001a4a5998675658f90c0088&sortBy=publishedAt`);
  }

  getScoreById(id: number) {
    return this.httpClient.get(`https://cricapi.com/api/cricketScore?unique_id=` + id, {
      headers: new HttpHeaders().set('apikey', `7KpNAKmr2khyQ4Qzt0rt53qb43X2`)
    })
  }

  getUpcomingMatches() {
    return this.httpClient.get<Array<any>>(`http://cricapi.com/api/matches`, {
      headers: new HttpHeaders().set('apikey', `7KpNAKmr2khyQ4Qzt0rt53qb43X2`)
    })
  }

  getOldMatches() {
    return this.httpClient.get<Array<any>>(`https://cricapi.com/api/cricket`, {
      headers: new HttpHeaders().set('apikey', `7KpNAKmr2khyQ4Qzt0rt53qb43X2`)
    })
  }

  getScore(id: number) {
    console.log(typeof (id))
    console.log("the id is" + id)
    return this.httpClient.get<Array<any>>(`https://cricapi.com/api/cricketScore?unique_id=` + id, {
      headers: new HttpHeaders().set('apikey', `7KpNAKmr2khyQ4Qzt0rt53qb43X2`)
    })
  }

  getMatchDate() {
    console.log("Datessss");
    return this.httpClient.get<Array<any>>(`https://cricapi.com/api/matchCalendar`, {
      headers: new HttpHeaders().set('apikey', `7KpNAKmr2khyQ4Qzt0rt53qb43X2`)
    })
  }

  


}
