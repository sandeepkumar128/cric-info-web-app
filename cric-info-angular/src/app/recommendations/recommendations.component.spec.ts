import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationsComponent } from './recommendations.component';
import { HeaderComponent } from '../header/header.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatIconModule, MatToolbarModule, MatCardModule, MatInputModule, MatTabsModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('RecommendationsComponent', () => {
  let component: RecommendationsComponent;
  let fixture: ComponentFixture<RecommendationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendationsComponent,HeaderComponent ], imports:[NgxPaginationModule,
        MatIconModule,
        MatToolbarModule,
        MatCardModule,
        HttpClientModule,
        RouterModule,
        RouterTestingModule,
        MatInputModule,
        MatTabsModule] 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
