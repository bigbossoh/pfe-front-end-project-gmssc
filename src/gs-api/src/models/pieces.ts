/* tslint:disable */
import { BienImmobilier } from './bien-immobilier';
import { PieceEquipement } from './piece-equipement';
export interface Pieces {
  id?: number;
  codePiece?: string;
  nomPiece?: string;
  nomBatiment?: string;
  description?: string;
  capacitePiece?: number;
  positionEtage?: number;
  typeSalle?: string;
  bienImmobilier?: BienImmobilier;
  pieceEquipements?: Array<PieceEquipement>;
}
