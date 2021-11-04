import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionSocieteMaintenanceComponent } from './pages/page-inscription-societe-maintenance/page-inscription-societe-maintenance.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { MenuComponent } from './composants/menu/menu.component';
import { HeaderComponent } from './composants/header/header.component';
import { PageSocieteComponent } from './pages/societes/page-societe/page-societe.component';
import { DetailSocieteComponent } from './composants/detail-societe/detail-societe.component';
import { PaginationComponent } from './composants/pagination/pagination.component';
import { BouttonActionComponent } from './composants/boutton-action/boutton-action.component';
import { NouvelleSocieteComponent } from './pages/societes/nouvelle-societe/nouvelle-societe.component';
import { PageSocieteIntervenantComponent } from './pages/societes/page-societe-intervenant/page-societe-intervenant.component';
import { DetailSocieteIntervenantComponent } from './composants/detail-societe-intervenant/detail-societe-intervenant.component';
import { DetailIntervenantSocieteComponent } from './composants/detail-intervenant-societe/detail-intervenant-societe.component';
import { PageBienImmobilierComponent } from './pages/bien-immobilier/page-bien-immobilier/page-bien-immobilier.component';
import { DetailBienImmobilierComponent } from './composants/detail-bien-immobilier/detail-bien-immobilier.component';
import { PageNouveauBienComponent } from './pages/bien-immobilier/page-nouveau-bien/page-nouveau-bien.component';
import { PageBienPieceComponent } from './pages/bien-immobilier/page-bien-piece/page-bien-piece.component';
import { NouveauIntervenantComponent } from './pages/societes/nouveau-intervenant/nouveau-intervenant.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageInscriptionSocieteMaintenanceComponent,
    PageDashboardComponent,
    PageStatistiquesComponent,
    MenuComponent,
    HeaderComponent,
    PageSocieteComponent,
    DetailSocieteComponent,
    PaginationComponent,
    BouttonActionComponent,
    NouvelleSocieteComponent,
    PageSocieteIntervenantComponent,
    DetailSocieteIntervenantComponent,
    DetailIntervenantSocieteComponent,
    PageBienImmobilierComponent,
    DetailBienImmobilierComponent,
    PageNouveauBienComponent,
    PageBienPieceComponent,
    NouveauIntervenantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
