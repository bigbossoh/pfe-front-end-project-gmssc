import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    children:[
      {
        path:'statistiques',
        component:PageStatistiquesComponent
    },
    {
      path:'société',
      component:PageSocieteComponent
  }
  ,
    {
      path:'nouvellesociete',
      component:NouvelleSocieteComponent
  },
  {
    path:'nouveauintervenant',
    component:NouveauIntervenantComponent
}
  ,
    {
      path:'intervenants',
      component:PageSocieteIntervenantComponent
  },
  {
    path:'bienimmobilier',
    component:PageBienImmobilierComponent
},
// nouvellePiece
  {
    path:'nouveaubien',
    component:PageNouveauBienComponent
},

  {
    path:'nouvellePiece',
    component:PageNouvellePieceComponent
},
{
  path:'listedespieces',
  component:PageBienPieceComponent
}
,
{
  path:'listeequipement',
  component:PageEquipementComponent
}
,
{
  path:'nouvelleequipement',
  component:PageNouveauEquipementComponent
}
,
{
  path:'nouveaucontrat',
  component:PageNouveauContratComponent
}
,
{
  path:'listescontrats',
  component:PageContratComponent
}
,
{
  path:'nouvelleintervention',
  component:PageNouvelleInterventionComponent
}
,
{
  path:'listeintervention',
  component:PageInterventionComponent
},
{
  path:'profil',
  component:PageProfilComponent
}
,
{
  path:'changermotpasse',
  component:PageChangerMotPasseComponent
}
    ]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
