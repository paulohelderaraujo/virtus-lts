import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuncionalidadesListComponent } from './funcionalidades-list/funcionalidades-list.component';
import { FuncionalidadesDetailComponent } from './funcionalidades-detail/funcionalidades-detail.component';

const funcionalidadesRoutes: Routes = [
  { path: 'funcionalidades',  component: FuncionalidadesListComponent, data: { animation: 'funcionalidade' } },
  { path: 'funcionalidade/:id', component: FuncionalidadesDetailComponent, data: { animation: 'funcionalidade' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(funcionalidadesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FuncionalidadesRoutingModule { }
