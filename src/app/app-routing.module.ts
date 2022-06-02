import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { SimNaoComponent } from './componentes/forms/apresentacao/sim-nao/sim-nao.component';
import { FormConselhoComponent } from './componentes/forms/conselho/form-conselho/form-conselho.component';
import { ListConselhoComponent } from './componentes/forms/conselho/list-conselho/list-conselho.component';
import { FormDicaComponent } from './componentes/forms/dica/form-dica/form-dica.component';
import { ListDicaComponent } from './componentes/forms/dica/list-dica/list-dica.component';
import { HomeComponent } from './componentes/forms/home/home.component';
import { FormMotivacionalComponent } from './componentes/forms/motivacional/form-motivacional/form-motivacional.component';
import { ListMotivacionalComponent } from './componentes/forms/motivacional/list-motivacional/list-motivacional.component';
import { AuthGuard } from './guards/auth.guard';

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
    canActivate: [AuthGuard],
  },
  {
    path: 'dicas',
    component: ListDicaComponent,
  },
  {
    path: 'dicas/:identificador',
    component: FormDicaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'motivacionais',
    component: ListMotivacionalComponent,
  },
  {
    path: 'motivacionais/:identificador',
    component: FormMotivacionalComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'sim-nao',
    component: SimNaoComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
