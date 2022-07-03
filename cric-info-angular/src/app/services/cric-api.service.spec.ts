import { TestBed } from '@angular/core/testing';

import { CricAPIService } from './cric-api.service';

describe('CricAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CricAPIService = TestBed.get(CricAPIService);
    expect(service).toBeTruthy();
  });
});
