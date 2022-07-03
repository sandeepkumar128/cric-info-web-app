import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router:Router) { }

  toViewlivematch(){
    this.router.navigate(['view-live-score']);
  }
toLiveScore(){
  this.router.navigate(['live-score']);
}

  toDashboard(){
    this.router.navigate(['dashboard']);
  }

  toLogin(){
    this.router.navigate(['login']);
  }

  toRegister(){
    this.router.navigate(['registration']);
  }

  toSearch(){
    this.router.navigate(['search']);
  }

  toEditProfile(){
    this.router.navigate(['editProfile']);
  }

  toUpcomingMatches(){
    this.router.navigate(['upcomingMatches']);
  }

  toOldMatches(){
    this.router.navigate(['oldMatches']);
  }

  toMyRecommendations(){
    this.router.navigate(['myRecommendations']);
  }

  toMyReminders(){
    this.router.navigate(['myReminders'])
  }

  toSearchResults(){
    this.router.navigate(['searchResults'])
  }

  toRecommendations(){
    this.router.navigate(['recommendations']);
  }

}
