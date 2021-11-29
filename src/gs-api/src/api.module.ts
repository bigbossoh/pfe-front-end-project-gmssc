/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { Gmsscapiv1PieceEquipementsService } from './services/gmsscapiv-1piece-equipements.service';
import { Gmsscapiv1biensService } from './services/gmsscapiv-1biens.service';
import { Gmsscapiv1equipementsService } from './services/gmsscapiv-1equipements.service';
import { Gmsscapiv1piecesService } from './services/gmsscapiv-1pieces.service';
import { Gmsscapiv1societesService } from './services/gmsscapiv-1societes.service';

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
    Gmsscapiv1biensService,
    Gmsscapiv1equipementsService,
    Gmsscapiv1piecesService,
    Gmsscapiv1societesService
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
