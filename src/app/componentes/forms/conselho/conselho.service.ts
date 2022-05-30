import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataStore } from '@aws-amplify/datastore';
import { Auth } from 'aws-amplify';
import { ServiceInterface } from 'src/app/interfaces/service.interface';
import { Conselho } from 'src/models';

@Injectable({ providedIn: 'root' })
export class ConselhoService implements ServiceInterface {
  constructor(private http: HttpClient) {}

  getAll() {
    return DataStore.query(Conselho);
  }

  getById(id) {
    return DataStore.query(Conselho, id);
  }

  async save(original, atual) {
    let model;

    if (null == original) {
      const userInfo = await Auth.currentUserInfo();
      model = new Conselho({
        nome: atual.nome,
        descricao: atual.descricao,
        usuario: userInfo.attributes.email,
      });
    } else {
      model = Conselho.copyOf(original, (updated) => {
        (updated.nome = atual.nome), (updated.descricao = atual.descricao);
      });
    }

    return DataStore.save(model);
  }

  delete(id) {
    return DataStore.delete(Conselho, id);
  }
}
