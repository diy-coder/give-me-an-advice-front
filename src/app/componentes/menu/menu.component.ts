import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoUser } from '@aws-amplify/auth';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  userInfo;
  title;
  activeProfile;

  constructor(private element: ElementRef, private router: Router) {}

  ngOnInit(): void {
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    Auth.currentAuthenticatedUser().then((data: CognitoUser) => {
      console.log(data);
      this.userInfo = data;
    });
  }

  logout() {
    Auth.signOut();
  }

  mobile_menu_visible: any = 0;
  private sidebarVisible: boolean = false;
  private toggleButton: any;
  private $layer;

  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const body = document.getElementsByTagName('body')[0];
    setTimeout(function () {
      toggleButton.classList.add('toggled');
    }, 500);

    body.classList.add('nav-open');

    this.sidebarVisible = true;
  }
  sidebarClose() {
    const body = document.getElementsByTagName('body')[0];
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    body.classList.remove('nav-open');
  }

  sidebarToggle() {
    // const toggleButton = this.toggleButton;
    // const body = document.getElementsByTagName('body')[0];
    var $toggle = document.getElementsByClassName('navbar-toggler')[0];

    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
    const body = document.getElementsByTagName('body')[0];

    if (this.mobile_menu_visible == 1) {
      // $('html').removeClass('nav-open');
      body.classList.remove('nav-open');
      if (this.$layer) {
        this.$layer.remove();
      }
      setTimeout(function () {
        $toggle.classList.remove('toggled');
      }, 400);

      this.mobile_menu_visible = 0;
    } else {
      setTimeout(function () {
        $toggle.classList.add('toggled');
      }, 430);

      this.$layer = document.createElement('div');
      this.$layer.setAttribute('class', 'close-layer');

      if (body.querySelectorAll('.main-panel')) {
        document
          .getElementsByClassName('main-panel')[0]
          .appendChild(this.$layer);
      } else if (body.classList.contains('off-canvas-sidebar')) {
        document
          .getElementsByClassName('wrapper-full-page')[0]
          .appendChild(this.$layer);
      }

      setTimeout(() => {
        this.$layer.classList.add('visible');
      }, 100);

      this.$layer.onclick = () => {
        //asign a function
        body.classList.remove('nav-open');
        this.mobile_menu_visible = 0;
        this.$layer.classList.remove('visible');
        setTimeout(() => {
          this.$layer.remove();
          $toggle.classList.remove('toggled');
        }, 400);
      };

      body.classList.add('nav-open');
      this.mobile_menu_visible = 1;
    }
  }

  goto(page) {
    this.router.navigate([page]);
  }

  signOut() {
    Auth.signOut();
  }
}
