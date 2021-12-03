import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Funcionalidade } from './funcionalidade';
import { MessageService } from '../message.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders().set("Content-Type", "application/json");

const apiURL: string = 'http://localhost:8080'

@Injectable({
  providedIn: 'root',
})
export class FuncionalidadesService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getFuncionalidades(): Observable<Funcionalidade[]> {
    this.messageService.add('FuncionalidadesService: fetched funcionalidades');
    const url = `${apiURL}/funcionalidades`
    return this.http.get<Funcionalidade[]>(url)
  }

  saveFuncionalidade(funcionalidade: Funcionalidade): Observable<Funcionalidade> {
    this.messageService.add('FuncionalidadesService: funcionalidade saved');
    const url = `${apiURL}/funcionalidade`
    funcionalidade.id = 0
    const funcionalidadeStr = JSON.stringify(funcionalidade)
    console.log('saveFuncionalidade '+funcionalidade.name)
    return this.http.post<Funcionalidade>(url, funcionalidadeStr, {headers})
  }

  updateFuncionalidade(funcionalidade: Funcionalidade): Observable<Funcionalidade[]> {
    this.messageService.add('FuncionalidadesService: funcionalidade updated')
    const url = `${apiURL}/funcionalidade/`+funcionalidade.id
    const funcionalidadeStr = JSON.stringify(funcionalidade)
    console.log('updateFuncionalidades '+funcionalidade.id+' - '+funcionalidade.name)
    return this.http.put<Funcionalidade[]>(url, funcionalidadeStr, {headers})
  }

  deleteFuncionalidade(id: number): Observable<Funcionalidade[]> {
    const url = `${apiURL}/funcionalidade/${id}`
    this.messageService.add('FuncionalidadesService: fetched funcionalidades')
    return this.http.delete<Funcionalidade[]>(url, {headers})
  }

  getFuncionalidade(id: number | string) {
    console.log('id: '+id)
    return this.getFuncionalidades().pipe(
      map((funcionalidades: Funcionalidade[]) => funcionalidades.find(funcionalidade => funcionalidade.id === +id)!)
    );
  }
}
