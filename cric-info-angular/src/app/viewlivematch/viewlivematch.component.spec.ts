import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlivematchComponent } from './viewlivematch.component';

describe('ViewlivematchComponent', () => {
  let component: ViewlivematchComponent;
  let fixture: ComponentFixture<ViewlivematchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewlivematchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewlivematchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
