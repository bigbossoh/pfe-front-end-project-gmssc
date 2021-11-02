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
          url: ''
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
          titre: "Gestion des biens",
          icon: '',
          url: ''
        },
        {
          id: '32',
          titre: 'Gestion des Pièces',
          icon: '',
          url: ''
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
          titre: "Equipements de climatisation",
          icon: '',
          url: ''
        },
        {
          id: '42',
          titre: "Affectation dans les pièces",
          icon: '',
          url: ''
        },
      ]
    },
    {
      id: '5',
      titre: 'Gestion des maintenances',
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
    },
    {
      id: '6',
      titre: 'Gestion des contrats',
      icon: 'fab fa-pied-piper-alt',
      url: ''
    }
    ,
    {
      id: '7',
      titre: 'Gestion des interventions',
      icon: 'fas fa-phone-alt',
      url: ''
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
      ]
    }

  ];
  constructor(
    private router: Router) {

  }

  ngOnInit(): void {
  }
  navigate(url?: string): void {
    this.router.navigate([url]);

  }
}
