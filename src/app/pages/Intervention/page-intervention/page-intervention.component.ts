import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-intervention',
  templateUrl: './page-intervention.component.html',
  styleUrls: ['./page-intervention.component.css']
})
export class PageInterventionComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  nouvelleIntervention():void{
    this.router.navigate(['nouvelleintervention']);
  }
}
