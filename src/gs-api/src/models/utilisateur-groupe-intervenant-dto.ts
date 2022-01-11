/* tslint:disable */
import { GroupeIntervenantDto } from './groupe-intervenant-dto';
import { UtilisateurDto } from './utilisateur-dto';
export interface UtilisateurGroupeIntervenantDto {
  id?: number;
  dateAffectionUser?: string;
  groupeIntervenantDto?: GroupeIntervenantDto;
  utilisateurDto?: UtilisateurDto;
}
