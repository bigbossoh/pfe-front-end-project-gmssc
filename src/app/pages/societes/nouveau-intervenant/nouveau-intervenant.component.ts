import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IntervenantService } from '../../../services/intervenant/intervenant.service';
import { IntervenantDto } from '../../../../gs-api/src/models/intervenant-dto';

import { SocieteService } from '../../../services/societe/societe.service';
import { SocieteDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-nouveau-intervenant',
  templateUrl: './nouveau-intervenant.component.html',
  styleUrls: ['./nouveau-intervenant.component.css']
})
export class NouveauIntervenantComponent implements OnInit {

  intervenant:IntervenantDto={};
  sociereDto:SocieteDto={};
  listeSocieteDto:Array<SocieteDto>=[];
  errorMsg: Array<string> = [];
  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private societeService:SocieteService,
    private interventionService:IntervenantService
  ) { }

  ngOnInit(): void {
    this.findAllSociete()
    }

  findAllSociete():void{
    this.societeService.findAllfilterByTypeMaintenance()
    .subscribe(listsoc=>{
      this.listeSocieteDto=listsoc;
    },error=>{
      console.log(error.error.errors);

    });
  }
  cancel(): void {
    this.router.navigate(['intervenants'])
  }
  enregistrerIntervenant():void{
    this.intervenant.societeDto=this.sociereDto;
    console.log(this.intervenant);

    this.interventionService.eregistrementIntervenant(this.intervenant)
    .subscribe(inter=>{
      this.router.navigate(['intervenants'])
    },
    error=>{
      this.errorMsg=error.error.errors;

    });
  }
}
