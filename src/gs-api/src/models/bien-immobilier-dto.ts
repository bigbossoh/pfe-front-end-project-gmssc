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
  villeSociete?: string;
  commune?: string;
  quartier?: string;
  autreInformation?: string;
  nombrePiece?: number;
  societeDto?: SocieteDto;
  adresses2?: string;
  adresses1?: string;
}
