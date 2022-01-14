import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SocieteService } from 'src/app/services/societe/societe.service';
import { SocieteDto } from 'src/gs-api/src/models';
import { AdresseDto } from '../../../../gs-api/src/models/adresse-dto';

@Component({
  selector: 'app-nouvelle-societe',
  templateUrl: './nouvelle-societe.component.html',
  styleUrls: ['./nouvelle-societe.component.css']
})
export class NouvelleSocieteComponent implements OnInit {

  societeDto:SocieteDto={};
  adressedto: AdresseDto={};
  listeSociete: Array<SocieteDto>=[];
  errorMsg: Array<string> = [];

  constructor(
    private societeService :SocieteService,
    private activatedRoute: ActivatedRoute,
    private router :Router
  ) { }

  ngOnInit(): void {
   const idSociete= this.activatedRoute.snapshot.params.idSociete;
   console.log(idSociete);

   if(idSociete){
     this.societeService.findSocieteById(idSociete)
      .subscribe(societe=>{
        this.societeDto=societe;
        this.adressedto=this.societeDto.adresse ? this.societeDto.adresse:{} ;
      });
   }
  }
  cancel(): void {
    this.router.navigate(['société'])
  }

  enregistrerSociete(): void {
    this.societeDto.adresse=this.adressedto;
    console.log(this.societeDto);

    this.societeService.enregistrerSociete(this.societeDto)
    .subscribe( resp=>{
      this.router.navigate(['société'])
    },error=>{
      this.errorMsg=error.error.errors;

    });

  }

}
