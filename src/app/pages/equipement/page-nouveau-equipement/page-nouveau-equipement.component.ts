import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PieceService } from 'src/app/services/piece/piece.service';
import { BienImmobilierService } from '../../../services/bien-immobilier/bien-immobilier.service';
import { EquipementService } from 'src/app/services/equipement/equipement.service';
import { EquipementPieceService } from '../../../services/equipement-piece/equipement-piece.service';
import { SocieteService } from '../../../services/societe/societe.service';
import { BienImmobilierDto, EquipementDto, PieceEquipementDto, PiecesDto, SocieteDto } from 'src/gs-api/src/models';


@Component({
  selector: 'app-page-nouveau-equipement',
  templateUrl: './page-nouveau-equipement.component.html',
  styleUrls: ['./page-nouveau-equipement.component.css']
})
export class PageNouveauEquipementComponent implements OnInit {

  equipementDto:EquipementDto={};
 
  savedEqptDto:EquipementDto={};
  pieceEquipementDto:PieceEquipementDto={};
  listeSocietePrincipale:Array<SocieteDto>=[];
  societeDto:SocieteDto={};
  pieceDto:PiecesDto={};
   listePieceDto:Array<PiecesDto>=[];
   BienDto:BienImmobilierDto={};
   listeBienDto:Array<BienImmobilierDto>=[];
  errorMsg: Array<string> = [];


  constructor(
    private router:Router,
    private socService:SocieteService,
    private activatedRoute:ActivatedRoute,
    private pieceService:PieceService,
    private bienService:BienImmobilierService,
    private pieceEquipementService:EquipementPieceService,
    private equipementService:EquipementService
  ) { }

  ngOnInit(): void {

    this.findAllBien()
    this.findAllSocietesprincipale()
   // this.findAllPiece()
  }

  findAllPiece():void{
  this.pieceService.findAllPieces()
  .subscribe(listPieces=>{
    this.listePieceDto=listPieces;
  },error=>{
    console.log(error.error.errors);

  });
}
findAllBien():void{
  this.bienService.findAll()
  .subscribe(listBien=>{
    this.listeBienDto=listBien;
  },error=>{
    console.log(error.error.errors);

  });
}
cancel(): void {
  this.router.navigate(['listeequipement'])
}
saveEquipement():void{

  this.equipementDto.societeDto=this.societeDto
  console.log("ici on a notre equipement ",this.equipementDto);

  this.equipementService.saveEquipement(this.equipementDto)
  .subscribe(inter=>{

    this.savedEqptDto=inter;
    this.savePieceEquipement();
    this.router.navigate(['listeequipement'])
  },
  error=>{
    this.errorMsg=error.error.errors;

  });
}
savePieceEquipement():void{
  this.pieceEquipementDto.equipementDto= this.savedEqptDto;
  this.pieceEquipementDto.piecesDto=this.pieceDto
  this.pieceEquipementService.savePieceEqpmnt(this.pieceEquipementDto)
  .subscribe(data=>{
  })
}
onChangeBienImmobilier(idBien:number):void{
  if(idBien){
    this.pieceService.findAllPieceByBien(idBien).subscribe(
      listPiesce=>{
        this.listePieceDto=listPiesce;
        console.log("les valeurs apres changement ",this.listePieceDto);
      }
    )
    }
  }

  findAllSocietesprincipale():void{
    this.socService.findAllorder()
    .subscribe(resp=>{
      this.listeSocietePrincipale=resp.filter(function(soc: SocieteDto){
        return soc.societeMaintenance===false
      });
    });
  }

}
