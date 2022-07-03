// import { Component, OnInit } from '@angular/core';
// import { CricAPIService } from '../services/cric-api.service';
// import { CMatch } from '../model/cmatch';
// import { FormGroup, FormControl } from '@angular/forms';
// import {Observable} from 'rxjs';
// import {map, startWith} from 'rxjs/operators';
// import { DataService } from '../services/data.service';
// import { RouterService } from '../services/router.service';


// @Component({
//   selector: 'app-search',
//   templateUrl: './search.component.html',
//   styleUrls: ['./search.component.css']
// })
// export class SearchComponent implements OnInit {
//   cMatch: CMatch = new CMatch();
//   results: Array<any> = [];
//   resultArray: Array<CMatch> = [];
//   resultArray1: Array<any> = [];
//   searchForm: FormGroup;
//   tempArray: Array<any> = [];
//   tempTeam1: Array<any> = [];
//   tempTeam2: Array<any> = [];
//   x: number = 0;
//   z: number = 0;
//   numOfMatches: number = 0;
//   isClicked: boolean = true;
//   clicked:boolean = false;
//   matchType: Array<any> = [];
//   team1: Array<any> = [];
//   team2: Array<any> = [];
//   //autocomplete
//   myControl = new FormControl();
//   team1name = new FormControl();
//   team2name = new FormControl();
//   filteredOptions: Observable<string[]>;
//   filteredOptionsTeam1: Observable<string[]>;
//   filteredOptionsTeam2: Observable<string[]>;

//   constructor(private cricapiservice: CricAPIService, private dataservice:DataService, private routerservice:RouterService) { }

//   ngOnInit() {
//     //for autocomplete
//     this.filteredOptions = this.myControl.valueChanges
//       .pipe(
//         startWith(''),
//         map(value => this._filter(value))
//       );  
//       this.filteredOptionsTeam1 = this.team1name.valueChanges
//       .pipe(
//         startWith(''),
//         map(value => this._filter_team1(value))
//       );
//       this.filteredOptionsTeam2 = this.team2name.valueChanges
//       .pipe(
//         startWith(''),
//         map(value => this._filter_team2(value))
//       );
//       console.log("filteroptions: ")
//       console.log(this.filteredOptions);
//     //reactive form
//     this.searchForm = new FormGroup({
//       matchType: new FormControl(),
//       team1: new FormControl(),
//       team2: new FormControl()
//     });
    
//     //fetch type of matches
//     this.cricapiservice.getMatchDetails().subscribe(
//       data => {
//         console.log("data fetched : ");
//         console.log("fresh");
//         console.log(data);
//         for (let y = 0; y < Object.keys(data['matches']).length; y++) {
//           this.matchType.push(data['matches'][y]['type']);
//           this.team1.push(data['matches'][y]['team-1']);
//           this.team2.push(data['matches'][y]['team-2']);

//         }

//         console.log("hahahhhhahha");
//         console.log(this.matchType);
//         console.log("team1 : "+this.team1.length);
//         console.log("team2 : "+this.team2.length);

//         for (let j = 0; j < this.matchType.length; j++) {
//           if (this.tempArray.indexOf(this.matchType[j]) == -1&&(!!this.matchType[j])) {
//             this.tempArray.push(this.matchType[j]);
//           }
          
//         }
//         for (let j = 0; j < this.team1.length; j++) {
//           if (this.tempTeam1.indexOf(this.team1[j]) == -1&&(!!this.team1[j])) {
//             this.tempTeam1.push(this.team1[j]);
//           }
//           if (this.tempTeam2.indexOf(this.team2[j]) == -1&&(!!this.team2[j])) {
//             this.tempTeam2.push(this.team2[j]);
//           }
          
//         }
//         console.log("lollllllllll");
//         console.log(this.tempArray);
//         console.log("team1: "+this.tempTeam1);
//         console.log("team2: "+this.tempTeam2);

//       },
//       error => {
//         console.log("error fetching zzzz...");
//       }
//     );

    

