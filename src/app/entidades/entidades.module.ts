import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EntidadesListComponent } from './entidades-list/entidades-list.component';
import { EntidadesDetailComponent } from './entidades-detail/entidades-detail.component';

import { EntidadesRoutingModule } from './entidades-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EntidadesRoutingModule
  ],
  declarations: [
    EntidadesListComponent,
    EntidadesDetailComponent
  ]
})
export class EntidadesModule {}
