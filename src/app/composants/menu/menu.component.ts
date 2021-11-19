import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public menuProperties: Array<Menu> = [
    {
      id: '1',
      titre: 'Tableau de bord',
      icon: 'fas fa-chart-line',
      url: '',
      sousMenu: [
        {
          id: '11',
          titre: "Vue d'ensemble",
          icon: 'fas fa-chart-pie',
          url: ''
        },
        {
          id: '12',
          titre: 'Statistiques',
          icon: 'far fa-chart-bar',
          url: 'statistiques'
        }
      ]
    },
    {
      id: '2',
      titre: 'Gestion des Sociétés',
      icon: 'fas fa-building',
      url: '',
      sousMenu: [
        {
          id: '21',
          titre: "sociétés",
          icon: 'fas fa-hotel',
          url: 'société'
        },
        {
          id: '22',
          titre: 'intervenants',
          icon: 'fas fa-people-carry',
          url: 'intervenants'
        }
      ]
    },
    {
      id: '3',
      titre: 'Gestion des biens',
      icon: 'fas fa-city',
      url: '',
      sousMenu: [
        {
          id: '31',
          titre: "biens immobiliers",
          icon: 'fas fa-hotel',
          url: 'bienimmobilier'
        },
        {
          id: '32',
          titre: 'Gestion des Pièces',
          icon: 'fas fa-person-booth',
          url: 'listedespieces'
        }
      ]
    },
    {
      id: '4',
      titre: 'Gestion des équipements',
      icon: 'fas fa-wind',
      url: '',
      sousMenu: [
        {
          id: '41',
          titre: "Equipements",
          icon: 'fas fa-fan',
          url: 'listeequipement'
        }
      ]
    },
    {
      id: '6',
      titre: 'Gestion des contrats',
      icon: 'fab fa-pied-piper-alt',
      url: '',
      sousMenu: [
        {
          id: '21',
          titre: "Contrats",
          icon: 'fas fa-file-signature',
          url: 'listescontrats'
        },

      ]
    }
    ,
    {
      id: '7',
      titre: 'Gestion des interventions',
      icon: 'fas fa-phone-alt',
      url: '',
      sousMenu: [
        {
          id: '21',
          titre: "signaler une panne",
          icon: 'fas fa-virus-slash',
          url: 'listeintervention'
        }
      ]
    },
    {
      id: '5',
      titre: 'Maintenances',
      icon: 'fas fa-praying-hands',
      url: '',
      sousMenu: [
        {
          id: '51',
          titre: "Maintenances Correctives",
          icon: '',
          url: ''
        },
        {
          id: '51',
          titre: "Maintenances Preventives",
          icon: '',
          url: ''
        }
      ]
    }
    ,
    {
      id: '8',
      titre: 'Paramétratge',
      icon: 'fas fa-cogs',
      url: '',
      sousMenu: [
        {
          id: '81',
          titre: "Type de bien immobilier",
          icon: '',
          url: ''
        },
        {
          id: '82',
          titre: "Type de contrat",
          icon: '',
          url: ''
        }
        ,
        {
          id: '83',
          titre: 'Type de pièces',
          icon: '',
          url: ''
        }
        ,
        {
          id: '83',
          titre: 'Utilisateurs',
          icon: 'fas fa-users',
          url: ''
        }
      ]
    }

  ];

  private lastSelectedMenu: Menu | undefined;
  constructor(
    private router: Router) {

  }
  ngOnInit(): void {
  }
  navigate(menu:Menu): void {
    if(this.lastSelectedMenu){
      this.lastSelectedMenu.active=false;
    }
    menu.active=true;
    this.lastSelectedMenu=menu;
    this.router.navigate([menu.url]);

  }
}
