/* tslint:disable */
import { SocieteDto } from './societe-dto';
export interface IntervenantDto {
  id?: number;
  nomInterv?: string;
  prenomInterv?: string;
  fonctionInterv?: string;
  mobile?: string;
  adresse?: string;
  autreInfo?: string;
  societeDto?: SocieteDto;
}
