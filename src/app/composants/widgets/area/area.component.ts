import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    credits:{
      enabled:false
    },
    title: {
      text: 'Statistique par bien immobilier'
    },
    exporting:{
      enabled:true
    },
    series: [
      {
        name:'Nombre de pièces par batiment',
      data: [13,36,16],
      type: 'area'
     },
     {
      name:'Nombre de maintenance par batiment',
      data: [11, 32, 12],
      type: 'area'
     }
    ,
    {
      name:'Suivie des equipements par batiment ',
     data: [2, 11, 41],
     type: 'area'
    }

]

  };





  constructor() { }

  ngOnInit(): void {

  }

}
