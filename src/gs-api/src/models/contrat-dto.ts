/* tslint:disable */
import { SocieteDto } from './societe-dto';
import { EquipementDto } from './equipement-dto';
export interface ContratDto {
  id?: number;
  codeContrat?: string;
  dateSignature?: string;
  dureeContrat?: number;
  dateFin?: string;
  contactUrgence?: string;
  delaiIntervention?: string;
  resiliation?: boolean;
  verificationControleGeneral?: boolean;
  verificationFixationsSupports?: boolean;
  verificationCircuitFrigorifique?: boolean;
  detectionFuitesEventuelles?: boolean;
  verificationBonneMarcheSecurites?: boolean;
  nettoyageFiltre?: boolean;
  depoussierageNettoyageUnites?: boolean;
  verificationEcoulementEaux?: boolean;
  desinfectionNettoyageBacs?: boolean;
  nettoyageEnlevementResidus?: boolean;
  etablissementRapportVisite?: boolean;
  risquesEventuels?: boolean;
  coutInterventionsInclus?: boolean;
  coutInterventionsExclus?: boolean;
  coutInterventionsFacture?: boolean;
  societeDto?: SocieteDto;
  equipementDtos?: Array<EquipementDto>;
}
