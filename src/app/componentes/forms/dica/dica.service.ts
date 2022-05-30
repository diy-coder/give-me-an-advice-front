import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataStore } from '@aws-amplify/datastore';
import { Dica } from 'src/models';
import { Auth } from 'aws-amplify';

@Injectable({ providedIn: 'root' })
export class DicaService {
  constructor(private http: HttpClient) {}

  getAll() {
    return DataStore.query(Dica);
  }

  getById(id) {
    return DataStore.query(Dica, id);
  }

  async save(dicaInfo: Dica) {
    const userInfo = await Auth.currentUserInfo();
    let email = '';
    if (userInfo && userInfo.attributes) {
      email = userInfo.attributes.email;
    }

    let dica = Dica.copyOf(dicaInfo, (updated) => {
      updated.usuario = email;
    });

    return DataStore.save(dica);
  }

  delete(id) {
    return DataStore.delete(Dica, id);
  }
}
