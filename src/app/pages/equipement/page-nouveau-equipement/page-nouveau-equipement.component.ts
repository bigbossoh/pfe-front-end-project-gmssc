import { Component, OnInit } from '@angular/core';
import { EquipementDto } from '../../../../gs-api/src/models/equipement-dto';
import { PiecesDto } from '../../../../gs-api/src/models/pieces-dto';
import { BienImmobilierDto } from '../../../../gs-api/src/models/bien-immobilier-dto';
import { ActivatedRoute, Router } from '@angular/router';
import { PieceService } from 'src/app/services/piece/piece.service';
import { BienImmobilierService } from '../../../services/bien-immobilier/bien-immobilier.service';
import { EquipementService } from 'src/app/services/equipement/equipement.service';
import { EquipementPieceService } from '../../../services/equipement-piece/equipement-piece.service';
import { PieceEquipementDto } from '../../../../gs-api/src/models/piece-equipement-dto';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-page-nouveau-equipement',
  templateUrl: './page-nouveau-equipement.component.html',
  styleUrls: ['./page-nouveau-equipement.component.css']
})
export class PageNouveauEquipementComponent implements OnInit {

  equipementDto:EquipementDto={};
  savedEqptDto:EquipementDto={};
  pieceEquipementDto:PieceEquipementDto={}
  pieceDto:PiecesDto={};
   listePieceDto:Array<PiecesDto>=[];
   BienDto:BienImmobilierDto={};
   listeBienDto:Array<BienImmobilierDto>=[];
  errorMsg: Array<string> = [];


  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private pieceService:PieceService,
    private bienService:BienImmobilierService,
    private pieceEquipementService:EquipementPieceService,
    private equipementService:EquipementService
  ) { }

  ngOnInit(): void {

    this.findAllBien()

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
  // this.equipementService.societeDto=this.sociereDto;

  //console.log("SAVING SHOW ....We are in the new equipment ...",this.equipementDto);
  this.equipementService.saveEquipement(this.equipementDto)
  .subscribe(inter=>{
    //console.log("the new object of equipement is ....",inter);
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

  //console.log("We going to save pice equipement",this.pieceEquipementDto);
  this.pieceEquipementService.savePieceEqpmnt(this.pieceEquipementDto)
  .subscribe(data=>{
    //console.log("pieceeQuipement saved !!!");

  })

}
onChangeBienImmobilier(idBien:number):void{
  if(idBien){
    console.log("onchange",idBien);

    this.pieceService.findAllPieceByBien(idBien).subscribe(
      listPiesce=>{
        this.listePieceDto=listPiesce;
        console.log("les valeurs apres changement ",this.listePieceDto);
      }
    )

    }
  }


}
