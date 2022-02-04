import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BienImmobilierService } from 'src/app/services/bien-immobilier/bien-immobilier.service';
import { EquipementPieceService } from 'src/app/services/equipement-piece/equipement-piece.service';
import { EquipementService } from 'src/app/services/equipement/equipement.service';
import { PieceService } from 'src/app/services/piece/piece.service';
import { SocieteService } from 'src/app/services/societe/societe.service';
import { BienImmobilierDto, EquipementDto, PieceEquipementDto, PiecesDto, SocieteDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-page-piece-equipement',
  templateUrl: './page-piece-equipement.component.html',
  styleUrls: ['./page-piece-equipement.component.css']
})
export class PagePieceEquipementComponent implements OnInit {
  equipementDto:EquipementDto={};
  savedEqptDto:EquipementDto={};
  equipementDtoRestored:EquipementDto={};
  pieceEquipementDto:PieceEquipementDto={};
  pieceEquipementDtoRestored:PieceEquipementDto={};
  listepieceEquipementDto:Array<PieceEquipementDto>=[];
  listeSocietePrincipale:Array<SocieteDto>=[];
  societeDto:SocieteDto={};
  pieceDto:PiecesDto={};
   listePieceDto:Array<PiecesDto>=[];
   BienDto:BienImmobilierDto={};
   listeBienDto:Array<BienImmobilierDto>=[];
   idequid:number=0;
  errorMsg: Array<string> = [];


  constructor(
    private router:Router,
    private socService:SocieteService,
    private pieceService:PieceService,
    private bienService:BienImmobilierService,
    private pieceEquipementService:EquipementPieceService,
    private equipementService:EquipementService
  ) { }

  ngOnInit(): void {
    this.findAllBien()
    this.findAllSocietesprincipale()
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
      //  console.log("les valeurs apres changement ",this.listePieceDto);
      }
    )
    }
  }
  onChangePiece(idPiece:number):void{
    if(idPiece){
      this.pieceEquipementService.findAllPicesEquipementByPiece(idPiece).subscribe(
        data=>{
          this.listepieceEquipementDto=data;
          //console.log("les valeurs apres changement ",this.listepieceEquipementDto);
        }
      )
    }
  }
  onChangeEquipmentEquipement(idPieceEquipment:number):void{
    if(idPieceEquipment){
      console.log("idpieceEqupement ", idPieceEquipment);

      this.pieceEquipementService.findPieceEquipementByID(idPieceEquipment).subscribe(
        data=>{
          this.pieceEquipementDtoRestored=data
          this.idequid!= this.pieceEquipementDtoRestored.equipementDto?.id
          this.findEquipementByID(this.idequid)
        }
      )
    }
  }
  findEquipementByID(idEquipment:number):void{
    if(idEquipment){
      this.equipementService.findEquipementById(idEquipment).subscribe(
        data=>{

            this.equipementDtoRestored=data;

        },error=>{
          this.equipementDtoRestored={};
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
