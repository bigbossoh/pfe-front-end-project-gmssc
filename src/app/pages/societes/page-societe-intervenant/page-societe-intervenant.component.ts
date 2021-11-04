import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-societe-intervenant',
  templateUrl: './page-societe-intervenant.component.html',
  styleUrls: ['./page-societe-intervenant.component.css']
})
export class PageSocieteIntervenantComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  nouveauIntervenant():void{
    this.router.navigate(['nouveauintervenant']);
  }
}
