import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnotacoesListComponent } from './anotacoes-list/anotacoes-list.component';
import { AnotacoesDetailComponent } from './anotacoes-detail/anotacoes-detail.component';

const anotacaoRoutes: Routes = [
  { path: 'anotacoes',  component: AnotacoesListComponent, data: { animation: 'anotacoes' } },
  { path: 'anotacao/:id', component: AnotacoesDetailComponent, data: { animation: 'anotacao' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(anotacaoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AnotacoesRoutingModule { }
