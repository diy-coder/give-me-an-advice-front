import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ApresentacaoComponent } from './apresentacao.component';

@NgModule({
  declarations: [ApresentacaoComponent],
  imports: [CommonModule, MatProgressBarModule, MatIconModule, MatButtonModule],
})
export class ApresentacaoModule {}
