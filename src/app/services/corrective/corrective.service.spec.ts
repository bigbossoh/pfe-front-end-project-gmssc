import { TestBed } from '@angular/core/testing';

import { CorrectiveService } from './corrective.service';

describe('CorrectiveService', () => {
  let service: CorrectiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorrectiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
