import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocieteService } from 'src/app/services/societe/societe.service';
import { SocieteDto } from 'src/gs-api/src/models';




@Component({
  selector: 'app-page-societe',
  templateUrl: './page-societe.component.html',
  styleUrls: ['./page-societe.component.css']
})
export class PageSocieteComponent implements OnInit {

  listeSocietes: Array<SocieteDto>=[];
  errorMsg='';
  constructor(
    private router:Router,
    private societeService:SocieteService
  ) { }

  ngOnInit(): void {
    this.findAllSocietes();
  }
  findAllSocietes():void{
    this.societeService.findAllorder()
    .subscribe(resp=>{
      this.listeSocietes=resp;
    });
  }
  nouvelleSociete():void{
    this.router.navigate(['nouvellesociete']);
  }
  handleSuppression(event : any):void{
      if(event==="Success"){
        this.findAllSocietes();
      }else{
        this.errorMsg= event;
      }
  }
}
