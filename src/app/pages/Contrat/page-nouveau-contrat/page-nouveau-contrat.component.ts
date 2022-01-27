import { Component, OnInit } from '@angular/core';


import { ContratService } from '../../../services/contrat/contrat.service';
import { EquipementService } from '../../../services/equipement/equipement.service';
import { PieceService } from '../../../services/piece/piece.service';
import { SocieteService } from '../../../services/societe/societe.service';
import { BienImmobilierService } from '../../../services/bien-immobilier/bien-immobilier.service';
import { Router } from '@angular/router';
import { ContratDto } from '../../../../gs-api/src/models/contrat-dto';
import { BienImmobilierDto, EquipementDto, SocieteDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-page-nouveau-contrat',
  templateUrl: './page-nouveau-contrat.component.html',
  styleUrls: ['./page-nouveau-contrat.component.css']
})
export class PageNouveauContratComponent implements OnInit {
  listSociete:Array<SocieteDto>=[];
  listeSocietePrincipale:Array<SocieteDto>=[];
  listeBienImmobier:Array<BienImmobilierDto>=[]
  bien:BienImmobilierDto={};
  sociereDto:SocieteDto={};
  soccietefiltre:SocieteDto={};
  sociereDtofiltrer:SocieteDto={};
  listEquipements:Array<EquipementDto>=[];
  equipement:EquipementDto={};
  contratDto:ContratDto={};
  errorMsg: Array<string> = [];



  constructor(
    private contratService:ContratService,
    private equipementService:EquipementService,
    private pieceService: PieceService,
    private bienImmo:BienImmobilierService,
    private router:Router,
    private societeService:SocieteService
  ) { }

  ngOnInit(): void {
    this.findallSociete()
    this.findAllSocietesprincipale()
  }
  findallSociete():void{
    this.societeService.findAllfilterByTypeMaintenance()
    .subscribe(data=>{
      console.log("we are here");

      this.listSociete=data;
    })

  }
  findAllSocietesprincipale():void{
    this.societeService.findAllorder()
    .subscribe(resp=>{
      this.listeSocietePrincipale=resp.filter(function(soc: SocieteDto){
        return soc.societeMaintenance===false
      });
    });
  }

  OnChangefindAllEquipement(idSoc:number):void{

    this.equipementService.findAllEquipementBySociete(idSoc)
    .subscribe(resp=>{
      this.listEquipements=resp
    });
  }
  cancel(): void {
    this.router.navigate(['bienimmobilier'])
  }

  saveContrat():void{
    this.contratDto.societeDto=this.soccietefiltre
    this.contratDto.equipementDtos=this.listEquipements
    console.log(this.contratDto);


    this.contratService.saveContrat(this.contratDto).subscribe(contrat=>{
      this.router.navigate(['listescontrats'])

    },
    error=>{
      this.errorMsg=error.error.errors;

    });

  }
}
