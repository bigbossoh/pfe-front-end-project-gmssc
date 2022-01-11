/* tslint:disable */
import { EquipementDto } from './equipement-dto';
import { PiecesDto } from './pieces-dto';
export interface PieceEquipementDto {
  id?: number;
  dateInstallation?: string;
  equipementDto?: EquipementDto;
  piecesDto?: PiecesDto;
}
