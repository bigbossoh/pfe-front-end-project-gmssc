import { TestBed } from '@angular/core/testing';

import { IntervenantGroupeInterventionService } from './intervenant-groupe-intervention.service';

describe('IntervenantGroupeInterventionService', () => {
  let service: IntervenantGroupeInterventionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntervenantGroupeInterventionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
