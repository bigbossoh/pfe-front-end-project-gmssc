import { Component, Input, OnInit } from '@angular/core';
import { BienImmobilierDto, PiecesDto, SignalerPanneDto, UtilisateurDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-detail-groupe-intervention',
  templateUrl: './detail-groupe-intervention.component.html',
  styleUrls: ['./detail-groupe-intervention.component.css']
})
export class DetailGroupeInterventionComponent implements OnInit {
  @Input()
  signalePanneDto:SignalerPanneDto={}
  utilisateurDto:UtilisateurDto={}
  pieceDto:PiecesDto={}
  bienDto:BienImmobilierDto={}
  constructor() { }

  ngOnInit(): void {
  }

}
