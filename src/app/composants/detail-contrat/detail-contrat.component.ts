import { Component, Input, OnInit } from '@angular/core';
import { ContratDto } from '../../../gs-api/src/models/contrat-dto';

@Component({
  selector: 'app-detail-contrat',
  templateUrl: './detail-contrat.component.html',
  styleUrls: ['./detail-contrat.component.css']
})
export class DetailContratComponent implements OnInit {
  @Input()
  contratDto:ContratDto={}
  constructor() { }

  ngOnInit(): void {
  }

}
