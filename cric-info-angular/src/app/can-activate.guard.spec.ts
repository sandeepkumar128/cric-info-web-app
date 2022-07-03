import { TestBed, async, inject } from '@angular/core/testing';

import { CanActivateGuard } from './can-activate.guard';
import { RouterService } from './services/router.service';
import { HttpClient } from 'selenium-webdriver/http';

describe('CanActivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateGuard, RouterService, HttpClient]
    });
  });

  it('should ...', inject([CanActivateGuard], (guard: CanActivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
