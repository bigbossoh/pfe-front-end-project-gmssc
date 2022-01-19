import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BienImmobilierService } from 'src/app/services/bien-immobilier/bien-immobilier.service';
import { BienImmobilierDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-detail-bien-immo-piece',
  templateUrl: './detail-bien-immo-piece.component.html',
  styleUrls: ['./detail-bien-immo-piece.component.css']
})
export class DetailBienImmoPieceComponent implements OnInit {

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
