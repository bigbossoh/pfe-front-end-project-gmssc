/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { Gmsscapiv1PieceEquipementsService } from './services/gmsscapiv-1piece-equipements.service';
import { Gmsscapiv1utilisateurGroupeIntervenantService } from './services/gmsscapiv-1utilisateur-groupe-intervenant.service';
import { Gmsscapiv1actionsService } from './services/gmsscapiv-1actions.service';
import { Gmsscapiv1authService } from './services/gmsscapiv-1auth.service';
import { Gmsscapiv1biensService } from './services/gmsscapiv-1biens.service';
import { Gmsscapiv1CompetencesService } from './services/gmsscapiv-1competences.service';
import { Gmsscapiv1contratsService } from './services/gmsscapiv-1contrats.service';
import { Gmsscapiv1equipementsService } from './services/gmsscapiv-1equipements.service';
import { Gmsscapiv1groupeIntervenantService } from './services/gmsscapiv-1groupe-intervenant.service';
import { Gmsscapiv1intervenantsService } from './services/gmsscapiv-1intervenants.service';
import { Gmsscapiv1interventioncorrectiveService } from './services/gmsscapiv-1interventioncorrective.service';
import { Gmsscapiv1interventionpreventiveService } from './services/gmsscapiv-1interventionpreventive.service';
import { Gmsscapiv1piecesService } from './services/gmsscapiv-1pieces.service';
import { Gmsscapiv1signalerPanneService } from './services/gmsscapiv-1signaler-panne.service';
import { Gmsscapiv1societesService } from './services/gmsscapiv-1societes.service';
import { Gmsscapiv1utilisateursService } from './services/gmsscapiv-1utilisateurs.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    Gmsscapiv1PieceEquipementsService,
    Gmsscapiv1utilisateurGroupeIntervenantService,
    Gmsscapiv1actionsService,
    Gmsscapiv1authService,
    Gmsscapiv1biensService,
    Gmsscapiv1CompetencesService,
    Gmsscapiv1contratsService,
    Gmsscapiv1equipementsService,
    Gmsscapiv1groupeIntervenantService,
    Gmsscapiv1intervenantsService,
    Gmsscapiv1interventioncorrectiveService,
    Gmsscapiv1interventionpreventiveService,
    Gmsscapiv1piecesService,
    Gmsscapiv1signalerPanneService,
    Gmsscapiv1societesService,
    Gmsscapiv1utilisateursService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
