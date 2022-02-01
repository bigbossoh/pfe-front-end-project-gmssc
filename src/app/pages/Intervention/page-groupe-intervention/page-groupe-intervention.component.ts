import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignalerPanneDto } from '../../../../gs-api/src/models/signaler-panne-dto';
import { GroupeIntervenantDto } from '../../../../gs-api/src/models/groupe-intervenant-dto';
import { SignalerpanneService } from '../../../services/signalerpanne/signalerpanne.service';
import { GroupeInterventionService } from '../../../services/groupe-intervention/groupe-intervention.service';

@Component({
  selector: 'app-page-groupe-intervention',
  templateUrl: './page-groupe-intervention.component.html',
  styleUrls: ['./page-groupe-intervention.component.css']
})
export class PageGroupeInterventionComponent implements OnInit {

ListeSignalePanne: Array<SignalerPanneDto>=[];
  listeGroupeInterventions: Array<GroupeIntervenantDto> = [];
  mapLignesGroupeIntervention = new Map();
  totalLigne:number=0;
  page:number=1;
  errorMsg='';
  constructor(
    private router:Router,
    private signalePanneService:SignalerpanneService,
    private groupeInterventionService:GroupeInterventionService
  ) { }

  ngOnInit(): void {
    this.findAll();
  }
  nouvelleGroupeIntervention():void{
    console.log("im here");

    this.router.navigate(['nouveaugroupeintervention']);
  }
  findAll():void{
    this.groupeInterventionService.findAllGroupeIntervenant()
  .subscribe(data=>{
    this.listeGroupeInterventions=data;
    this.totalLigne=this.listeGroupeInterventions.length
   })  }
}
