import { TestBed } from '@angular/core/testing';

import { JediService } from './jedi.service';

describe('JediService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JediService = TestBed.get(JediService);
    expect(service).toBeTruthy();
  });
});