//   }
//   //autocomplete code
//   //for type of match
//   private _filter(value: string): string[] {
//     const filterValue = value.toLowerCase();
//     console.log("auto : "+this.tempArray);
//     return this.tempArray.filter(option => option.toLowerCase().includes(filterValue));
//   }
//   //for team1
//   private _filter_team1(value: string): string[] {
//     const filterValue1 = value.toLowerCase();
//     console.log("auto : "+this.tempTeam1);
//     return this.tempTeam1.filter(option => option.toLowerCase().includes(filterValue1));
//   }
//   //for team2
//   private _filter_team2(value: string): string[] {
//     const filterValue2 = value.toLowerCase();
//     console.log("auto : "+this.tempTeam2);
//     return this.tempTeam2.filter(option => option.toLowerCase().includes(filterValue2));
//   }

//   setData(i) {
//     // this.resultArray['team1'] = this.results['matches'][i]['team-1'];
//     // this.resultArray['team2'] = this.results['matches'][i]['team-2'];
//     // this.resultArray['type'] = this.results['matches'][i]['type'];
//     // this.resultArray['date'] = this.results['matches'][i]['date'];
//     // this.resultArray['winner'] = this.results['matches'][i]['winner_team'];
//     // this.resultArray['id'] = this.results['matches'][i]['unique_id'];
//     this.cMatch.team1 = this.results['matches'][i]['team-1'];
//     this.cMatch.team2 = this.results['matches'][i]['team-2'];
//     this.cMatch.type = this.results['matches'][i]['type'];
//     this.cMatch.date = this.results['matches'][i]['date'].substr(0,10);
//     this.cMatch.winner = this.results['matches'][i]['winner_team'];
//     this.cMatch.matchid = this.results['matches'][i]['unique_id'];
//     this.resultArray1.push(this.cMatch);
//     this.cMatch = new CMatch();
//   }

//   search() {
//     console.log("xoxoxox************");
//     console.log(this.searchForm.value);
//     console.log(this.searchForm.value['matchType']);
//     console.log("****************");
//     console.log("matchtype****"+this.myControl.value);
//     this.resultArray1=[];
//     this.x=0;
//     this.clicked = true;
//     this.cricapiservice.getMatchDetails().subscribe(
//       data => {
//         console.log(data);
//         this.results = data;
//         console.log(this.results);
//         //loop iterates through data array 
//         for (let i = 0; i < Object.keys(data['matches']).length; i++) {
//           console.log("type of match :    " + this.results['matches'][i]['type']);
//           //if condition to check whether all search form attributes are selected 'All'
//           if (this.myControl.value === 'All') {
//             console.log("inside all");
//             if (this.team1name.value === 'All' && this.team2name.value === 'All') {
//               this.setData(i);
//               this.x = this.x + 1;
//             }
//             else if (this.team1name.value === (this.results['matches'][i]['team-1']) && this.team2name.value === (this.results['matches'][i]['team-2'])) {
//               this.setData(i);
//               this.x = this.x + 1;
//             }
//             else if (this.team1name.value === (this.results['matches'][i]['team-2']) && this.team2name.value === (this.results['matches'][i]['team-1'])) {
//               this.setData(i);
//               this.x = this.x + 1;
//             }
//           }

//           //if condition to check matches of particular teams
//           else if (this.myControl.value === 'ODI') {
//             console.log("inside odi");
//             console.log(this.results['matches'][i]['type']);
//             if (this.myControl.value === (this.results['matches'][i]['type']) && this.team1name.value === 'All' && this.team2name.value=== 'All') {
//               this.setData(i);
//               this.x = this.x + 1;
//             }
//             else if (this.team1name.value === (this.results['matches'][i]['team-1']) &&this.team2name.value === (this.results['matches'][i]['team-2'])) {
//               this.setData(i);
//               this.x = this.x + 1;
//             }
//             else if (this.team1name.value === (this.results['matches'][i]['team-2']) && this.team2name.value=== (this.results['matches'][i]['team-1'])) {
//               this.setData(i);
//               this.x = this.x + 1;

//             }
//           }
//           else if (this.myControl.value === 'Test') {
//             console.log("inside test");
//             console.log(this.x);
//             if (this.myControl.value === (this.results['matches'][i]['type']) && this.team1name.value === 'All' && this.team2name.value=== 'All') {
//               this.setData(i);
//               this.x = this.x + 1;
//             }
//             else if (this.team1name.value === (this.results['matches'][i]['team-1']) &&this.team2name.value === (this.results['matches'][i]['team-2'])) {
//               this.setData(i);
//               this.x = this.x + 1;
//             }
//             else if (this.team1name.value === (this.results['matches'][i]['team-2']) && this.team2name.value=== (this.results['matches'][i]['team-1'])) {
//               this.setData(i);
//               this.x = this.x + 1;

