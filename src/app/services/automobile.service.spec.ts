import { TestBed } from '@angular/core/testing';

import { AutomobileService } from './automobile.service';

describe('AutomobileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutomobileService = TestBed.get(AutomobileService);
    expect(service).toBeTruthy();
  });
});
