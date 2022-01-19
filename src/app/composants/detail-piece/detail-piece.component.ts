import { Component, Input, OnInit } from '@angular/core';
import { PiecesDto } from '../../../gs-api/src/models/pieces-dto';

@Component({
  selector: 'app-detail-piece',
  templateUrl: './detail-piece.component.html',
  styleUrls: ['./detail-piece.component.css']
})
export class DetailPieceComponent implements OnInit {
  @Input()
  listePiece: PiecesDto= {};
  constructor() { }

  ngOnInit(): void {
  }

}
