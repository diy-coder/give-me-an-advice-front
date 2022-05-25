import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormConselhoModule } from './form-conselho/form-conselho.module';
import { ListConselhoModule } from './list-conselho/list-conselho.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ListConselhoModule, FormConselhoModule],
})
export class ConselhoModule {}
