import { TestBed } from '@angular/core/testing';

import { ToDOService } from './to-do.service';

describe('ToDOService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToDOService = TestBed.get(ToDOService);
    expect(service).toBeTruthy();
  });
});
