import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions = {};

  @Input() data = [{
    name: 'Intervenants',
    y: 11.41,
    sliced: true,
    selected: true
  }, {
    name: 'Utilisateurs',
    y: 21.84
  }, {
    name: 'Biens',
    y: 30.85
  }, {
    name: 'Pieces',
    y: 14.67
  }, {
    name: 'Equipements',
    y: 14.18
  }, {
    name: 'Corrective',
    y: 1.64
  }, {
    name: 'Preventive',
    y: 1.6
  }, {
    name: 'Panne',
    y: 1.2
  }, {
    name: 'Société',
    y: 2.61
  }];
  constructor() {

  }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Statistique générale'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },
      exporting: {
        enabled: true
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: this.data
      }]
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
