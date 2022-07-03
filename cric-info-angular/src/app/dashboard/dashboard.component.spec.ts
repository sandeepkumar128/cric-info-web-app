import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from '../header/header.component';
import { SearchComponent } from '../search/search.component';
import { CurrentMatchesComponent } from '../current-matches/current-matches.component';
import { FooterComponent } from '../footer/footer.component';
import { MatToolbarModule, MatCardModule, MatExpansionModule, MatAutocompleteModule, MatOptionModule, MatFormFieldModule, MatFormField } from '@angular/material';
import { NgxPaginationModule } from 'ngx-pagination';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent, HeaderComponent, SearchComponent, CurrentMatchesComponent, FooterComponent],
      imports: [MatToolbarModule
        , MatCardModule,
        NgxPaginationModule,
        MatExpansionModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatOptionModule,
      MatFormField,
    ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
