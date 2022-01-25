import { Component, Input, OnInit } from '@angular/core';
import { EquipementPieceService } from 'src/app/services/equipement-piece/equipement-piece.service';
import { PieceEquipementDto } from 'src/gs-api/src/models';
import { EquipementDto } from '../../../gs-api/src/models/equipement-dto';
import { PieceService } from '../../services/piece/piece.service';

@Component({
  selector: 'app-detail-equipement',
  templateUrl: './detail-equipement.component.html',
  styleUrls: ['./detail-equipement.component.css']
})
export class DetailEquipementComponent implements OnInit {
  @Input()
  eqpmtDto:EquipementDto={}

  pieceDto:PieceEquipementDto={}
  listePieceEquipeDto:Array<PieceEquipementDto>=[]
  mapLignesPieces = new Map();

  constructor(
    private pieceEquipementService : EquipementPieceService,
    private pieceService : PieceService
  ) { }

  ngOnInit(): void {

   // console.log("equipe input ",this.eqpmtDto);
    this.findPieceEquipement(this.eqpmtDto.id)

  }

  findPieceEquipement(idEquipement?:number):void{
    if(idEquipement)
    this.pieceEquipementService.findAllPicesEquipementByEquipement(idEquipement)
    .subscribe(list => {
      this.mapLignesPieces.set(idEquipement, list);
      this.listePieceEquipeDto=list;
      //console.log("la liste de chaque piece equipement ",this.listePieceEquipeDto);

    });
  }

}
