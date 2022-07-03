import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit {

  constructor(private routerService:RouterService) { }

  ngOnInit() {
  }
  upcoming(){
    this.routerService.toUpcomingMatches();
  }

  live(){
    this.routerService.toLiveScore();
  }
  
  old(){
    this.routerService.toOldMatches();
  }

  search(){
    this.routerService.toSearch();
  }

  dashboard(){
    this.routerService.toDashboard();
  }

  myReminders(){
    this.routerService.toMyReminders();
  }

  myRecommendations(){
    this.routerService.toMyRecommendations();
  }
  editProfile(){
    this.routerService.toEditProfile();
  }

  login(){
    this.routerService.toLogin();
  }

  logout(){
    sessionStorage.clear();
    localStorage.clear();
    this.routerService.toLogin();
  }
  
  recommendations(){
    this.routerService.toRecommendations();
  }


}
