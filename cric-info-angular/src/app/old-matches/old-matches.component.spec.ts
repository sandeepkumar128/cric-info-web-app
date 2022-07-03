import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldMatchesComponent } from './old-matches.component';
import { RouterService } from '../services/router.service';
import { FormGroupDirective, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import {MatFormFieldModule,MatToolbarModule,MatExpansionModule,MatInputModule,MatButtonModule,MatCardModule,MatSelectModule,MatIconModule,MatListModule,MatSidenavModule,
  MatAutocompleteModule,MatSnackBarModule, MatDialogModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CricAPIService } from '../services/cric-api.service';
import { HeaderComponent } from '../header/header.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';

describe('OldMatchesComponent', () => {
  let component: OldMatchesComponent;
  let fixture: ComponentFixture<OldMatchesComponent>;
  let apiService: CricAPIService;
  let routerService: RouterService;
  let mySpy: any;
  let obj: FormGroupDirective;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldMatchesComponent, HeaderComponent ],
      imports:[
        NgxPaginationModule,
        MatIconModule,
        MatToolbarModule,
        MatCardModule,
        HttpClientModule,
        RouterModule,
        RouterTestingModule
      ],
      providers: [
       CricAPIService
     ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
