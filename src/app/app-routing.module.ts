import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormConselhoComponent } from './componentes/forms/conselho/form-conselho/form-conselho.component';
import { ListConselhoComponent } from './componentes/forms/conselho/list-conselho/list-conselho.component';
import { FormDicaComponent } from './componentes/forms/dica/form-dica/form-dica.component';
import { ListDicaComponent } from './componentes/forms/dica/list-dica/list-dica.component';
import { HomeComponent } from './componentes/forms/home/home.component';
import { FormMotivacionalComponent } from './componentes/forms/motivacional/form-motivacional/form-motivacional.component';
import { ListMotivacionalComponent } from './componentes/forms/motivacional/list-motivacional/list-motivacional.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'conselhos',
    component: ListConselhoComponent,
  },
  {
    path: 'conselhos/:identificador',
    component: FormConselhoComponent,
  },
  {
    path: 'dicas',
    component: ListDicaComponent,
  },
  {
    path: 'dicas/:identificador',
    component: FormDicaComponent,
  },
  {
    path: 'motivacionais',
    component: ListMotivacionalComponent,
  },
  {
    path: 'motivacionais/:identificador',
    component: FormMotivacionalComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
