import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FuncionalidadesListComponent } from './funcionalidades-list/funcionalidades-list.component';
import { FuncionalidadesDetailComponent } from './funcionalidades-detail/funcionalidades-detail.component';

import { FuncionalidadesRoutingModule } from './funcionalidades-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FuncionalidadesRoutingModule
  ],
  declarations: [
    FuncionalidadesListComponent,
    FuncionalidadesDetailComponent
  ]
})
export class FuncionalidadesModule {}
