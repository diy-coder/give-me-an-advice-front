import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApresentacaoDicasModule } from './dicas/dicas.module';
import { SimNaoModule } from './sim-nao/sim-nao.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SimNaoModule, ApresentacaoDicasModule],
})
export class ApresentacaoModule {}
