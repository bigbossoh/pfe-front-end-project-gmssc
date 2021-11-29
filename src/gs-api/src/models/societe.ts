/* tslint:disable */
import { Adresse } from './adresse';
import { BienImmobilier } from './bien-immobilier';
export interface Societe {
  id?: number;
  codeSociete?: string;
  denomination?: string;
  sigle?: string;
  dateCreationSociete?: string;
  descriptionActivite?: string;
  adresse?: Adresse;
  codeFiscal?: string;
  photo?: string;
  email?: string;
  numTel?: string;
  mobile?: string;
  fax?: string;
  steWeb?: string;
  bienImmobiliers?: Array<BienImmobilier>;
}
