import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataStore } from '@aws-amplify/datastore';
import { Auth } from 'aws-amplify';
import { ServiceInterface } from 'src/app/generics/service.interface';
import { Motivacional } from 'src/models';

@Injectable({ providedIn: 'root' })
export class MotivacionalService implements ServiceInterface {
  constructor(private http: HttpClient) {}

  getAll() {
    return DataStore.query(Motivacional);
  }

  getById(id) {
    return DataStore.query(Motivacional, id);
  }

  async save(original, atual) {
    let model;

    if (null == original) {
      const userInfo = await Auth.currentUserInfo();
      model = new Motivacional({
        nome: atual.nome,
        descricao: atual.descricao,
        usuario: userInfo.attributes.email,
      });
    } else {
      model = Motivacional.copyOf(original, (updated) => {
        (updated.nome = atual.nome), (updated.descricao = atual.descricao);
      });
    }

    return DataStore.save(model);
  }

  delete(id) {
    return DataStore.delete(Motivacional, id);
  }
}