//             }
//           }
//           else if (this.myControl.value === 'Twenty20') {
//             console.log("inside twenty20");
//             if (this.myControl.value === (this.results['matches'][i]['type']) && this.team1name.value === 'All' && this.team2name.value=== 'All') {
//               this.setData(i);
//               this.x = this.x + 1;
//             }
//             else if (this.team1name.value === (this.results['matches'][i]['team-1']) &&this.team2name.value === (this.results['matches'][i]['team-2'])) {
//               this.setData(i);
//               this.x = this.x + 1;
//             }
//             else if (this.team1name.value === (this.results['matches'][i]['team-2']) && this.team2name.value=== (this.results['matches'][i]['team-1'])) {
//               this.setData(i);
//               this.x = this.x + 1;

//             }
//           }
//           else if (this.myControl.value === 'YouthODI') {
//             console.log("inside youOdi20");
//             if (this.myControl.value === (this.results['matches'][i]['type']) && this.team1name.value === 'All' && this.team2name.value=== 'All') {
//               this.setData(i);
//               this.x = this.x + 1;
//             }
//             else if (this.team1name.value === (this.results['matches'][i]['team-1']) &&this.team2name.value === (this.results['matches'][i]['team-2'])) {
//               this.setData(i);
//               this.x = this.x + 1;
//             }
//             else if (this.team1name.value === (this.results['matches'][i]['team-2']) && this.team2name.value=== (this.results['matches'][i]['team-1'])) {
//               this.setData(i);
//               this.x = this.x + 1;

//             }
//           }
//           else if (this.myControl.value === 'First-class') {
//             console.log("inside firstClass20");
//             if (this.myControl.value === (this.results['matches'][i]['type']) && this.team1name.value === 'All' && this.team2name.value=== 'All') {
//               this.setData(i);
//               this.x = this.x + 1;
//             }
//             else if (this.team1name.value === (this.results['matches'][i]['team-1']) &&this.team2name.value === (this.results['matches'][i]['team-2'])) {
//               this.setData(i);
//               this.x = this.x + 1;
//             }
//             else if (this.team1name.value === (this.results['matches'][i]['team-2']) && this.team2name.value=== (this.results['matches'][i]['team-1'])) {
//               this.setData(i);
//               this.x = this.x + 1;

//             }
//           }

//         }
//         console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
//         console.log(this.resultArray1);
//         this.dataservice.changeCurrentArray(this.resultArray1);
//         this.routerservice.toSearchResults();
//       },
//       error => {
//         console.log(error);
//       }
//     );


//   }

