import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IntervenantDto } from 'src/gs-api/src/models';

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
  findAllIntervenantByResponsable(fonctionInterv: string):Observable<IntervenantDto[]>{
    if(fonctionInterv){
          return this.intervenantService.listOfIntervenantsByfunction(fonctionInterv)
        }
        return of();
  }
  // findIntervenantResponsable(test:ListOfIntervenantsBySocieteIdAndFunctionParams):Observable<IntervenantDto[]>{
  //   if(idSociete && fonctionResp){
  //     return this.intervenantService.listOfIntervenantsBySocieteIdAndFunction(idSociete,fonctionResp)
  //     //listOfIntervenantsBySocieteIdAndFunction
  //   }
  //   return of();
  // }
}

export function saveIntervenant(intervenantDto: IntervenantDto): Observable<IntervenantDto> {
  throw new Error('Function not implemented.');
}

