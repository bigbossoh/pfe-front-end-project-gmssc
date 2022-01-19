import { Injectable } from '@angular/core';

import { IntervenantDto } from '../../../gs-api/src/models/intervenant-dto';
import { Observable, of } from 'rxjs';
import { Gmsscapiv1intervenantsService } from 'src/gs-api/src/services';

@Injectable({
  providedIn: 'root'
})
export class IntervenantService {

  constructor(
    private intervenantService: Gmsscapiv1intervenantsService
  ) { }

  eregistrementIntervenant(intervenantDto:IntervenantDto):Observable<IntervenantDto>{
       return this.intervenantService.saveIntervenant(intervenantDto);
  }
  findIntervenantById(idIntervenant?:number):Observable<IntervenantDto>{
    if(idIntervenant){
      return this.intervenantService.getIntervenantByID(idIntervenant);
    }
    return of();
  }
  findAllIntervenantBySociete(idSocieteDto?:number):Observable<IntervenantDto[]>{
    if(idSocieteDto){
      return this.intervenantService.listOfIntervenantsBySocieteId(idSocieteDto);
    }
    return of();
  }
}
