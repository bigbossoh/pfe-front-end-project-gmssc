import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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
  findAllPicesEquipementByEquipement(idEquipement:number):Observable<PieceEquipementDto[]>{
    if(idEquipement){
      return this.pieceEqpmtService.listOfPiecEqpmtByEqpmntID(idEquipement);
    }
    return of();
  }
  findAllPicesEquipementByPiece(idpiece:number):Observable<PieceEquipementDto[]>{
    if(idpiece){
      return this.pieceEqpmtService.listOfPiecEqpmtByPiece(idpiece);
    }
    return of();
  }
  findPieceEquipementByID(idpieceEquipement:number):Observable<PieceEquipementDto>{
    if(idpieceEquipement){
      return this.pieceEqpmtService.getPieceEquipementByID(idpieceEquipement);
    }
    return of();
  }
}
