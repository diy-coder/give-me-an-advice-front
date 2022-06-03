import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ApresentacaoComponent } from './componentes/forms/apresentacao/apresentacao.component';
import { ConselhoResolver } from './componentes/forms/conselho/conselho.resolver';
import { FormConselhoComponent } from './componentes/forms/conselho/form-conselho/form-conselho.component';
import { ListConselhoComponent } from './componentes/forms/conselho/list-conselho/list-conselho.component';
import { DicaResolver } from './componentes/forms/dica/dica.resolver';
import { FormDicaComponent } from './componentes/forms/dica/form-dica/form-dica.component';
import { ListDicaComponent } from './componentes/forms/dica/list-dica/list-dica.component';
import { HomeComponent } from './componentes/forms/home/home.component';
import { FormMotivacionalComponent } from './componentes/forms/motivacional/form-motivacional/form-motivacional.component';
import { ListMotivacionalComponent } from './componentes/forms/motivacional/list-motivacional/list-motivacional.component';
import { MotivacionalResolver } from './componentes/forms/motivacional/motivacional.resolver';
import { AuthGuard } from './guards/auth.guard';
import { SimNaoResolver } from './resolvers/sim-nao.resolver';

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
    path: 'apresentacao/dicas',
    component: ApresentacaoComponent,
    resolve: { data: DicaResolver },
  },
  {
    path: 'apresentacao/conselhos',
    component: ApresentacaoComponent,
    resolve: { data: ConselhoResolver },
  },
  {
    path: 'apresentacao/motivacionais',
    component: ApresentacaoComponent,
    resolve: { data: MotivacionalResolver },
  },
  {
    path: 'apresentacao/sim-nao',
    component: ApresentacaoComponent,
    resolve: { data: SimNaoResolver },
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
