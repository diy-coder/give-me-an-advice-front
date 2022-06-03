import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ConselhoService } from './conselho.service';

@Injectable({ providedIn: 'root' })
export class ConselhoResolver implements Resolve<Promise<any[]>> {
  constructor(private conselhoService: ConselhoService) {}

  resolve(): Promise<any> {
    return new Promise((resolve) => {
      this.conselhoService.getAll().then((data) => {
        const obj = {
          cadastro: 'CONSELHOS',
          cabecalho: 'Conselhos diários',
          dataList: data,
        };
        resolve(obj);
      });
    });
  }
}
