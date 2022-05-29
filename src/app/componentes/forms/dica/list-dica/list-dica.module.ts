import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { TabelasModule } from 'src/app/shared/tabelas/tabelas.module';
import { ListDicaComponent } from './list-dica.component';

@NgModule({
  declarations: [ListDicaComponent],
  imports: [CommonModule, TabelasModule, DirectivesModule],
  exports: [ListDicaComponent],
})
export class ListDicaModule {}
