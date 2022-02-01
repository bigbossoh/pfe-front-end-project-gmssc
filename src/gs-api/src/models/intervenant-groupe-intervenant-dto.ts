/* tslint:disable */
import { GroupeIntervenantDto } from './groupe-intervenant-dto';
import { IntervenantDto } from './intervenant-dto';
export interface IntervenantGroupeIntervenantDto {
  id?: number;
  dateAffectionUser?: string;
  groupeIntervenantDto?: GroupeIntervenantDto;
  intervenantDto?: IntervenantDto;
}
