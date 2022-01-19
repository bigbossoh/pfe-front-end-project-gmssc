import { Injectable } from '@angular/core';
import { BienImmobilierDto } from 'src/gs-api/src/models';

import { Observable, of } from 'rxjs';
import { Gmsscapiv1biensService } from 'src/gs-api/src/services';



@Injectable({
  providedIn: 'root'
})
export class BienImmobilierService {

  constructor(
    private bienimmoService:Gmsscapiv1biensService
  ) { }
  saveBienImmobilier(bienImmo:BienImmobilierDto):Observable<BienImmobilierDto>{
    return this.bienimmoService.saveBienImmobilier(bienImmo);
  }
  findAll():Observable<BienImmobilierDto[]>{
    return this.bienimmoService.getAllBien();
  }
  findBienImmoById(idBienImmo?:number):Observable<BienImmobilierDto>{
    if(idBienImmo){
      return this.bienimmoService.getBienByID(idBienImmo);
    }
    return of();
  }
  deleteBienImmobilier(idBienImmo?:number):Observable<any>{
    if(idBienImmo){
      return this.bienimmoService.deleteBienById(idBienImmo);
    }
    return of();
  }
}
