import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Escritorio } from './escritorio';
import { MessageService } from '../message.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders().set("Content-Type", "application/json");

const apiURL: string = 'http://localhost:8080'

@Injectable({
  providedIn: 'root',
})
export class EscritoriosService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getEscritorios(): Observable<Escritorio[]> {
    this.messageService.add('EscritoriosService: fetched escritorios');
    const url = `${apiURL}/escritorios`
    return this.http.get<Escritorio[]>(url)
  }

  saveEscritorio(escritorio: Escritorio): Observable<Escritorio> {
    this.messageService.add('EscritoriosService: escritorio saved');
    const url = `${apiURL}/escritorio`
    escritorio.id = 0
    const escritorioStr = JSON.stringify(escritorio)
    console.log('saveEscritorio '+escritorio.name)
    return this.http.post<Escritorio>(url, escritorioStr, {headers})
  }

  updateEscritorio(escritorio: Escritorio): Observable<Escritorio[]> {
    this.messageService.add('EscritorioService: escritorio updated')
    const url = `${apiURL}/escritorio/`+escritorio.id
    const escritorioStr = JSON.stringify(escritorio)
    console.log('updateEscritorio '+escritorio.id+' - '+escritorio.name)
    return this.http.put<Escritorio[]>(url, escritorioStr, {headers})
  }

  deleteEscritorio(id: number): Observable<Escritorio[]> {
    const url = `${apiURL}/escritorio/${id}`
    this.messageService.add('EscritorioService: fetched escritorio')
    return this.http.delete<Escritorio[]>(url, {headers})
  }

  getEscritorio(id: number | string) {
    console.log('id: '+id)
    return this.getEscritorios().pipe(
      map((escritorio: Escritorio[]) => escritorio.find(escritorio => escritorio.id === +id)!)
    );
  }
}
