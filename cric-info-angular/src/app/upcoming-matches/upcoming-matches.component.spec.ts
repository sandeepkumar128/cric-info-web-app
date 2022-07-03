import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingMatchesComponent } from './upcoming-matches.component';
import { HeaderComponent } from '../header/header.component';
import { MatIconModule, MatToolbarModule, MatCardModule, MatInputModule, MatTab, MatTabsModule } from '@angular/material';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { CricAPIService } from '../services/cric-api.service';

describe('UpcomingMatchesComponent', () => {
  let component: UpcomingMatchesComponent;
  let fixture: ComponentFixture<UpcomingMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingMatchesComponent, HeaderComponent ], imports:[NgxPaginationModule,
        MatIconModule,
        MatToolbarModule,
        MatCardModule,
        HttpClientModule,
        RouterModule,
        RouterTestingModule,
        MatInputModule,
        MatTabsModule,], providers:[CricAPIService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
