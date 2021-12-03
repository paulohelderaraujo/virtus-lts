import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Chamado } from './chamado';
import { MessageService } from '../message.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders().set("Content-Type", "application/json");

const apiURL: string = 'http://localhost:8080'

@Injectable({
  providedIn: 'root',
})
export class ChamadosService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getChamados(): Observable<Chamado[]> {
    this.messageService.add('ChamadosService: fetched chamados');
    const url = `${apiURL}/chamados`
    return this.http.get<Chamado[]>(url)
  }

  saveChamado(chamado: Chamado): Observable<Chamado> {
    this.messageService.add('ChamadoService: chamado saved');
    const url = `${apiURL}/chamado`
    chamado.id = 0
    const chamadoStr = JSON.stringify(chamado)
    console.log('saveChamado '+chamado.name)
    return this.http.post<Chamado>(url, chamadoStr, {headers})
  }

  updateChamado(chamado: Chamado): Observable<Chamado[]> {
    this.messageService.add('ChamadosService: chamado updated')
    const url = `${apiURL}/chamado/`+chamado.id
    const chamadoStr = JSON.stringify(chamado)
    console.log('updateChamados '+chamado.id+' - '+chamado.name)
    return this.http.put<Chamado[]>(url, chamadoStr, {headers})
  }

  deleteChamado(id: number): Observable<Chamado[]> {
    const url = `${apiURL}/chamado/${id}`
    this.messageService.add('ChamadosService: fetched chamados')
    return this.http.delete<Chamado[]>(url, {headers})
  }

  getChamado(id: number | string) {
    console.log('id: '+id)
    return this.getChamados().pipe(
      map((chamados: Chamado[]) => chamados.find(chamado => chamado.id === +id)!)
    );
  }
}
