import { Component, Input, OnInit } from '@angular/core';
import { EquipementDto } from '../../../gs-api/src/models/equipement-dto';

@Component({
  selector: 'app-detail-equipement',
  templateUrl: './detail-equipement.component.html',
  styleUrls: ['./detail-equipement.component.css']
})
export class DetailEquipementComponent implements OnInit {
  @Input()
  eqpmtDto:EquipementDto={}

  constructor() { }

  ngOnInit(): void {
  }

}