// }
import { Component, OnInit } from '@angular/core';
import { CricAPIService } from '../services/cric-api.service';
import { CMatch } from '../model/cmatch';
import { FormGroup, FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { DataService } from '../services/data.service';
import { RouterService } from '../services/router.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  cMatch: CMatch = new CMatch();
  results: Array<any> = [];
  resultArray: Array<CMatch> = [];
  resultArray1: Array<any> = [];
  searchForm: FormGroup;
  tempArray: Array<any> = [];
  tempTeam1: Array<any> = [];
  tempTeam2: Array<any> = [];
  x: number = 0;
  z: number = 0;
  numOfMatches: number = 0;
  isClicked: boolean = true;
  clicked:boolean = false;
  matchType: Array<any> = [];
  team1: Array<any> = [];
  team2: Array<any> = [];
  //autocomplete
  myControl = new FormControl();
  team1name = new FormControl();
  team2name = new FormControl();
  filteredOptions: Observable<string[]>;
  filteredOptionsTeam1: Observable<string[]>;
  filteredOptionsTeam2: Observable<string[]>;
  constructor(private cricapiservice: CricAPIService, private dataservice:DataService, private routerservice:RouterService) { }
  ngOnInit() {
    //for autocomplete
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
      this.filteredOptionsTeam1 = this.team1name.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter_team1(value))
      );
      this.filteredOptionsTeam2 = this.team2name.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter_team2(value))
      );
      console.log("filteroptions: ")
      console.log(this.filteredOptions);
    //reactive form
    this.searchForm = new FormGroup({
      matchType: new FormControl(),
      team1: new FormControl(),
      team2: new FormControl()
    });
    //fetch type of matches
    this.cricapiservice.getMatchDetails().subscribe(
      data => {
        console.log("data fetched : ");
        console.log("fresh");
        console.log(data);
        for (let y = 0; y < Object.keys(data['matches']).length; y++) {
          this.matchType.push(data['matches'][y]['type']);
          this.team1.push(data['matches'][y]['team-1']);
          this.team2.push(data['matches'][y]['team-2']);
        }
        console.log("hahahhhhahha");
        console.log(this.matchType);
        console.log("team1 : "+this.team1.length);
        console.log("team2 : "+this.team2.length);
        for (let j = 0; j < this.matchType.length; j++) {
          if (this.tempArray.indexOf(this.matchType[j]) == -1&&(!!this.matchType[j])) {
            this.tempArray.push(this.matchType[j]);
          }
        }
        for (let j = 0; j < this.team1.length; j++) {
          if (this.tempTeam1.indexOf(this.team1[j]) == -1&&(!!this.team1[j])) {
            this.tempTeam1.push(this.team1[j]);
          }
          if (this.tempTeam2.indexOf(this.team2[j]) == -1&&(!!this.team2[j])) {
            this.tempTeam2.push(this.team2[j]);
          }
        }
        console.log("lollllllllll");
        console.log(this.tempArray);
        console.log("team1: "+this.tempTeam1);
        console.log("team2: "+this.tempTeam2);
      },
      error => {
        console.log("error fetching zzzz...");
      }
    );
  }
  //autocomplete code
  //for type of match
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    console.log("auto : "+this.tempArray);
    return this.tempArray.filter(option => option.toLowerCase().includes(filterValue));
  }
  //for team1
  private _filter_team1(value: string): string[] {
    const filterValue1 = value.toLowerCase();
    console.log("auto : "+this.tempTeam1);
    return this.tempTeam1.filter(option => option.toLowerCase().includes(filterValue1));
  }
  //for team2
  private _filter_team2(value: string): string[] {
    const filterValue2 = value.toLowerCase();
    console.log("auto : "+this.tempTeam2);
    return this.tempTeam2.filter(option => option.toLowerCase().includes(filterValue2));
  }
  setData(i) {
    // this.resultArray['team1'] = this.results['matches'][i]['team-1'];
    // this.resultArray['team2'] = this.results['matches'][i]['team-2'];
    // this.resultArray['type'] = this.results['matches'][i]['type'];
    // this.resultArray['date'] = this.results['matches'][i]['date'];
    // this.resultArray['winner'] = this.results['matches'][i]['winner_team'];
    // this.resultArray['id'] = this.results['matches'][i]['unique_id'];
    let currentDate:Date = new Date();
    let matchDate:Date= new Date(this.results['matches'][i]['date'].substr(0,10));
    console.log(currentDate);
    console.log(matchDate);
    if(matchDate.getDate()>=currentDate.getDate()){
    this.cMatch.team1 = this.results['matches'][i]['team-1'];
    this.cMatch.team2 = this.results['matches'][i]['team-2'];
    this.cMatch.type = this.results['matches'][i]['type'];
    this.cMatch.date = this.results['matches'][i]['date'].substr(0,10);
    this.cMatch.winner = this.results['matches'][i]['winner_team'];
    this.cMatch.matchid = this.results['matches'][i]['unique_id'];
    this.resultArray1.push(this.cMatch);
    this.cMatch = new CMatch();
    }
    else {
      console.log("error in pushing data!")
    }
  }
  search() {
    console.log("xoxoxox************");
    console.log(this.searchForm.value);
    console.log(this.searchForm.value['matchType']);
    console.log("****************");
    console.log("matchtype****"+this.myControl.value);
    this.resultArray1=[];
    this.x=0;
    this.clicked = true;
    this.cricapiservice.getMatchDetails().subscribe(
      data => {
        console.log(data);
        this.results = data;
        console.log(this.results);
        //loop iterates through data array
        for (let i = 0; i < Object.keys(data['matches']).length; i++) {
          console.log("type of match :    " + this.results['matches'][i]['type']);
          //if condition to check whether all search form attributes are selected 'All'
          if (this.myControl.value === 'All') {
            console.log("inside all");
            if (this.team1name.value === 'All' && this.team2name.value === 'All') {
              this.setData(i);
              this.x = this.x + 1;
            }
            else if (this.team1name.value === (this.results['matches'][i]['team-1']) && this.team2name.value === (this.results['matches'][i]['team-2'])) {
              this.setData(i);
              this.x = this.x + 1;
            }
            else if (this.team1name.value === (this.results['matches'][i]['team-2']) && this.team2name.value === (this.results['matches'][i]['team-1'])) {
              this.setData(i);
              this.x = this.x + 1;
            }
          }
          //if condition to check matches of particular teams
          else if (this.myControl.value === 'ODI') {
            console.log("inside odi");
            console.log(this.results['matches'][i]['type']);
            if (this.myControl.value === (this.results['matches'][i]['type']) && this.team1name.value === 'All' && this.team2name.value=== 'All') {
              this.setData(i);
              this.x = this.x + 1;
            }
            else if (this.team1name.value === (this.results['matches'][i]['team-1']) &&this.team2name.value === (this.results['matches'][i]['team-2'])) {
              this.setData(i);
              this.x = this.x + 1;
            }
            else if (this.team1name.value === (this.results['matches'][i]['team-2']) && this.team2name.value=== (this.results['matches'][i]['team-1'])) {
              this.setData(i);
              this.x = this.x + 1;
            }
          }
          else if (this.myControl.value === 'Test') {
            console.log("inside test");
            console.log(this.x);
            if (this.myControl.value === (this.results['matches'][i]['type']) && this.team1name.value === 'All' && this.team2name.value=== 'All') {
              this.setData(i);
              this.x = this.x + 1;
            }
            else if (this.team1name.value === (this.results['matches'][i]['team-1']) &&this.team2name.value === (this.results['matches'][i]['team-2'])) {
              this.setData(i);
              this.x = this.x + 1;
            }
            else if (this.team1name.value === (this.results['matches'][i]['team-2']) && this.team2name.value=== (this.results['matches'][i]['team-1'])) {
              this.setData(i);
              this.x = this.x + 1;
            }
          }
          else if (this.myControl.value === 'Twenty20') {
            console.log("inside twenty20");
            if (this.myControl.value === (this.results['matches'][i]['type']) && this.team1name.value === 'All' && this.team2name.value=== 'All') {
              this.setData(i);
              this.x = this.x + 1;
            }
            else if (this.team1name.value === (this.results['matches'][i]['team-1']) &&this.team2name.value === (this.results['matches'][i]['team-2'])) {
              this.setData(i);
              this.x = this.x + 1;
            }
            else if (this.team1name.value === (this.results['matches'][i]['team-2']) && this.team2name.value=== (this.results['matches'][i]['team-1'])) {
              this.setData(i);
              this.x = this.x + 1;
            }
          }
          else if (this.myControl.value === 'YouthODI') {
            console.log("inside youOdi20");
            if (this.myControl.value === (this.results['matches'][i]['type']) && this.team1name.value === 'All' && this.team2name.value=== 'All') {
              this.setData(i);
              this.x = this.x + 1;
            }
            else if (this.team1name.value === (this.results['matches'][i]['team-1']) &&this.team2name.value === (this.results['matches'][i]['team-2'])) {
              this.setData(i);
              this.x = this.x + 1;
            }
            else if (this.team1name.value === (this.results['matches'][i]['team-2']) && this.team2name.value=== (this.results['matches'][i]['team-1'])) {
              this.setData(i);
              this.x = this.x + 1;
            }
          }
          else if (this.myControl.value === 'First-class') {
            console.log("inside firstClass20");
            if (this.myControl.value === (this.results['matches'][i]['type']) && this.team1name.value === 'All' && this.team2name.value=== 'All') {
              this.setData(i);
              this.x = this.x + 1;
            }
            else if (this.team1name.value === (this.results['matches'][i]['team-1']) &&this.team2name.value === (this.results['matches'][i]['team-2'])) {
              this.setData(i);
              this.x = this.x + 1;
            }
            else if (this.team1name.value === (this.results['matches'][i]['team-2']) && this.team2name.value=== (this.results['matches'][i]['team-1'])) {
              this.setData(i);
              this.x = this.x + 1;
            }
          }
        }
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
        console.log(this.resultArray1);
        this.dataservice.changeCurrentArray(this.resultArray1);
        this.routerservice.toSearchResults();
      },
      error => {
        console.log(error);
      }
    );
  }
}

