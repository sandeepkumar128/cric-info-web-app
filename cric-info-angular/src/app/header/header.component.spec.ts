import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { RouterService } from '../services/router.service';
import { FormGroupDirective, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import {MatFormFieldModule,MatToolbarModule,MatExpansionModule,MatInputModule,MatButtonModule,MatCardModule,MatSelectModule,MatIconModule,MatListModule,MatSidenavModule,
  MatAutocompleteModule,MatSnackBarModule, MatDialogModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let routerService: RouterService;
  let mySpy: any;
  let obj: FormGroupDirective;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
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
    ReactiveFormsModule ,
    MatToolbarModule

      ],
      providers: [RouterService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
