import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gmsscapiv1signalerPanneService } from 'src/gs-api/src/services';
import { SignalerPanneDto } from '../../../gs-api/src/models/signaler-panne-dto';

@Injectable({
  providedIn: 'root'
})
export class SignalerpanneService {

  constructor(
    private signalerPanneService:Gmsscapiv1signalerPanneService
  ) { }

  saveSignalerpanne(signalerPanneDto:SignalerPanneDto):Observable<SignalerPanneDto>{
    return this.signalerPanneService.saveSignalerPanne(signalerPanneDto);
  }
  findAllOrder():Observable<SignalerPanneDto[]>{
    return this.signalerPanneService.getAllSignalerPanneOrderByDate();
  }
  deleteSignalePanne(idSignalePanne:number):Observable<any>{
    return this.signalerPanneService.deleteSignalerPanneById(idSignalePanne);
  }
  getSignalerPane(idSignalePanne:number):Observable<SignalerPanneDto>{
    return this.signalerPanneService.getSignalerPanneDto(idSignalePanne);
  }
}
