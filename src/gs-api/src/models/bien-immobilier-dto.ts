/* tslint:disable */
import { SocieteDto } from './societe-dto';
export interface BienImmobilierDto {
  id?: number;
  codeBienImmobilier?: string;
  nomBienImmobilier?: string;
  typeBienImmobilier?: string;
  nbreBatiments?: number;
  mobile?: string;
  telephone?: string;
  autreInformation?: string;
  nombrePiece?: number;
  societeDto?: SocieteDto;
  adresses1?: string;
  adresses2?: string;
}
