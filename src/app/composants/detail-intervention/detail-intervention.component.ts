import { Component, Input, OnInit } from '@angular/core';
import { SignalerPanneDto } from '../../../gs-api/src/models/signaler-panne-dto';
import { UtilisateurDto } from '../../../gs-api/src/models/utilisateur-dto';
import { PiecesDto } from '../../../gs-api/src/models/pieces-dto';
import { BienImmobilierDto } from '../../../gs-api/src/models/bien-immobilier-dto';

@Component({
  selector: 'app-detail-intervention',
  templateUrl: './detail-intervention.component.html',
  styleUrls: ['./detail-intervention.component.css']
})
export class DetailInterventionComponent implements OnInit {
  @Input()
  signalePanneDto:SignalerPanneDto={}
  utilisateurDto:UtilisateurDto={}
  pieceDto:PiecesDto={}
  bienDto:BienImmobilierDto={}
  constructor() { }

  ngOnInit(): void {
  }

}
