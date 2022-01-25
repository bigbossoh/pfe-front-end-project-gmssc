import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Gmsscapiv1equipementsService } from 'src/gs-api/src/services';

import { EquipementDto } from '../../../gs-api/src/models/equipement-dto';



@Injectable({
  providedIn: 'root'
})
export class EquipementService {

  constructor(
    private equipementService:Gmsscapiv1equipementsService
  ) { }
  saveEquipement(eqptDto:EquipementDto):Observable<EquipementDto>{
    return this.equipementService.savePiece(eqptDto);
  }
  findAllEquipement():Observable<EquipementDto[]>{
    return this.equipementService.getListeDesEquipements();
  }
  findAllEquipementBySociete(idSociete:number):Observable<EquipementDto[]>{
    return this.equipementService.getListeEquipementByIdSociete(idSociete);
  }
  findEquipementById(idEqpt?:number):Observable<EquipementDto>{
    if(idEqpt){
      return this.equipementService.getEquipementByID(idEqpt);
    }
    return of();
  }
  deleteEquipement(idpiece?:number):Observable<any>{
    if(idpiece){
      return this.equipementService.deleteEquipementById(idpiece);
    }
    return of();
  }
}
