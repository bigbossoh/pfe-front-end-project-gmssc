/* tslint:disable */
import { AdresseDto } from './adresse-dto';
export interface SocieteDto {
  id?: number;
  codeSociete?: string;
  denomination?: string;
  sigle?: string;
  dateCreationSociete?: number;
  descriptionActivite?: string;
  codeFiscal?: string;
  photo?: string;
  email?: string;
  numTel?: string;
  mobile?: string;
  fax?: string;
  siteWeb?: string;
  adresse?: AdresseDto;
}
