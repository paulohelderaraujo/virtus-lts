import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Versao } from './versao';
import { MessageService } from '../message.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders().set("Content-Type", "application/json");

const apiURL: string = 'http://localhost:8080'

@Injectable({
  providedIn: 'root',
})
export class VersoesService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getVersoes(): Observable<Versao[]> {
    this.messageService.add('VersoesService: fetched versoes');
    const url = `${apiURL}/versoes`
    return this.http.get<Versao[]>(url)
  }

  saveVersao(versao: Versao): Observable<Versao> {
    this.messageService.add('VersoesService: versao saved');
    const url = `${apiURL}/versao`
    versao.id = 0
    const versaoStr = JSON.stringify(versao)
    console.log('saveVersao '+versao.name)
    return this.http.post<Versao>(url, versaoStr, {headers})
  }

  updateVersao(versao: Versao): Observable<Versao[]> {
    this.messageService.add('VersoesService: versao updated')
    const url = `${apiURL}/versao/`+versao.id
    const versaoStr = JSON.stringify(versao)
    console.log('updateVersoes '+versao.id+' - '+versao.name)
    return this.http.put<Versao[]>(url, versaoStr, {headers})
  }

  deleteVersao(id: number): Observable<Versao[]> {
    const url = `${apiURL}/versao/${id}`
    this.messageService.add('VersoesService: fetched versoes')
    return this.http.delete<Versao[]>(url, {headers})
  }

  getVersao(id: number | string) {
    console.log('id: '+id)
    return this.getVersoes().pipe(
      map((versoes: Versao[]) => versoes.find(versao => versao.id === +id)!)
    );
  }
}
