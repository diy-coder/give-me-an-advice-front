import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormConselhoComponent } from './componentes/forms/conselho/form-conselho/form-conselho.component';
import { ListConselhoComponent } from './componentes/forms/conselho/list-conselho/list-conselho.component';
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
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
