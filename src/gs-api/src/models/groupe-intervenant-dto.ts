/* tslint:disable */
import { SignalerPanneDto } from './signaler-panne-dto';
export interface GroupeIntervenantDto {
  id?: number;
  dateAffectation?: string;
  commentaire?: string;
  signalerPanneDto?: SignalerPanneDto;
  dateFinTravaux?: string;
}
