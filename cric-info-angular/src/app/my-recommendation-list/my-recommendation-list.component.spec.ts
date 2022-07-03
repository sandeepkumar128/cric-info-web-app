import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRecommendationListComponent } from './my-recommendation-list.component';

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

describe('MyRecommendationListComponent', () => {
  let component: MyRecommendationListComponent;
  let fixture: ComponentFixture<MyRecommendationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRecommendationListComponent, HeaderComponent],
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
        MatButtonModule

      ],
      providers: [RouterService]


    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRecommendationListComponent);
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
  it('should contain button', () => {
    let element = fixture.debugElement.query(By.css('button'));
    expect(element).toBeTruthy();
  });

 

});
