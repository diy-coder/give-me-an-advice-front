import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SimNaoComponent } from './sim-nao.component';

@NgModule({
  declarations: [SimNaoComponent],
  imports: [CommonModule, MatProgressBarModule],
  exports: [SimNaoComponent],
})
export class SimNaoModule {}
