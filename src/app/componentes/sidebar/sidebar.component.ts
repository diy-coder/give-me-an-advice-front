import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { Observable } from 'rxjs';

declare const $: any;
declare interface RouteInfo {
  id;
  path: string;
  title: string;
  icon: string;
  class: string;
  subItems: Object;
  descricao: string;
}
export let ROUTES: RouteInfo[] = [
  {
    id: null,
    path: '/home',
    title: 'Início',
    icon: 'home',
    class: '',
    subItems: [],
    descricao: 'Início',
  },
  {
    id: null,
    path: '/conf',
    title: 'Configurações',
    icon: 'settings',
    class: '',
    subItems: [],
    descricao: 'Configurações',
  },
  {
    id: null,
    path: '/estilos',
    title: 'Estilos',
    icon: 'dark_mode',
    class: '',
    subItems: [],
    descricao: 'Estilos',
  },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  menuItems: any[] = [];
  selectedCNPJ = null;
  isUserAdmin = false;

  constructor(private router: Router) {
    ROUTES.push({
      id: 'sub-cadastros',
      path: '/sub-cadastros',
      title: 'Cadastros',
      icon: 'leaderboard',
      class: '',
      subItems: [
        {
          path: '/dicas',
          title: 'Dicas',
          icon: 'analytics',
          class: '',
          descricao: 'Cadastro de Dicas',
        },
        {
          path: '/conselhos',
          title: 'Conselhos',
          icon: 'analytics',
          class: '',
          descricao: 'Cadastro de Conselhos',
        },
      ],
      descricao: '',
    });
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
    this.loadData();
  }

  loadData() {}

  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }

  setEmpresaAtiva(empresa) {
    location.reload();
  }

  logout() {
    Auth.signOut().then((d) => {
      window.location.reload();
      this.router.navigate(['home']);
    });
  }
}
