import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gmsscapiv1utilisateursService } from 'src/gs-api/src/services';


import { UtilisateurDto } from '../../../gs-api/src/models/utilisateur-dto';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(
    private utilisateurService:Gmsscapiv1utilisateursService
  ) { }
  sinscrire(utilisateurDto:UtilisateurDto):Observable<UtilisateurDto>{
    return this.utilisateurService.save(utilisateurDto);
  }
  findAll():Observable<UtilisateurDto[]>{
    return this.utilisateurService.getListeDesUtilisateurs();
  }
}
