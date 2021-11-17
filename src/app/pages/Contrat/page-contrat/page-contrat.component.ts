import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-contrat',
  templateUrl: './page-contrat.component.html',
  styleUrls: ['./page-contrat.component.css']
})
export class PageContratComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  nouveauContrats():void{
  this.router.navigate(['nouveaucontrat']);
  }
}
