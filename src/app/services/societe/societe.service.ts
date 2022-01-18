import { Injectable } from '@angular/core';

// import { UserService } from '../user/user.service';
import { SocieteDto } from '../../../gs-api/src/models/societe-dto';
import { Observable, of } from 'rxjs';
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
