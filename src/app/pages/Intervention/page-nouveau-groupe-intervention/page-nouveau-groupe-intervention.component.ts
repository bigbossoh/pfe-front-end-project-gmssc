import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignalerPanneDto } from 'src/gs-api/src/models';
import { SignalerpanneService } from '../../../services/signalerpanne/signalerpanne.service';
import { GroupeIntervenantDto } from '../../../../gs-api/src/models/groupe-intervenant-dto';
import { GroupeInterventionService } from '../../../services/groupe-intervention/groupe-intervention.service';
import { IntervenantGroupeInterventionService } from '../../../services/intervenant-groupe-intervention/intervenant-groupe-intervention.service';
import { IntervenantGroupeIntervenantDto } from '../../../../gs-api/src/models/intervenant-groupe-intervenant-dto';
import { IntervenantService } from '../../../services/intervenant/intervenant.service';
import { IntervenantDto } from '../../../../gs-api/src/models/intervenant-dto';

@Component({
  selector: 'app-page-nouveau-groupe-intervention',
  templateUrl: './page-nouveau-groupe-intervention.component.html',
  styleUrls: ['./page-nouveau-groupe-intervention.component.css']
})
export class PageNouveauGroupeInterventionComponent implements OnInit {
  ListeSignalerPanneDto:Array<SignalerPanneDto>=[]
  ListeIntervenant:Array<IntervenantDto>=[]
  intervenantDto:IntervenantDto={}
  signalerpanneDto:SignalerPanneDto={};
  groupeIntervenantDto:GroupeIntervenantDto={};
  groupeIntervenantDtoSaved:GroupeIntervenantDto={};
  IntervenantGroupeIntervenantDto:IntervenantGroupeIntervenantDto={};
  errorMsg: Array<string> = [];
  constructor(
    private router:Router,
    private signalerpanneService:SignalerpanneService,
    private groupeInterventionService:GroupeInterventionService,
    private IntervenantService:IntervenantService,
    private intervenantGrpeIntervtionService: IntervenantGroupeInterventionService
  ) { }

  ngOnInit(): void {
     this.findAllSignalerPanne()
     this.getListeIntervenant()
  }
  cancel(): void {
    this.router.navigate(['listegroupeintervention'])
  }
  findAllSignalerPanne():void{
    this.signalerpanneService.findAllOrder().subscribe(
      data=>{
        this.ListeSignalerPanneDto=data;
      }
    )
  }
  saveGroupeIntervention():void{
    this.groupeIntervenantDto.signalerPanneDto=this.signalerpanneDto

    this.groupeInterventionService.saveGroupeIntervenant(this.groupeIntervenantDto).subscribe(
      data=>{
       // console.log("signaler panne saved !!", data);
        this.groupeIntervenantDtoSaved=data
        this.saveIntervenantGroupeIntervention()
        this.router.navigate(['listegroupeintervention'])
    },
    error=>{
      this.errorMsg=error.error.errors;

    });
  }
  saveIntervenantGroupeIntervention():void{
     this.IntervenantGroupeIntervenantDto.groupeIntervenantDto= this.groupeIntervenantDtoSaved

  for (let i = 0; i < this.ListeIntervenant.length; i++) {
    if(this.ListeIntervenant[i].id){
      this.intervenantDto=this.ListeIntervenant[i]
      this.IntervenantGroupeIntervenantDto.intervenantDto=this.intervenantDto
      this.intervenantGrpeIntervtionService.saveIntervenantGroupeIntervention(
        this.IntervenantGroupeIntervenantDto).subscribe(
          data=>{
           // console.log("saved !!!",this.IntervenantGroupeIntervenantDto);
          },
          error=>{
            this.errorMsg=error.error.errors;
          })

    }

  }

  }
  getListeIntervenant():void{
    this.IntervenantService.findAllIntervenantBySociete(5).subscribe(
      data=>{
        this.ListeIntervenant=data;
      }
    )
  }
}
