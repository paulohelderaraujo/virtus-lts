import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EntidadesComponent } from './entidades/entidades.component';
import { StatusesModule } from './status/status.module';
import { PerfisComponent } from './perfis/perfis.component';
import { FuncionalidadesComponent } from './funcionalidades/funcionalidades.component';
import { AcoesModule } from './acoes/acoes.module';
import { WorkflowsComponent } from './workflows/workflows.component';
import { EscritoriosComponent } from './escritorios/escritorios.component';
import { ChamadosComponent } from './chamados/chamados.component';
import { VersoesComponent } from './versoes/versoes.component';
import { RadaresComponent } from './radares/radares.component';
import { AnotacoesComponent } from './anotacoes/anotacoes.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    EntidadesComponent,
    PerfisComponent,
    FuncionalidadesComponent,
    WorkflowsComponent,
    EscritoriosComponent,
    ChamadosComponent,
    VersoesComponent,
    RadaresComponent,
    AnotacoesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    StatusesModule,
    HttpClientModule,
    AppRoutingModule,
    AcoesModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {}
}
