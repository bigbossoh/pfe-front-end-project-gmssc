import { Injectable } from '@angular/core';

// import { UserService } from '../user/user.service';

import { Observable, of } from 'rxjs';
import { SocieteDto } from 'src/gs-api/src/models';
import { Gmsscapiv1societesService } from 'src/gs-api/src/services';



@Injectable({
  providedIn: 'root'
})
export class SocieteService {



  constructor(
   // private userService:UserService,
    private societeService:Gmsscapiv1societesService
  ) { }
  enregistrerSociete(societeDto:SocieteDto) : Observable<SocieteDto>{
    console.log("we are here", societeDto);

    return this.societeService.saveSociete(societeDto);
  }
  findAll():Observable<SocieteDto[]>{
    return this.societeService.getListeDesSocietes();
  }
  findAllfilterByTypeMaintenance():Observable<SocieteDto[]>{
    return this.societeService.getListeDesSocietesfilterbysocietemaintenance();
  }
  findAllorder():Observable<SocieteDto[]>{
    return this.societeService.getListeDesSocietesOrderByAsc();
  }
  findSocieteById(idSociete?:number):Observable<SocieteDto>{
    if(idSociete){
      return this.societeService.getSocieteByID(idSociete);
    }
    return of();
  }
  deleteSociete(idSociete?:number):Observable<any>{
    if(idSociete){
      return this.societeService.deleteSocieteById(idSociete);
    }
    return of();
  }
}
