import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EscritoriosListComponent } from './escritorios-list/escritorios-list.component';
import { EscritoriosDetailComponent } from './escritorios-detail/escritorios-detail.component';

import { EscritoriosRoutingModule } from './escritorios-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EscritoriosRoutingModule
  ],
  declarations: [
    EscritoriosListComponent,
    EscritoriosDetailComponent
  ]
})
export class EscritoriosModule {}
