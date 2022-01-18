import { Component, Input, OnInit } from '@angular/core';
import { IntervenantDto } from 'src/gs-api/src/models';


@Component({
  selector: 'app-detail-intervenant-societe',
  templateUrl: './detail-intervenant-societe.component.html',
  styleUrls: ['./detail-intervenant-societe.component.css']
})
export class DetailIntervenantSocieteComponent implements OnInit {
  @Input()
  listeIntervenant: IntervenantDto= {};

  constructor() { }

  ngOnInit(): void {
  }

}
