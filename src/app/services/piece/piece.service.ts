import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Gmsscapiv1piecesService } from 'src/gs-api/src/services';

import { PiecesDto } from './../../../gs-api/src/models/pieces-dto';

@Injectable({
  providedIn: 'root'
})
export class PieceService {
  findAllPicesEquipementByPiece(idBien: any) {
    throw new Error('Method not implemented.');
  }

  constructor(
    private pieceService:Gmsscapiv1piecesService
  ) { }
  savePiece(pieceDto:PiecesDto):Observable<PiecesDto>{
    return this.pieceService.savePiece(pieceDto);
  }
  findAllPieces():Observable<PiecesDto[]>{
    return this.pieceService.getListeDesPieces();
  }
  findPieceById(idpiece?:number):Observable<PiecesDto>{
    if(idpiece){
      return this.pieceService.getPieceByID(idpiece);
    }
    return of();
  }
  deletePiece(idpiece?:number):Observable<any>{
    if(idpiece){
      return this.pieceService.deletePieceById(idpiece);
    }
    return of();
  }
  findAllPieceByBien(idPiece?:number):Observable<PiecesDto[]>{
    if(idPiece){
      return this.pieceService.listPiecesByBienImmoId(idPiece);
    }
    return of();
  }
}
