import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConselhoModule } from './conselho/conselho.module';
import { DicaModule } from './dica/dica.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ConselhoModule, HomeModule, DicaModule],
})
export class FormsModule {}
