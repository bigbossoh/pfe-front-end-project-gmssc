/* tslint:disable */
import { CorrectiveDto } from './corrective-dto';
export interface TodoMaintenanceDto {
  id?: number;
  titre?: string;
  description?: string;
  quantite?: number;
  unite?: string;
  dateDoto?: string;
  lieuGeographique?: string;
  coutMaintenance?: number;
  correctiveDto?: CorrectiveDto;
}
