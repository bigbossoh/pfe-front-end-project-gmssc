import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BienImmobilierService } from '../../../services/bien-immobilier/bien-immobilier.service';
import { PieceService } from '../../../services/piece/piece.service';

import { BienImmobilierDto } from '../../../../gs-api/src/models/bien-immobilier-dto';
import { PiecesDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-page-nouvelle-piece',
  templateUrl: './page-nouvelle-piece.component.html',
  styleUrls: ['./page-nouvelle-piece.component.css']
})
export class PageNouvellePieceComponent implements OnInit {

  pieceDto:PiecesDto={};
  bienImmoDto:BienImmobilierDto={};
  listeBienImmoDto:Array<BienImmobilierDto>=[];
  errorMsg: Array<string> = [];
  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private BienImmoService:BienImmobilierService,
    private pieceService:PieceService
  ) { }

  ngOnInit(): void {
    this.findAllBienImmo()
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
  this.router.navigate(['listedespieces'])
}
enregistrerPiece():void{
  this.pieceDto.bienImmobilierDto=this.bienImmoDto;
  console.log(this.pieceDto);

  this.pieceService.savePiece(this.pieceDto)
  .subscribe(piece=>{
    this.router.navigate(['listedespieces'])
  },
  error=>{
    this.errorMsg=error.error.errors;

  });
}

}
