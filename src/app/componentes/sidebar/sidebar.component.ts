import { Component, OnInit } from '@angular/core';
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
export const ROUTES: RouteInfo[] = [
  {
    id: null,
    path: '/configuracoes',
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

  constructor() {}

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
    Auth.signOut();
  }
}
