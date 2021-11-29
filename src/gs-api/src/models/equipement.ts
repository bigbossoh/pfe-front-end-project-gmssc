/* tslint:disable */
import { PieceEquipement } from './piece-equipement';
export interface Equipement {
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
  pieceEquipements?: Array<PieceEquipement>;
  longueur?: number;
}
