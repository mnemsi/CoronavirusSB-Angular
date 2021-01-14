import { TestBed } from '@angular/core/testing';

import { LocationStatServiceService } from './location-stat.service';

describe('LocationStatServiceService', () => {
  let service: LocationStatServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationStatServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
