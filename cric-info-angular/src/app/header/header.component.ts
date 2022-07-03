import { Component, OnInit } from '@angular/core';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  togglelog:boolean= true;
  k: string;
  toggle:boolean=false;
  username: string;
  userArr:Array<string>;

  constructor(private routerService:RouterService) { }

  ngOnInit() {
    
    this.userArr = sessionStorage.getItem("username").split(/@/);
    this.username = this.userArr[0];
    this.k= localStorage.getItem("pic");
      console.log("in header***********");
      console.log(this.k);
    if(sessionStorage.getItem('username')!=null){
        this.togglelog=false;
    }
      

    if(sessionStorage.getItem('username')!=null){
      this.toggle=true;
    }
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
