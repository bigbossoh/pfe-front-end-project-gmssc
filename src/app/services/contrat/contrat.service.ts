import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gmsscapiv1contratsService } from 'src/gs-api/src/services';
import { ContratDto } from '../../../gs-api/src/models/contrat-dto';


@Injectable({
  providedIn: 'root'
})
export class ContratService {


  constructor(
    private contratService: Gmsscapiv1contratsService
  ) { }
  saveContrat(contart:ContratDto):Observable<ContratDto>{
    return this.contratService.saveContrat(contart);
  }
  findAll():Observable<ContratDto[]>{
    return this.contratService.getAllContrat();
  }
}
