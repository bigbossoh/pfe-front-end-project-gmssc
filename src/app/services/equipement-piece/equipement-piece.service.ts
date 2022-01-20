import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gmsscapiv1PieceEquipementsService } from 'src/gs-api/src/services';
import { PieceEquipementDto } from '../../../gs-api/src/models/piece-equipement-dto';

@Injectable({
  providedIn: 'root'
})
export class EquipementPieceService {

  constructor(
    private pieceEqpmtService:Gmsscapiv1PieceEquipementsService
  ) { }
  savePieceEqpmnt(pieceEqpmnt:PieceEquipementDto):Observable<PieceEquipementDto>{
    return this.pieceEqpmtService.savePieceEquipement(pieceEqpmnt);
  }
 
}
