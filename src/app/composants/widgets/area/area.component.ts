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
    exporting:{
      enabled:true
    },
    series: [
      {
        name:'Nombre de pièces par batiment',
      data: [10,56,16],
      type: 'area'
     },
     {
      data: [4, 2, 6],
      type: 'area'
     }
    ,
    {
     data: [14, 1, 62],
     type: 'area'
    }

]

  };





  constructor() { }

  ngOnInit(): void {

  }

}
