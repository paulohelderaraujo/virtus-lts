import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosModule } from './usuarios/usuarios.module';
import { EntidadesModule } from './entidades/entidades.module';
import { StatusesModule } from './status/status.module';
import { PerfisModule } from './perfis/perfis.module';
import { FuncionalidadesModule } from './funcionalidades/funcionalidades.module';
import { AcoesModule } from './acoes/acoes.module';
import { WorkflowsModule } from './workflows/workflows.module';
import { EscritoriosModule } from './escritorios/escritorios.module';
import { ChamadosModule } from './chamados/chamados.module';
import { VersoesModule } from './versoes/versoes.module';
import { RadaresModule } from './radares/radares.module';
import { AnotacoesModule } from './anotacoes/anotacoes.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    StatusesModule,
    HttpClientModule,
    AppRoutingModule,
    AcoesModule,
    AnotacoesModule,
    EntidadesModule,
    ChamadosModule,
    EscritoriosModule,
    FuncionalidadesModule,
    PerfisModule,
    RadaresModule,
    UsuariosModule,
    WorkflowsModule,
    VersoesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {}
}
