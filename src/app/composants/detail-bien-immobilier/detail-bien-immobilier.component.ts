import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BienImmobilierDto } from '../../../gs-api/src/models/bien-immobilier-dto';
import { BienImmobilierService } from '../../services/bien-immobilier/bien-immobilier.service';

@Component({
  selector: 'app-detail-bien-immobilier',
  templateUrl: './detail-bien-immobilier.component.html',
  styleUrls: ['./detail-bien-immobilier.component.css']
})
export class DetailBienImmobilierComponent implements OnInit {

    @Input()
    bienImmo:BienImmobilierDto = {};
    @Output()
    suppressionResult=new EventEmitter();
    selecteBienImmoDelete?=-1;
  constructor(
    private router : Router,
    private bienImmoService:BienImmobilierService
  ) { }

  ngOnInit(): void {
  }

  modifierBienImmobilier():void{
    console.log("test");
    this.router.navigate(['nouveaubien',this.bienImmo.id]);

  }

  confirmerEtSupprimerBienImmobilier():void{
    if(this.bienImmo.id){
      this.bienImmoService.deleteBienImmobilier(this.bienImmo.id)
      .subscribe(resp=>{
        this.suppressionResult.emit('Success');
      }, error =>{
        this.suppressionResult.emit(error.error.error.errors);

      });
    }
  }

}
