import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gmsscapiv1utilisateurGroupeIntervenantService } from 'src/gs-api/src/services';
import { IntervenantGroupeIntervenantDto } from '../../../gs-api/src/models/intervenant-groupe-intervenant-dto';

@Injectable({
  providedIn: 'root'
})
export class IntervenantGroupeInterventionService {

  constructor(
    private intervenantGrpeIntervention:Gmsscapiv1utilisateurGroupeIntervenantService
  ) { }
  saveIntervenantGroupeIntervention(intervenantGrpeIntervention: IntervenantGroupeIntervenantDto):
  Observable<IntervenantGroupeIntervenantDto>{
    return this.intervenantGrpeIntervention.saveUtilisateurGroupeIntervenant(intervenantGrpeIntervention);
  }
  findAllIntervenantGrpeIntervention():Observable<IntervenantGroupeIntervenantDto[]>{
    return this.intervenantGrpeIntervention.getAllUtilisateurGroupeIntervenant();
  }
}
