import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionSocieteMaintenanceComponent } from './pages/page-inscription-societe-maintenance/page-inscription-societe-maintenance.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { PageSocieteComponent } from './pages/societes/page-societe/page-societe.component';
import { NouvelleSocieteComponent } from './pages/societes/nouvelle-societe/nouvelle-societe.component';
import { PageSocieteIntervenantComponent } from './pages/societes/page-societe-intervenant/page-societe-intervenant.component';
import { PageBienImmobilierComponent } from './pages/bien-immobilier/page-bien-immobilier/page-bien-immobilier.component';
import { PageBienPieceComponent } from './pages/bien-immobilier/page-bien-piece/page-bien-piece.component';
import { NouveauIntervenantComponent } from './pages/societes/nouveau-intervenant/nouveau-intervenant.component';
import { PageNouveauBienComponent } from './pages/bien-immobilier/page-nouveau-bien/page-nouveau-bien.component';
import { PageNouvellePieceComponent } from './pages/bien-immobilier/page-nouvelle-piece/page-nouvelle-piece.component';
import { PageEquipementComponent } from './pages/equipement/page-equipement/page-equipement.component';
import { PageNouveauEquipementComponent } from './pages/equipement/page-nouveau-equipement/page-nouveau-equipement.component';
import { PageContratComponent } from './pages/Contrat/page-contrat/page-contrat.component';
import { PageNouveauContratComponent } from './pages/Contrat/page-nouveau-contrat/page-nouveau-contrat.component';
import { PageNouvelleInterventionComponent } from './pages/Intervention/page-nouvelle-intervention/page-nouvelle-intervention.component';
import { PageInterventionComponent } from './pages/Intervention/page-intervention/page-intervention.component';
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';
import { PageChangerMotPasseComponent } from './pages/profil/page-changer-mot-passe/page-changer-mot-passe.component';
import { PageGroupeInterventionComponent } from './pages/Intervention/page-groupe-intervention/page-groupe-intervention.component';
import { PageNouveauGroupeInterventionComponent } from './pages/Intervention/page-nouveau-groupe-intervention/page-nouveau-groupe-intervention.component';
import { ApplicationGuardService } from './services/guard/application-guard.service';

const routes: Routes = [
  {
    path:'login',
    component:PageLoginComponent
  },
  {
    path:'inscrire',
    component:PageInscriptionSocieteMaintenanceComponent
  }
  ,
  {
    path:'',
    component:PageDashboardComponent,
    canActivate:[ApplicationGuardService],
    children:[
      {
        path:'statistiques',
        component:PageStatistiquesComponent,
        canActivate:[ApplicationGuardService]
    },
    {
      path:'société',
      component:PageSocieteComponent,
      canActivate:[ApplicationGuardService]
  }
  ,
    {
      path:'nouvellesociete',
      component:NouvelleSocieteComponent,
      canActivate:[ApplicationGuardService]
  },
  {
    path:'nouveauintervenant',
    component:NouveauIntervenantComponent,
    canActivate:[ApplicationGuardService]
}
  ,
    {
      path:'intervenants',
      component:PageSocieteIntervenantComponent,
      canActivate:[ApplicationGuardService]
  },
  {
    path:'bienimmobilier',
    component:PageBienImmobilierComponent,
    canActivate:[ApplicationGuardService]
},
// nouvellePiece
  {
    path:'nouveaubien',
    component:PageNouveauBienComponent,
    canActivate:[ApplicationGuardService]
},

  {
    path:'nouvellePiece',
    component:PageNouvellePieceComponent,
    canActivate:[ApplicationGuardService]
},
{
  path:'listedespieces',
  component:PageBienPieceComponent,
  canActivate:[ApplicationGuardService]
}
,
{
  path:'listeequipement',
  component:PageEquipementComponent,
  canActivate:[ApplicationGuardService]
}
,
{
  path:'nouvelleequipement',
  component:PageNouveauEquipementComponent,
  canActivate:[ApplicationGuardService]
}
,
{
  path:'nouveaucontrat',
  component:PageNouveauContratComponent,
  canActivate:[ApplicationGuardService]
}
,
{
  path:'listescontrats',
  component:PageContratComponent,
  canActivate:[ApplicationGuardService]
}
,
{
  path:'nouvelleintervention',
  component:PageNouvelleInterventionComponent,
  canActivate:[ApplicationGuardService]
}
,
{
  path:'listeintervention',
  component:PageInterventionComponent,
  canActivate:[ApplicationGuardService]
},
{
  path:'listegroupeintervention',
  component:PageGroupeInterventionComponent,
  canActivate:[ApplicationGuardService]
},
{
  path:'nouveaugroupeintervention',
  component:PageNouveauGroupeInterventionComponent,
  canActivate:[ApplicationGuardService]
},
{
  path:'profil',
  component:PageProfilComponent,
  canActivate:[ApplicationGuardService]
}
,
{
  path:'changermotpasse',
  component:PageChangerMotPasseComponent,
  canActivate:[ApplicationGuardService]
}
    ]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
