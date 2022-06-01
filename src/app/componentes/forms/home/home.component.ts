import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  gotoDicas() {
    this.router.navigateByUrl('dicas');
  }

  gotoConselhos() {
    this.router.navigate(['conselhos']);
  }

  gotoMotivacionais() {
    this.router.navigate(['motivacionais']);
  }
}
