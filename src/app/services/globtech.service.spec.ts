import { TestBed } from '@angular/core/testing';

import { GlobtechService } from './globtech.service';

describe('GlobtechService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobtechService = TestBed.get(GlobtechService);
    expect(service).toBeTruthy();
  });
});
