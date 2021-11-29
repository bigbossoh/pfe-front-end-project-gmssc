/* tslint:disable */
import { Equipement } from './equipement';
import { Pieces } from './pieces';
export interface PieceEquipement {
  dateInstallation?: string;
  equipement?: Equipement;
  pieces?: Pieces;
  id?: number;
}
