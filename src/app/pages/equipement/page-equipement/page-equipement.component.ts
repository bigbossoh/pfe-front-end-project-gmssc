import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-equipement',
  templateUrl: './page-equipement.component.html',
  styleUrls: ['./page-equipement.component.css']
})
export class PageEquipementComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  nouveauEquipement():void{
    this.router.navigate(['nouvelleequipement'])
  }
}
