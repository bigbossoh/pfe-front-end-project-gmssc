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
{
  path:'piece',
  component:PageBienPieceComponent
}
    ]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
