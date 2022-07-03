import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRemindersComponent } from './my-reminders.component';
import { HeaderComponent } from '../header/header.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatIconModule, MatToolbarModule, MatCardModule, MatInputModule, MatTabsModule, MatDialog } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('MyRemindersComponent', () => {
  let component: MyRemindersComponent;
  let fixture: ComponentFixture<MyRemindersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRemindersComponent, HeaderComponent ], imports:[NgxPaginationModule,
        MatIconModule,
        MatToolbarModule,
        MatCardModule,
        HttpClientModule,
        RouterModule,
        RouterTestingModule,
        MatInputModule,
        MatTabsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRemindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
