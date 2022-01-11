/* tslint:disable */
import { GroupeIntervenantDto } from './groupe-intervenant-dto';
export interface CorrectiveDto {
  id?: number;
  actionsMener?: string;
  reparation?: boolean;
  depannage?: boolean;
  coutMaintenance?: number;
  dateDebutIntervention?: string;
  dateFinIntervention?: string;
  resolu?: boolean;
  rapportInterv?: boolean;
  groupeIntervenantDto?: GroupeIntervenantDto;
}
