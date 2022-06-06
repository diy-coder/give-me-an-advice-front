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
          frase:
            'Concentre-se em algo; Deve ser algo cuja resposta seja fechada, nao interpretativa. Algo que você esperaria de um amigo ' +
            'no estilo. [Sim - Não - Você consegue - Melhor deixar pra lá - Insiste mais uma vez...]. Após se concentrar, clique no botão ' +
            ' e recebe sua resposta',
          cabecalho: 'Dicas diárias',
          dataList: data,
        };
        resolve(obj);
      });
    });
  }
}
