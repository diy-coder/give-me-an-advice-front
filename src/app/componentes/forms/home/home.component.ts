import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, readonly authService: AuthService) {}

  ngOnInit(): void {}

  goto(pagina) {
    this.router.navigateByUrl(pagina);
  }

  login() {
    this.router.navigate(['login']);
  }
}
