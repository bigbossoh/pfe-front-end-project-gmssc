/* tslint:disable */
import { GroupeIntervenantDto } from './groupe-intervenant-dto';
export interface PreventiveDto {
  id?: number;
  programmer?: boolean;
  dateProgramation?: string;
  isDone?: boolean;
  typeTravaux?: string;
  periodique?: boolean;
  dateDebutIntervention?: string;
  dateFinIntervention?: string;
  resolu?: boolean;
  rapportInterv?: boolean;
  groupeIntervenantDto?: GroupeIntervenantDto;
}
