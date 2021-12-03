import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';
import { UsuariosDetailComponent } from './usuarios-detail/usuarios-detail.component';

import { UsuariosRoutingModule } from './usuarios-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsuariosRoutingModule
  ],
  declarations: [
    UsuariosListComponent,
    UsuariosDetailComponent
  ]
})
export class UsuariosModule {}
