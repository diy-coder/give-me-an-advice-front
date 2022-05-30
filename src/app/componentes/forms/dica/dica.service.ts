import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataStore } from '@aws-amplify/datastore';
import { Auth } from 'aws-amplify';
import { ServiceInterface } from 'src/app/interfaces/service.interface';
import { Dica } from 'src/models';

@Injectable({ providedIn: 'root' })
export class DicaService implements ServiceInterface {
  constructor(private http: HttpClient) {}

  getAll() {
    return DataStore.query(Dica);
  }

  getById(id) {
    return DataStore.query(Dica, id);
  }

  async save(original, atual) {
    let model;
    if (null == original) {
      const userInfo = await Auth.currentUserInfo();
      model = new Dica({
        nome: atual.nome,
        descricao: atual.descricao,
        usuario: userInfo.attributes.email,
      });
    } else {
      model = Dica.copyOf(original, (updated) => {
        (updated.nome = atual.nome), (updated.descricao = atual.descricao);
      });
    }

    return DataStore.save(model);
  }

  delete(id) {
    return DataStore.delete(Dica, id);
  }
}
