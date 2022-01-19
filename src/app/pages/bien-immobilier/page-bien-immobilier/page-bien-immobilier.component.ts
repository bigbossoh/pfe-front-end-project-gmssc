
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BienImmobilierService } from 'src/app/services/bien-immobilier/bien-immobilier.service';
import { BienImmobilierDto } from '../../../../gs-api/src/models/bien-immobilier-dto';

@Component({
  selector: 'app-page-bien-immobilier',
  templateUrl: './page-bien-immobilier.component.html',
  styleUrls: ['./page-bien-immobilier.component.css']
})
export class PageBienImmobilierComponent implements OnInit {

  listeBienImmo: Array<BienImmobilierDto>=[];
  errorMsg='';
  constructor(
    private router:Router,
    private bienImmoService:BienImmobilierService
  ) { }

  ngOnInit(): void {
    this.findAllBienImmobiliers()
  }
  nouveaubien(): void{
    this.router.navigate(['nouveaubien']);
  }

  findAllBienImmobiliers():void{
    this.bienImmoService.findAll()
    .subscribe(resp=>{
      this.listeBienImmo=resp;
    });
  }
  nouvelleSociete():void{
    this.router.navigate(['nouvellesociete']);
  }
  handleSuppression(event : any):void{
      if(event==="Success"){
        this.findAllBienImmobiliers();
      }else{
        this.errorMsg= event;
      }
  }
}
