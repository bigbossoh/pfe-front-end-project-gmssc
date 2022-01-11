/* tslint:disable */
import { BienImmobilierDto } from './bien-immobilier-dto';
export interface PiecesDto {
  id?: number;
  codePiece?: string;
  nomPiece?: string;
  nomBatiment?: string;
  description?: string;
  capacitePiece?: number;
  positionEtage?: number;
  typeSalle?: string;
  bienImmobilierDto?: BienImmobilierDto;
}
