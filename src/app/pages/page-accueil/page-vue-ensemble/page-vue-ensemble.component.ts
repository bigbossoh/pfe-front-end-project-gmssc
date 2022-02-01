import { Component, OnInit } from '@angular/core';
import { IntervenantService } from '../../../services/intervenant/intervenant.service';
import { IntervenantDto } from '../../../../gs-api/src/models/intervenant-dto';

@Component({
  selector: 'app-page-vue-ensemble',
  templateUrl: './page-vue-ensemble.component.html',
  styleUrls: ['./page-vue-ensemble.component.css']
})
export class PageVueEnsembleComponent implements OnInit {
  ListeIntervenant:Array<IntervenantDto>=[]
  constructor(
    private intervenantService:IntervenantService
  ) { }

  ngOnInit(): void {
    this. listeDesIntervenants()
  }
  listeDesIntervenants():void {
    this.intervenantService.findAllIntervenant().subscribe(
      data=>{
        this.ListeIntervenant=data;
      }
    )
  }
}
