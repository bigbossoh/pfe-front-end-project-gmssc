import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BienImmobilierService } from 'src/app/services/bien-immobilier/bien-immobilier.service';
import { SocieteService } from 'src/app/services/societe/societe.service';
import { SocieteDto } from 'src/gs-api/src/models';



import { BienImmobilierDto } from '../../../../gs-api/src/models/bien-immobilier-dto';

@Component({
  selector: 'app-page-nouveau-bien',
  templateUrl: './page-nouveau-bien.component.html',
  styleUrls: ['./page-nouveau-bien.component.css']
})
export class PageNouveauBienComponent implements OnInit {

  bienImmo:BienImmobilierDto={};
  listeSocietePrincipale:Array<SocieteDto>=[];
  listeSocieteDto:Array<SocieteDto>=[];
  sociereDto:SocieteDto={};

  errorMsg: Array<string> = [];
  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private societeService:SocieteService,
    private bienImmoService:BienImmobilierService
  ) { }

  ngOnInit(): void {
    this.findAllSociete()
    const idbienImmo= this.activatedRoute.snapshot.params.idBienimmo;
    //console.log(idbienImmo);

    if(idbienImmo){
      this.bienImmoService.findBienImmoById(idbienImmo)
       .subscribe(b=>{
         this.bienImmo=b;
         this.sociereDto=this.bienImmo.societeDto ? this.bienImmo.societeDto:{} ;
       });
    }

    this.findAllSocietesprincipale()
  }

findAllSociete():void{
  this.societeService.findAllorder()
  .subscribe(listsoc=>{
    this.listeSocieteDto=listsoc.filter(function(soc: SocieteDto){
      return soc.societeMaintenance===false;})
   // console.log("chargement des societes....", this.listeSocieteDto);

  },error=>{
    console.log(error.error.errors);

  });
}
cancel(): void {
  this.router.navigate(['bienimmobilier'])
}

saveBien():void{
  this.bienImmo.societeDto=this.sociereDto;
    //console.log(this.bienImmo);
    this.bienImmoService.saveBienImmobilier(this.bienImmo)
    .subscribe(inter=>{
      this.router.navigate(['bienimmobilier'])
    },
    error=>{
      this.errorMsg=error.error.errors;

    });
}
findAllSocietesprincipale():void{
  this.societeService.findAllorder()
  .subscribe(resp=>{
    this.listeSocietePrincipale=resp.filter(function(soc: SocieteDto){
      return soc.societeMaintenance===false
    });
  });
}

}
