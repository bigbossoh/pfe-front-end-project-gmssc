import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BienImmobilierService } from 'src/app/services/bien-immobilier/bien-immobilier.service';
import { PieceService } from 'src/app/services/piece/piece.service';

import { SignalerpanneService } from '../../../services/signalerpanne/signalerpanne.service';

import { UserService } from 'src/app/services/user/user.service';
import { SocieteService } from '../../../services/societe/societe.service';

import { IntervenantService } from '../../../services/intervenant/intervenant.service';
import { BienImmobilierDto, IntervenantDto, PiecesDto, SignalerPanneDto, SocieteDto, UtilisateurDto } from 'src/gs-api/src/models';
//import { BienImmobilierDto, IntervenantDto, PiecesDto, SignalerPanneDto, SocieteDto, UtilisateurDto } from 'src/gs-api/src/models';


@Component({
  selector: 'app-page-nouvelle-intervention',
  templateUrl: './page-nouvelle-intervention.component.html',
  styleUrls: ['./page-nouvelle-intervention.component.css']
})
export class PageNouvelleInterventionComponent implements OnInit {

  pieceDto:PiecesDto={};
  signalerpanneDto:SignalerPanneDto={};
  listePieceDto:Array<PiecesDto>=[];
  listeSocietePrincipale:Array<SocieteDto>=[];
  societeDto:SocieteDto={}
  connectedUser:UtilisateurDto ={};
  bienImmoDto:BienImmobilierDto={};
  interv:IntervenantDto={};
  listeBienImmoDto:Array<BienImmobilierDto>=[];
  listeIntervenant:Array<IntervenantDto>=[];
  errorMsg: Array<string> = [];
  constructor(
    private router:Router,
    private societeService: SocieteService,
    private intervService: IntervenantService,
    private userService: UserService,
    private activatedRoute:ActivatedRoute,
    private BienImmoService:BienImmobilierService,
    private pieceService:PieceService,
    private signalerPanneService:SignalerpanneService
  ) { }

  ngOnInit(): void {
    this.findAllBienImmo(),
    this.chargeUtilisateurConnecter(),
    this.findAllSocietesprincipale()
  }
  chargeUtilisateurConnecter():void{
    this.connectedUser=this.userService.getConnectedUser();
  }
  saveSignalerPanne():void{
    this.signalerpanneDto.piecesDto= this.pieceDto;
    this.signalerpanneDto.utilisateurDto=this.connectedUser
    this.signalerpanneDto.objetPanne="MAINTENANCE CORRECTIVE"
    this.signalerpanneDto.etatSignalerPanne="En panne"
    this.signalerpanneDto.intervenantDto=this.interv

    //console.log(this.signalerpanneDto);

    this.signalerPanneService.saveSignalerpanne(this.signalerpanneDto)
    .subscribe(data=>{
      console.log("signaler panne saved !!!", data);
      this.router.navigate(['listeintervention'])
    },
    error=>{
      this.errorMsg=error.error.errors;

    });
  }
  findAllSocietesprincipale():void{
    this.societeService.findAllorder()
    .subscribe(resp=>{
      this.listeSocietePrincipale=resp.filter(function(soc: SocieteDto){
        return soc.societeMaintenance===true
      });
    });
  }
  findAllBienImmo():void{
  this.BienImmoService.findAll()
  .subscribe(listBienImmo=>{
    this.listeBienImmoDto=listBienImmo;
  },error=>{
    console.log(error.error.errors);

  });
}
cancel(): void {
  this.router.navigate(['listeintervention'])
}
onChangeBienImmobilier(idBien:number):void{
  if(idBien){
    this.pieceService.findAllPieceByBien(idBien).subscribe(
      listPiesce=>{
        this.listePieceDto=listPiesce;
      }
    )
    }
  }
  onChangeIntervenant(idSociete:string):void{
    if(idSociete){
      this.intervService.findAllIntervenantByResponsable("Responsable")
      .subscribe(
        listPiesce=>{
          console.log("We are going the sort ",listPiesce);

          this.listeIntervenant=listPiesce;
        }
      )
      }
    }
}
// this.listeSocietePrincipale=resp.filter(function(soc: SocieteDto){
//   return soc.societeMaintenance===true
// });
// });
