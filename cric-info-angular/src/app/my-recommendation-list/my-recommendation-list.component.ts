import { Component, OnInit } from '@angular/core';
import { CMatch } from '../model/cmatch';
import { CricAPIService } from '../services/cric-api.service';
import { UserDataService } from '../services/user-data.service';
@Component({
  selector: 'app-my-recommendation-list',
  templateUrl: './my-recommendation-list.component.html',
  styleUrls: ['./my-recommendation-list.component.css']
})
export class MyRecommendationListComponent implements OnInit {
  username: String;
  matches: Array<any> = [];
  dataRecommendation: boolean = false;
  constructor(private userservice: UserDataService) { }
  ngOnInit() {
    if (sessionStorage.getItem("username") !== null) {
      // this.toggle=!this.toggle;
      this.username = sessionStorage.getItem("username");
      this.userservice.getUserRecommendations(this.username).subscribe(
        data => {
          this.matches = data;
          if (Object.keys(data).length>0) {
            this.dataRecommendation = !this.dataRecommendation;
            console.log("********");
            console.log(data);
          }
        },
        error => {
          console.log("Error getting data from database!");
        }
      );
    }
  }
  deleteUserRecommendation(matchid) {
    console.log(matchid);
    console.log(this.username);
    this.userservice.deleteUserRecommendation(matchid, this.username).subscribe(
      data => {
        console.log("deleted!");
        this.dataRecommendation = !this.dataRecommendation;
        this.ngOnInit();
      },
      error => {
        console.log("already deleted!");
      }
    );
  }
}

