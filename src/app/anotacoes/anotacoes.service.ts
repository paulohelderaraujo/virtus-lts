import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Anotacao } from './anotacao';
import { MessageService } from '../message.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders().set("Content-Type", "application/json");

const apiURL: string = 'http://localhost:8080'

@Injectable({
  providedIn: 'root',
})
export class AnotacoesService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getAnotacoes(): Observable<Anotacao[]> {
    this.messageService.add('AnotacaoService: fetched anotacoes');
    const url = `${apiURL}/anotacoes`
    return this.http.get<Anotacao[]>(url)
  }

  saveAnotacao(anotacao: Anotacao): Observable<Anotacao> {
    this.messageService.add('AnotacoesService: anotacao saved');
    const url = `${apiURL}/anotacao`
    anotacao.id = 0
    const anotacaoStr = JSON.stringify(anotacao)
    console.log('saveAnotacao '+anotacao.name)
    return this.http.post<Anotacao>(url, anotacaoStr, {headers})
  }

  updateAnotacao(anotacao: Anotacao): Observable<Anotacao[]> {
    this.messageService.add('AnotacaoService: anotacao updated')
    const url = `${apiURL}/anotacao/`+anotacao.id
    const anotacaoStr = JSON.stringify(anotacao)
    console.log('updateAnotacao '+anotacao.id+' - '+anotacao.name)
    return this.http.put<Anotacao[]>(url, anotacaoStr, {headers})
  }

  deleteAnotacao(id: number): Observable<Anotacao[]> {
    const url = `${apiURL}/anotacao/${id}`
    this.messageService.add('AnotacaoService: fetched anotacoes')
    return this.http.delete<Anotacao[]>(url, {headers})
  }

  getAnotacao(id: number | string) {
    console.log('id: '+id)
    return this.getAnotacoes().pipe(
      map((anotacoes: Anotacao[]) => anotacoes.find(anotacao => anotacao.id === +id)!)
    );
  }
}
