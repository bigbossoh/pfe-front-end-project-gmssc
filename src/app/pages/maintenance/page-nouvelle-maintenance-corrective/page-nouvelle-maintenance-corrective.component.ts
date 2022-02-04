import { not } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { BienImmobilierDto, IntervenantDto, PiecesDto, SignalerPanneDto, UtilisateurDto } from 'src/gs-api/src/models';
import { IntervenantGroupeIntervenantDto } from '../../../../gs-api/src/models/intervenant-groupe-intervenant-dto';
import { IntervenantGroupeInterventionService } from '../../../services/intervenant-groupe-intervention/intervenant-groupe-intervention.service';
import { UtilisateurService } from '../../../services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-page-nouvelle-maintenance-corrective',
  templateUrl: './page-nouvelle-maintenance-corrective.component.html',
  styleUrls: ['./page-nouvelle-maintenance-corrective.component.css']
})
export class PageNouvelleMaintenanceCorrectiveComponent implements OnInit {
  pieceDto:PiecesDto={};
  signalerpanneDto:SignalerPanneDto={};
  listePieceDto:Array<PiecesDto>=[];
  connectedUser:UtilisateurDto ={};
  bienImmoDto:BienImmobilierDto={};
  interv:IntervenantDto={};
  ListeInterventionGroupeIntervIntervenant:Array<IntervenantGroupeIntervenantDto>=[];
  InterventionGroupeIntervIntervenant:IntervenantGroupeIntervenantDto={};
  listeBienImmoDto:Array<BienImmobilierDto>=[];
  listeIntervenant:Array<IntervenantDto>=[];
  distinct :Array<IntervenantGroupeIntervenantDto>= []
  errorMsg: Array<string> = [];
  constructor(
    private interventionGrpeIntervenatService:IntervenantGroupeInterventionService,
    private userService:UtilisateurService

  ) { }

  ngOnInit(): void {
    this.findAllInterventionGrpeIntervenat()
  }
  findAllInterventionGrpeIntervenat():void{
   this.interventionGrpeIntervenatService.findAllIntervenantGrpeIntervention().subscribe(
     data=>{
      //console.log(data);
       //this.ListeInterventionGroupeIntervIntervenant=data;
       let person = data

       const arrTwo = person.filter((item, index) => person.indexOf(item) == index);
       //console.log(arrTwo);

     }
   )
  }
 
}
