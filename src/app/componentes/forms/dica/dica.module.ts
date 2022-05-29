import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormDicaModule } from './form-dica/form-dica.module';
import { ListDicaModule } from './list-dica/list-dica.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ListDicaModule, FormDicaModule],
})
export class DicaModule {}
