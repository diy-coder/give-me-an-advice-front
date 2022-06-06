import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  loginWithEmailAndPassword(username, password) {
    this.authService.signIn(username, password).subscribe(
      (user) => {
        this.router.navigate(['home']);
      },
      (err) => {}
    );
  }
}
