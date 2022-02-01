import { Injectable } from '@angular/core';
import { Gmsscapiv1groupeIntervenantService } from 'src/gs-api/src/services';
import { GroupeIntervenantDto } from '../../../gs-api/src/models/groupe-intervenant-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupeInterventionService {

  constructor(
    private groupeinterventionService:Gmsscapiv1groupeIntervenantService
  ) { }
  saveGroupeIntervenant(groupeInterventionDto:GroupeIntervenantDto):
  Observable<GroupeIntervenantDto>{
    return this.groupeinterventionService.saveGroupeIntervenant(groupeInterventionDto);
  }
  findAllGroupeIntervenant():Observable<GroupeIntervenantDto[]>{
    return this.groupeinterventionService.getGroupeIntervenant();
  }
}
