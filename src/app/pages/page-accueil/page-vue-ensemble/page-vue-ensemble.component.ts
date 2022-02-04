import { Component, OnInit } from '@angular/core';
import { IntervenantService } from '../../../services/intervenant/intervenant.service';
import { IntervenantDto } from '../../../../gs-api/src/models/intervenant-dto';
import { UtilisateurService } from '../../../services/utilisateur/utilisateur.service';
import { BienImmobilierService } from '../../../services/bien-immobilier/bien-immobilier.service';
import { PieceService } from '../../../services/piece/piece.service';
import { EquipementService } from '../../../services/equipement/equipement.service';
import { SignalerpanneService } from '../../../services/signalerpanne/signalerpanne.service';

@Component({
  selector: 'app-page-vue-ensemble',
  templateUrl: './page-vue-ensemble.component.html',
  styleUrls: ['./page-vue-ensemble.component.css']
})
export class PageVueEnsembleComponent implements OnInit {
  ListeIntervenant:Array<IntervenantDto>=[]
  listeTOUTUser:number=0;
  totalUtilisateur=20;
  totalBiens:number=6;
  totalPieces:number=70;
  totalBien_s:number=0;
  PrcentagePiece:number=0;
  totieces:number=0
  totalequipement:number=250;
  totquipement:number=0;
  prcentagetotquipement:number=0;
  totsignal:number=0
  PrcentageBiens:number=0
  constructor(
    private intervenantService:IntervenantService,
    private userService:UtilisateurService,
    private bienService:BienImmobilierService,
    private pieceService:PieceService,
    private equipService:EquipementService,
    private signaServiec:SignalerpanneService
  ) { }

  ngOnInit(): void {
    // console.log("we are here");

     this. listeDesIntervenants()
    // this.findAllUtlisateur()
     this.findAllBien()
     this.findAllPiece()
    this.findAllEquipement()
    this.findAllSignalement()
  }
  listeDesIntervenants():void {
    this.intervenantService.findAllIntervenant().subscribe(
      data=>{
        this.ListeIntervenant=data;
      }
    )
  }
  // findAllUtlisateur():void {
  //   this.userService.findAll().subscribe(
  //     data=>{
  //       this.listeTOUTUser=data.length;
  //     }
  //   )
  // }
  findAllBien():void {
    this.bienService.findAll().subscribe(
      data=>{
        this.totalBien_s=data.length;
        if(this.totalBiens){
        this.PrcentageBiens=((data.length)*100)/this.totalBiens
      }
       // console.log("we are here ",data)
      }
    )
  }
  findAllPiece():void{
    this.pieceService.findAllPieces().subscribe(
      data=>{
        this.totieces=data.length;
        if(this.totalPieces){

          this.PrcentagePiece=((data.length)*100)/this.totalPieces
        }
       // this.PrcentagePiece=((data.length)*100)/this.totalPieces
      }
    )
  }
  findAllEquipement():void{
    this.equipService.findAllEquipement().subscribe(
      data=>{
        this.totquipement=data.length;
        if(this.totalequipement){

          this.prcentagetotquipement=((data.length)*100)/this.totalequipement
        }
      }
    )
  }
  findAllSignalement():void{
    this.signaServiec.findAllOrder().subscribe(
      data=>{
        this.totsignal=data.length;
       //console.log("we are here ",data)
      }
    )
  }
}
