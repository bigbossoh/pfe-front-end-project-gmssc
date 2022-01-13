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
import { DetailPieceComponent } from './composants/detail-piece/detail-piece.component';
import { PageNouvellePieceComponent } from './pages/bien-immobilier/page-nouvelle-piece/page-nouvelle-piece.component';
import { PageEquipementComponent } from './pages/equipement/page-equipement/page-equipement.component';
import { PageNouveauEquipementComponent } from './pages/equipement/page-nouveau-equipement/page-nouveau-equipement.component';
import { DetailEquipementComponent } from './composants/detail-equipement/detail-equipement.component';
import { PageContratComponent } from './pages/Contrat/page-contrat/page-contrat.component';
import { PageNouveauContratComponent } from './pages/Contrat/page-nouveau-contrat/page-nouveau-contrat.component';
import { DetailContratComponent } from './composants/detail-contrat/detail-contrat.component';
import { FooterComponent } from './composants/footer/footer.component';
import { PageInterventionComponent } from './pages/Intervention/page-intervention/page-intervention.component';
import { PageNouvelleInterventionComponent } from './pages/Intervention/page-nouvelle-intervention/page-nouvelle-intervention.component';
import { DetailInterventionComponent } from './composants/detail-intervention/detail-intervention.component';
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';
import { PageChangerMotPasseComponent } from './pages/profil/page-changer-mot-passe/page-changer-mot-passe.component';
import { PageGroupeInterventionComponent } from './pages/Intervention/page-groupe-intervention/page-groupe-intervention.component';
import { PageNouveauGroupeInterventionComponent } from './pages/Intervention/page-nouveau-groupe-intervention/page-nouveau-groupe-intervention.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './services/interceptor/http-interceptor.service';

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
    NouveauIntervenantComponent,
    DetailPieceComponent,
    PageNouvellePieceComponent,
    PageEquipementComponent,
    PageNouveauEquipementComponent,
    DetailEquipementComponent,
    PageContratComponent,
    PageNouveauContratComponent,
    DetailContratComponent,
    FooterComponent,
    PageInterventionComponent,
    PageNouvelleInterventionComponent,
    DetailInterventionComponent,
    PageProfilComponent,
    PageChangerMotPasseComponent,
    PageGroupeInterventionComponent,
    PageNouveauGroupeInterventionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
    provide:HTTP_INTERCEPTORS,
    useClass:HttpInterceptorService,
    multi:true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
