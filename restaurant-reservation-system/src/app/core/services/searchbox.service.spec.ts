import { TestBed } from '@angular/core/testing';

import { SearchboxService } from './searchbox.service';

describe('SearchboxServiceService', () => {
  let service: SearchboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
