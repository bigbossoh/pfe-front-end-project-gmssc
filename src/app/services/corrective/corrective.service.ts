import { Injectable } from '@angular/core';
import { Gmsscapiv1interventioncorrectiveService } from 'src/gs-api/src/services';
import { CorrectiveDto } from './../../../gs-api/src/models/corrective-dto';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CorrectiveService {

  constructor(
    private corectionService: Gmsscapiv1interventioncorrectiveService
  ) { }
  saveCorrectiveMaintenance(corrective:CorrectiveDto):Observable<CorrectiveDto>{
    return this.corectionService.saveCorrective(corrective);
  }
  findAll():Observable<CorrectiveDto[]>{
    return this.corectionService.getAllCorrective()
  }
  findAllCorrectiveByIdGroupeIntervention(idGrpeInterv?: number):Observable<CorrectiveDto[]>{

    return this.corectionService.getAllCorrectiveByGrpeInterv(idGrpeInterv!);
  }
}
