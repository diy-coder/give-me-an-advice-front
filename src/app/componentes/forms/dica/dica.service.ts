import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataStore } from '@aws-amplify/datastore';
import { Dica } from 'src/models';

@Injectable({ providedIn: 'root' })
export class DicaService {
  constructor(private http: HttpClient) {}

  getAll() {
    return DataStore.query(Dica);
  }

  save(dica: Dica) {
    return DataStore.save(dica);
  }
}
