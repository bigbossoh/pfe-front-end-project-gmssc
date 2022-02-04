import { Component, Input, OnInit } from '@angular/core';
import { CorrectiveDto } from '../../../gs-api/src/models/corrective-dto';
import { GroupeIntervenantDto } from '../../../gs-api/src/models/groupe-intervenant-dto';

@Component({
  selector: 'app-detail-corrective',
  templateUrl: './detail-corrective.component.html',
  styleUrls: ['./detail-corrective.component.css']
})
export class DetailCorrectiveComponent implements OnInit {
  @Input()
  grpeInterv:GroupeIntervenantDto = {};
  constructor() { }

  ngOnInit(): void {
  }

}
