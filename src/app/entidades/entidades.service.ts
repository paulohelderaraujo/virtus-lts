import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Entidade } from './entidade';
import { MessageService } from '../message.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders().set("Content-Type", "application/json");

const apiURL: string = 'http://localhost:8080'

@Injectable({
  providedIn: 'root',
})
export class EntidadesService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getEntidades(): Observable<Entidade[]> {
    this.messageService.add('EntidadesService: fetched entidades');
    const url = `${apiURL}/entidades`
    return this.http.get<Entidade[]>(url)
  }

  saveEntidade(entidade: Entidade): Observable<Entidade> {
    this.messageService.add('EntidadesService: entidade saved');
    const url = `${apiURL}/entidade`
    entidade.id = 0
    const entidadeStr = JSON.stringify(entidade)
    console.log('saveEntidade '+entidade.name)
    return this.http.post<Entidade>(url, entidadeStr, {headers})
  }

  updateEntidade(entidade: Entidade): Observable<Entidade[]> {
    this.messageService.add('EntidadesService: entidade updated')
    const url = `${apiURL}/entidade/`+entidade.id
    const entidadeStr = JSON.stringify(entidade)
    console.log('updateEntidades '+entidade.id+' - '+entidade.name)
    return this.http.put<Entidade[]>(url, entidadeStr, {headers})
  }

  deleteEntidade(id: number): Observable<Entidade[]> {
    const url = `${apiURL}/entidade/${id}`
    this.messageService.add('EntidadeService: fetched entidades')
    return this.http.delete<Entidade[]>(url, {headers})
  }

  getEntidade(id: number | string) {
    console.log('id: '+id)
    return this.getEntidades().pipe(
      map((entidades: Entidade[]) => entidades.find(entidade => entidade.id === +id)!)
    );
  }
}
