import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContratDto } from 'src/gs-api/src/models';
import { Gmsscapiv1contratsService } from 'src/gs-api/src/services';



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
