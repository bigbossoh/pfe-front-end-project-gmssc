import { TestBed } from '@angular/core/testing';

import { EquipementPieceService } from './equipement-piece.service';

describe('EquipementPieceService', () => {
  let service: EquipementPieceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipementPieceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
