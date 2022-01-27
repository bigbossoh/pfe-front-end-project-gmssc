/* tslint:disable */
import { UtilisateurDto } from './utilisateur-dto';
import { PiecesDto } from './pieces-dto';
import { IntervenantDto } from './intervenant-dto';
export interface SignalerPanneDto {
  id?: number;
  codeSignalerPanne?: string;
  objetPanne?: string;
  descriptionPanne?: string;
  dateSignalerPanne?: string;
  priorite?: string;
  dateResolutionPanne?: string;
  dateAnnulation?: string;
  etatSignalerPanne?: string;
  causeAnnulation?: string;
  suggestionsAmeliration?: string;
  utilisateurDto?: UtilisateurDto;
  piecesDto?: PiecesDto;
  intervenantDto?: IntervenantDto;
}
