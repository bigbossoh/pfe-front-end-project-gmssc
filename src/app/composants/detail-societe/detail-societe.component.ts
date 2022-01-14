import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SocieteDto } from '../../../gs-api/src/models/societe-dto';
import { Router } from '@angular/router';
import { SocieteService } from '../../services/societe/societe.service';

@Component({
  selector: 'app-detail-societe',
  templateUrl: './detail-societe.component.html',
  styleUrls: ['./detail-societe.component.css']
})
export class DetailSocieteComponent implements OnInit {
    @Input()
    societeDto:SocieteDto = {};
    @Output()
    suppressionResult=new EventEmitter();
    selectedSocieteDelete?=-1;
  constructor(
    private router : Router,
    private societeService:SocieteService
  ) { }

  ngOnInit(): void {
  }
  modifierSociete():void{
    this.router.navigate(['nouvellesociete',this.societeDto.id]);
  }

  confirmerEtSupprimerSociete():void{
    if(this.societeDto.id){
      this.societeService.deleteSociete(this.societeDto.id)
      .subscribe(resp=>{
        this.suppressionResult.emit('Success');
      }, error =>{
        this.suppressionResult.emit(error.error.error.errors);
        
      });
    }
  }

}
