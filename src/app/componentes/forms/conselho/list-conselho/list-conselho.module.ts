import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { TabelasModule } from 'src/app/shared/tabelas/tabelas.module';
import { ListConselhoComponent } from './list-conselho.component';

@NgModule({
  declarations: [ListConselhoComponent],
  imports: [CommonModule, TabelasModule, DirectivesModule],
  exports: [ListConselhoComponent],
})
export class ListConselhoModule {}
