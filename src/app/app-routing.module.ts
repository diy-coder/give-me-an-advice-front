import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormConselhoComponent } from './componentes/forms/conselho/form-conselho/form-conselho.component';
import { ListConselhoComponent } from './componentes/forms/conselho/list-conselho/list-conselho.component';
import { FormDicaComponent } from './componentes/forms/dica/form-dica/form-dica.component';
import { ListDicaComponent } from './componentes/forms/dica/list-dica/list-dica.component';
import { HomeComponent } from './componentes/forms/home/home.component';

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
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
