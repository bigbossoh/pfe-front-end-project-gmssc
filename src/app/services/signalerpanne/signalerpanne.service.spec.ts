import { TestBed } from '@angular/core/testing';

import { SignalerpanneService } from './signalerpanne.service';

describe('SignalerpanneService', () => {
  let service: SignalerpanneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalerpanneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
