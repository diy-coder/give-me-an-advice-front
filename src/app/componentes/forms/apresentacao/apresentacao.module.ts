import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ApresentacaoComponent } from './apresentacao.component';

@NgModule({
  declarations: [ApresentacaoComponent],
  imports: [CommonModule, MatProgressBarModule],
})
export class ApresentacaoModule {}
