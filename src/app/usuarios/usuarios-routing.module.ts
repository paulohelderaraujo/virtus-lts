import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';
import { UsuariosDetailComponent } from './usuarios-detail/usuarios-detail.component';

const UsuariosRoutes: Routes = [
  { path: 'usuarios',  component: UsuariosListComponent, data: { animation: 'usuarios' } },
  { path: 'usuario/:id', component: UsuariosDetailComponent, data: { animation: 'usuario' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(UsuariosRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsuariosRoutingModule { }
