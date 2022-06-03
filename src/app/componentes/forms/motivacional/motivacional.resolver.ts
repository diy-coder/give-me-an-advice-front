import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { MotivacionalService } from './motivacional.service';

@Injectable({ providedIn: 'root' })
export class MotivacionalResolver implements Resolve<Promise<any[]>> {
  constructor(private motivacionalService: MotivacionalService) {}

  resolve(): Promise<any> {
    return new Promise((resolve) => {
      this.motivacionalService.getAll().then((data) => {
        const obj = {
          cadastro: 'MOTIVACIONAL',
          cabecalho: 'Conselhos Motivacionais diários',
          dataList: data,
        };
        resolve(obj);
      });
    });
  }
}
