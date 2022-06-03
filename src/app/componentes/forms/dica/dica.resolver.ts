import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { DicaService } from './dica.service';

@Injectable({ providedIn: 'root' })
export class DicaResolver implements Resolve<Promise<any>> {
  constructor(private dicaService: DicaService) {}

  resolve(): Promise<any> {
    return new Promise((resolve) => {
      this.dicaService.getAll().then((data) => {
        const obj = {
          cadastro: 'DICAS',
          cabecalho: 'Dicas diárias',
          dataList: data,
        };
        resolve(obj);
      });
    });
  }
}
