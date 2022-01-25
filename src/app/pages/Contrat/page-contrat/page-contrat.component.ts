import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContratService } from '../../../services/contrat/contrat.service';
import { ContratDto } from '../../../../gs-api/src/models/contrat-dto';

@Component({
  selector: 'app-page-contrat',
  templateUrl: './page-contrat.component.html',
  styleUrls: ['./page-contrat.component.css']
})
export class PageContratComponent implements OnInit {
  listeContrats: Array<ContratDto>=[];
  constructor(
    private router:Router,
    private contratService:ContratService
  ) { }

  ngOnInit(): void {
    this.findAllContrats()
  }
  nouveauContrats():void{
  this.router.navigate(['nouveaucontrat']);
  }
  findAllContrats():void{
    this.contratService.findAll()
    .subscribe(resp=>{
      //console.log(resp);

      this.listeContrats=resp;
    });
  }
}
