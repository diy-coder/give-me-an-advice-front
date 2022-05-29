import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStore } from '@aws-amplify/datastore';
import { Dica } from 'src/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  async getAll() {
    const models = await DataStore.query(Dica);
    console.log(models);
  }

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
