import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BienImmobilierService } from 'src/app/services/bien-immobilier/bien-immobilier.service';
import { BienImmobilierDto } from 'src/gs-api/src/models';
import { PiecesDto } from '../../../../gs-api/src/models/pieces-dto';
import { PieceService } from '../../../services/piece/piece.service';

@Component({
  selector: 'app-page-bien-piece',
  templateUrl: './page-bien-piece.component.html',
  styleUrls: ['./page-bien-piece.component.css']
})
export class PageBienPieceComponent implements OnInit {
  listeBienImmo: Array<BienImmobilierDto>=[];
  listePieces: Array<PiecesDto> = [];
  mapLignesPieces = new Map();
  totalLigne:number=0;
  page:number=1;
  errorMsg='';
  constructor(
    private router:Router,
    private bienImmoService:BienImmobilierService,
    private PieceService:PieceService
  ) { }

  ngOnInit(): void {
    this.findAllBienImmobiliers()
  }
  nouvellePiece():void{
  this.router.navigate(['nouvellePiece'])
  }
  findAllBienImmobiliers():void{
    this.bienImmoService.findAll()
    .subscribe(resp=>{
      this.listeBienImmo=resp;
      this.totalLigne=this.listeBienImmo.length
      this.findAllPieceByBien();
    });
  }
  findAllPieceByBien(): void {
    this.listeBienImmo.forEach(bien => {
      this.findPiece(bien.id);
    });
  }
  findPiece(idBien?: number): void {
      this.PieceService.findAllPieceByBien(idBien)
      .subscribe(list => {
        this.mapLignesPieces.set(idBien, list);
      });

  }
}
