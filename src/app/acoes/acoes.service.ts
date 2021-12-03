import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Acao } from './acao';
import { MessageService } from '../message.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders().set("Content-Type", "application/json");

const apiURL: string = 'http://localhost:8080'

@Injectable({
  providedIn: 'root',
})
export class AcoesService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getAcoes(): Observable<Acao[]> {
    this.messageService.add('AcoesService: fetched acoes');
    const url = `${apiURL}/acoes`
    return this.http.get<Acao[]>(url)
  }

  saveAcao(acao: Acao): Observable<Acao> {
    this.messageService.add('AcoesService: acao saved');
    const url = `${apiURL}/acao`
    acao.id = 0
    const acaoStr = JSON.stringify(acao)
    console.log('saveAcao '+acao.name)
    return this.http.post<Acao>(url, acaoStr, {headers})
  }

  updateAcao(acao: Acao): Observable<Acao[]> {
    this.messageService.add('AcoesService: acao updated')
    const url = `${apiURL}/acao/`+acao.id
    const acaoStr = JSON.stringify(acao)
    console.log('updateAcoes '+acao.id+' - '+acao.name)
    return this.http.put<Acao[]>(url, acaoStr, {headers})
  }

  deleteAcao(id: number): Observable<Acao[]> {
    const url = `${apiURL}/acao/${id}`
    this.messageService.add('AcoesService: fetched acoes')
    return this.http.delete<Acao[]>(url, {headers})
  }

  getAcao(id: number | string) {
    console.log('id: '+id)
    return this.getAcoes().pipe(
      map((acoes: Acao[]) => acoes.find(acao => acao.id === +id)!)
    );
  }
}
