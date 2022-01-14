import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { AdresseDto, RolesDto, UtilisateurDto } from 'src/gs-api/src/models';
import { UtilisateurService } from '../../services/utilisateur/utilisateur.service';


@Component({
  selector: 'app-page-inscription-societe-maintenance',
  templateUrl: './page-inscription-societe-maintenance.component.html',
  styleUrls: ['./page-inscription-societe-maintenance.component.css']
})
export class PageInscriptionSocieteMaintenanceComponent implements OnInit {

  utilisateurDto:UtilisateurDto={};
  adresseDto:AdresseDto={};
  rolesDTO:RolesDto={};
  errorsMsg:Array<string>=[];

  constructor(
    private utilisateurService : UtilisateurService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  inscrire():void{
    this.utilisateurDto.adresseDto=this.adresseDto;
   this.utilisateurDto.roles=[this.rolesDTO]
  //  console.log("we are stating here ",this.utilisateurDto);
     this.utilisateurService.sinscrire(this.utilisateurDto)
     .subscribe(utilisateurDTO=>{
       //TODO
       this.router.navigate(['login']);
    },error=>{
       console.log(error.error.errors,error);
       this.errorsMsg=error.error.errors;
     })

  }
}
