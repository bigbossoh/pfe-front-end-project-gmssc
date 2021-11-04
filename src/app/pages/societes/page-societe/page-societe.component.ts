import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-societe',
  templateUrl: './page-societe.component.html',
  styleUrls: ['./page-societe.component.css']
})
export class PageSocieteComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  nouvelleSociete():void{
    this.router.navigate(['nouvellesociete']);
  }
}
