import { Component, OnInit, Input } from '@angular/core';
import { CricAPIService } from '../services/cric-api.service';
import { error } from 'protractor';
import { DataService } from '../services/data.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  // username:String;
  // isClicked:boolean = true;
  // matchId:number;
  // userName:String;
  resultArray1: Array<any> = [];
  
  constructor( private dataservice: DataService) { }
  
  ngOnInit() {
    console.log("search results array******************************* ");
    this.dataservice.currentArray.subscribe(
      data=>
      {
        this.resultArray1=data;
        console.log(this.resultArray1);
    console.log("hahahhaha***********");
      }
    );
   
    
  }
  
  
}
