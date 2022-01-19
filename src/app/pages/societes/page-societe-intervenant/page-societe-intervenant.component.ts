import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IntervenantService } from 'src/app/services/intervenant/intervenant.service';
import { SocieteService } from 'src/app/services/societe/societe.service';
import { SocieteDto } from 'src/gs-api/src/models';
import { IntervenantDto } from '../../../../gs-api/src/models/intervenant-dto';

@Component({
  selector: 'app-page-societe-intervenant',
  templateUrl: './page-societe-intervenant.component.html',
  styleUrls: ['./page-societe-intervenant.component.css']
})
export class PageSocieteIntervenantComponent implements OnInit {

  listeSocietes: Array<SocieteDto>=[];
  listeIntervenants: Array<IntervenantDto> = [];
  mapLignesIntervenants = new Map();
  errorMsg='';

  constructor(
    private router:Router,
    private societeService:SocieteService,
    private intervenantService:IntervenantService
  ) { }

  ngOnInit(): void {
    this.findAllSocietes();
  }
  nouveauIntervenant():void{
    this.router.navigate(['nouveauintervenant']);
  }
  findAllSocietes():void{
    this.societeService.findAll()
    .subscribe(resp=>{
      this.listeSocietes=resp;
      this.findAllIntervenantBySociete();
    });
  }
  findAllIntervenantBySociete(): void {
    this.listeSocietes.forEach(societe => {
      this.findIntervenant(societe.id);
    });
  }
  findIntervenant(idSociete?: number): void {
      this.intervenantService.findAllIntervenantBySociete(idSociete)
      .subscribe(list => {
        this.mapLignesIntervenants.set(idSociete, list);
      });

  }
}
