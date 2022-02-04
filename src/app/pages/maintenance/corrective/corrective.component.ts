import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CorrectiveDto } from '../../../../gs-api/src/models/corrective-dto';
import { GroupeIntervenantDto } from '../../../../gs-api/src/models/groupe-intervenant-dto';
import { GroupeInterventionService } from '../../../services/groupe-intervention/groupe-intervention.service';
import { CorrectiveService } from '../../../services/corrective/corrective.service';

@Component({
  selector: 'app-corrective',
  templateUrl: './corrective.component.html',
  styleUrls: ['./corrective.component.css']
})
export class CorrectiveComponent implements OnInit {
  listeCorrectives:Array<CorrectiveDto>=[];
  ListeGroupeInterventions:Array<GroupeIntervenantDto>=[];
  groupeInterventionDto:GroupeIntervenantDto={}
  mapLignesCorrectives = new Map();
  totalLigne:number=0;
  page:number=1;
  errorMsg='';
  constructor(
    private router:Router,
    private grpeInterventionService:GroupeInterventionService,
    private correctiveService:CorrectiveService
  ) { }

  ngOnInit(): void {
    this.findAllGroupeInterventions()
  }
  nouvelleMaintenanceCorrective():void{
    this.router.navigate(['nouvellemaintenancecorrective'])
  }
  findAllGroupeInterventions():void{
    this.grpeInterventionService.findAllGroupeIntervenant()
    .subscribe(resp=>{
      //

      this.ListeGroupeInterventions=resp;
      this.totalLigne=this.ListeGroupeInterventions.length
      this.findAllMaintenanceCorrectiveByGrpeInterv();
    });
  }
  findAllMaintenanceCorrectiveByGrpeInterv():void{
    this.ListeGroupeInterventions.forEach(data => {
     this.findCorrective(data.id);
    });
  }
  findCorrective(idgrpe?:number):void{
     this.correctiveService.findAllCorrectiveByIdGroupeIntervention(idgrpe)
    .subscribe(list => {
      console.log(list);
      this.mapLignesCorrectives.set(idgrpe, list);
    });

  }
}
