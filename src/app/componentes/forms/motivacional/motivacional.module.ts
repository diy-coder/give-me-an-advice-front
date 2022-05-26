import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormMotivacionalModule } from './form-motivacional/form-motivacional.module';
import { ListMotivacionalModule } from './list-motivacional/list-motivacional.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ListMotivacionalModule, FormMotivacionalModule],
})
export class MotivacionalModule {}
