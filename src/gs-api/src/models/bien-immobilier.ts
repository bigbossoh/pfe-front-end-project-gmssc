/* tslint:disable */
import { Societe } from './societe';
import { Pieces } from './pieces';
export interface BienImmobilier {
  id?: number;
  codeBienImmobilier?: string;
  nomBienImmobilier?: string;
  typeBienImmobilier?: string;
  nbreBatiments?: number;
  pays?: string;
  ville?: string;
  rue?: string;
  adresse?: string;
  mobile?: string;
  telephone?: string;
  autreInformation?: string;
  nombrePiece?: number;
  societe?: Societe;
  pieces?: Array<Pieces>;
}
