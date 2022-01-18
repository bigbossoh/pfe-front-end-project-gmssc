/* tslint:disable */
import { AdresseDto } from './adresse-dto';
import { RolesDto } from './roles-dto';
export interface UtilisateurDto {
  id?: number;
  nom?: string;
  prenom?: string;
  email?: string;
  mobile?: string;
  dateDeNaissance?: string;
  moteDePasse?: string;
  adresseDto?: AdresseDto;
  photo?: string;
  roles?: Array<RolesDto>;
}
