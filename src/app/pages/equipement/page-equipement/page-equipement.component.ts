import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EquipementDto } from '../../../../gs-api/src/models/equipement-dto';
import { EquipementService } from '../../../services/equipement/equipement.service';
import { PiecesDto } from '../../../../gs-api/src/models/pieces-dto';
import { PieceService } from '../../../services/piece/piece.service';

@Component({
  selector: 'app-page-equipement',
  templateUrl: './page-equipement.component.html',
  styleUrls: ['./page-equipement.component.css']
})
export class PageEquipementComponent implements OnInit {

  listeEqpmt: Array<EquipementDto>=[];
  pieceDto:PiecesDto={}
  totalLigne:number=0;
  page:number=1;
  errorMsg='';
  constructor(
    private router:Router,
    private pieceService:PieceService,
    private eqpmtService:EquipementService
  ) { }

  ngOnInit(): void {
    this.findAllEquipement();
  }
  findAllEquipement():void{
    this.eqpmtService.findAllEquipement()
    .subscribe(data=>{
      this.listeEqpmt=data;
      this.totalLigne=this.listeEqpmt.length
    });
  }
  nouveauEquipement():void{
    this.router.navigate(['nouvelleequipement'])
  }
}
