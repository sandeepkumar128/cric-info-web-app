import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentMatchesComponent } from './current-matches.component';
import { MatToolbarModule, MatCardModule } from '@angular/material';
import { NgxPaginationModule } from 'ngx-pagination';

describe('CurrentMatchesComponent', () => {
  let component: CurrentMatchesComponent;
  let fixture: ComponentFixture<CurrentMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentMatchesComponent ],imports:[MatToolbarModule,MatCardModule,NgxPaginationModule]
    
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
