import { TestBed } from '@angular/core/testing';

import { GroupeInterventionService } from './groupe-intervention.service';

describe('GroupeInterventionService', () => {
  let service: GroupeInterventionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupeInterventionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
