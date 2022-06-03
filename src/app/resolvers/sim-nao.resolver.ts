import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class SimNaoResolver implements Resolve<Promise<any[]>> {
  resolve(): Promise<any> {
    return new Promise((resolve) => {
      const obj = {
        cadastro: 'SIM-NAO',
        cabecalho: 'Conselhos Motivacionais diários',
        dataList: [
          { nome: 'Sim', descricao: 'Sim' },
          { nome: 'Não', descricao: 'Não' },
        ],
      };
      resolve(obj);
    });
  }
}
