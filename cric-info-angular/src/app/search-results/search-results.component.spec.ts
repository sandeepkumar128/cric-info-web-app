import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsComponent } from './search-results.component';
import { RouterService } from '../services/router.service';
import { FormGroupDirective, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import {
  MatFormFieldModule, MatToolbarModule, MatExpansionModule, MatInputModule, MatButtonModule, MatCardModule, MatSelectModule, MatIconModule, MatListModule, MatSidenavModule,
  MatAutocompleteModule, MatSnackBarModule, MatDialogModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from '../search/search.component';
import { HeaderComponent } from '../header/header.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchResultsChildComponent } from './search-results-child/search-results-child.component';

describe('SearchResultsComponent', () => {
  let result = [{
    team1: "India",
    team2:"Pak",
    type:"ODI",
    winner:"India",
    matchid:12345,
    matchStarted:"true",
    date:"2020-01-20",
    time:"3:00AM",
    winner_team:"India",
    username:"Tom",
},
{
  team1: "India",
  team2:"Pak",
  type:"ODI",
  winner:"India",
  matchid:12345,
  matchStarted:"true",
  date:"2020-01-20",
  time:"3:00AM",
  winner_team:"India",
  username:"Tom",
}]
  let component: SearchResultsComponent;
  let fixture: ComponentFixture<SearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchResultsComponent, HeaderComponent, SearchComponent,SearchResultsChildComponent],
      imports: [
        HttpClientModule,
        BrowserModule,
        RouterTestingModule,
        ReactiveFormsModule,
        MatExpansionModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatSelectModule,
        BrowserAnimationsModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        MatSnackBarModule

      ],
      providers: [RouterService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain div tag', () => {
    let element = fixture.debugElement.query(By.css('div'));
    expect(element).toBeTruthy();
  });

  it('should have the app-search-results-child component', async(() => {
    const fixture = TestBed.createComponent(SearchResultsChildComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-search-results-child')).not.toBe(null);
  }));




});
