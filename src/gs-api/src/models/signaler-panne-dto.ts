/* tslint:disable */
import { UtilisateurDto } from './utilisateur-dto';
import { PiecesDto } from './pieces-dto';
export interface SignalerPanneDto {
  id?: number;
  codeSignalerPanne?: string;
  objetPanne?: string;
  descriptionPanne?: string;
  dateSignalerPanne?: string;
  dateResolutionPanne?: string;
  dateAnnulation?: string;
  etatSignalerPanne?: string;
  causeAnnulation?: string;
  utilisateurDto?: UtilisateurDto;
  piecesDto?: PiecesDto;
}
