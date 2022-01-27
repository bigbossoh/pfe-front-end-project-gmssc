import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignalerPanneDto } from 'src/gs-api/src/models';
import { SignalerpanneService } from '../../../services/signalerpanne/signalerpanne.service';

@Component({
  selector: 'app-page-intervention',
  templateUrl: './page-intervention.component.html',
  styleUrls: ['./page-intervention.component.css']
})
export class PageInterventionComponent implements OnInit {
  listSignalePanne:Array<SignalerPanneDto>=[]
  constructor(
    private router:Router,
    private SigpanService:SignalerpanneService
  ) { }

  ngOnInit(): void {
    this.findAll()
  }
  nouvelleIntervention():void{
    this.router.navigate(['nouvelleintervention']);
  }
  findAll():void{
    this.SigpanService.findAllOrder()
  .subscribe(data=>{
    this.listSignalePanne=data;
  })  }
}
