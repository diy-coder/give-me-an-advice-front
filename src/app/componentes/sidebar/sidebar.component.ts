import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

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
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  menuItems: any[] = [];
  selectedCNPJ = null;
  isUserAdmin = false;

  routes: RouteInfo[] = [
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

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.authService.isAuthenticated().subscribe((logged) => {
      if (logged) {
        this.addOptionsIfLogged();
      }

      this.loadMenu();
    });
  }

  addOptionsIfLogged() {
    this.routes.push({
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

  loadMenu() {
    this.menuItems = this.routes.filter((menuItem) => menuItem);
  }

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
