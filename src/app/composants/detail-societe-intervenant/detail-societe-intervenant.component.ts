import { Component, Input, OnInit } from '@angular/core';
import { SocieteDto } from 'src/gs-api/src/models';
import { IntervenantDto } from '../../../gs-api/src/models/intervenant-dto';
import { IntervenantService } from '../../services/intervenant/intervenant.service';

@Component({
  selector: 'app-detail-societe-intervenant',
  templateUrl: './detail-societe-intervenant.component.html',
  styleUrls: ['./detail-societe-intervenant.component.css']
})
export class DetailSocieteIntervenantComponent implements OnInit {
  @Input()
  set societeDto(societeDto:SocieteDto){
    this._societeDto=societeDto;
  }
  _societeDto:SocieteDto={};
  listIntervenantDto:Array<IntervenantDto>=[]
  constructor(

  ) { }

  ngOnInit(): void {
  }
  // findAllIntervenantBySociete():void{
  //   this.intervenantService.findAllIntervenantBySociete(this._societeDto.id)
  //   .subscribe(resultat=>{
  //     this.listIntervenantDto=resultat;
  //   })
  // }
}
