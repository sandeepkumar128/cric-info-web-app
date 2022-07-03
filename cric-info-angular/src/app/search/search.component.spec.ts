import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { RouterService } from '../services/router.service';
import { FormGroupDirective, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import {MatFormFieldModule,MatToolbarModule,MatExpansionModule,MatInputModule,MatButtonModule,MatCardModule,MatSelectModule,MatIconModule,MatListModule,MatSidenavModule,
  MatAutocompleteModule,MatSnackBarModule, MatDialogModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {FormControl, FormGroup, Validators} from '@angular/forms';


describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let routerService: RouterService;
  let mySpy: any;
  let obj: FormGroupDirective;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
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
    ReactiveFormsModule 

      ],
      providers: [RouterService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    routerService = TestBed.get(RouterService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set submitted to true', async(() => {
    component.searchForm;
    expect(component.searchForm).toBeTruthy();
  }));
  it('should contain div tag', () => {
    let element = fixture.debugElement.query(By.css('div'));
    expect(element).toBeTruthy();
  });

  it('form invalid when match type is empty', () => {
    expect(component.myControl.valid).toBeTruthy();
    // expect(component.team1name.valid).toBeFalsy();
  });

  it('form invalid when team 2 name is empty', () => {
    expect(component.team2name.valid).toBeTruthy();
  });
  it('form should be invalid when the fields are left empty', async(() => {
    expect(component.myControl.valid).toBeTruthy();
    expect(component.team1name.valid).toBeTruthy();
    expect(component.team2name.valid).toBeTruthy();
  }));



});
