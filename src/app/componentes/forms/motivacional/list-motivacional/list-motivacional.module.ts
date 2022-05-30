import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { TabelasModule } from 'src/app/shared/tabelas/tabelas.module';
import { ListMotivacionalComponent } from './list-motivacional.component';

@NgModule({
  declarations: [ListMotivacionalComponent],
  imports: [CommonModule, TabelasModule, DirectivesModule],
  exports: [ListMotivacionalComponent],
})
export class ListMotivacionalModule {}
