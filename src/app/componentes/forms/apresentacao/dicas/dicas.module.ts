import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ApresentacaoDicasComponent } from './dicas.component';

@NgModule({
  declarations: [ApresentacaoDicasComponent],
  imports: [CommonModule, MatProgressBarModule],
  exports: [ApresentacaoDicasComponent],
})
export class ApresentacaoDicasModule {}
