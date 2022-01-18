/* tslint:disable */
import { ContratDto } from './contrat-dto';
export interface EquipementDto {
  id?: number;
  codeEquipement?: string;
  marque?: string;
  numeroSerie?: string;
  modele?: string;
  hauteur?: number;
  largeur?: number;
  poidsNetInterieur?: number;
  poidsNetExterieur?: number;
  puissance?: string;
  dateAchat?: string;
  garantie?: number;
  nomFournisseur?: string;
  personneRessource?: string;
  telephone?: string;
  mobile?: string;
  livreAvecAccessoires?: boolean;
  description?: string;
  typeClim?: string;
  contratDto?: ContratDto;
  longueur?: number;
}
