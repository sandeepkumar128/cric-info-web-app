import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsChildComponent } from './search-results-child.component';

import { RouterService } from '../../services/router.service';
import { FormGroupDirective, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import {
  MatFormFieldModule, MatToolbarModule, MatExpansionModule, MatInputModule, MatButtonModule, MatCardModule, MatSelectModule, MatIconModule, MatListModule, MatSidenavModule,
  MatAutocompleteModule, MatSnackBarModule, MatDialogModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';

describe('SearchResultsChildComponent', () => {
//   let result = {
//     team1: "India",
//     team2:"Pak",
//     type:"ODI",
//     winner:"India",
//     matchid:12345,
//     matchStarted:"true",
//     date:"2020-01-20",
//     time:"3:00AM",
//     winner_team:"India",
//     username:"Tom",
// }
  let component: SearchResultsChildComponent;
  let fixture: ComponentFixture<SearchResultsChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultsChildComponent ],
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
    fixture = TestBed.createComponent(SearchResultsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create',async(() => {
    expect(component).toBeTruthy();
  }));

  // it('should contain mat-card to diplay results', () => {
  //   let element = fixture.debugElement.query(By.css('mat-card'));
  //   expect(element).toBeTruthy();
  // });


});
