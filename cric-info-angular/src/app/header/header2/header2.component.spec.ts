import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Header2Component } from './header2.component';
import { MatToolbarModule } from '@angular/material';
import { RouterService } from 'src/app/services/router.service';
import { FormGroupDirective } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('Header2Component', () => {
  let component: Header2Component;
  let fixture: ComponentFixture<Header2Component>;
  let routerService: RouterService;
  let mySpy: any;
  let obj: FormGroupDirective;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Header2Component ], imports:[MatToolbarModule,HttpClientModule,
        RouterModule,
        RouterTestingModule ],providers: [RouterService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Header2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
