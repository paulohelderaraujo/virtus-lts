import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Perfil } from './perfil';
import { MessageService } from '../message.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders().set("Content-Type", "application/json");

const apiURL: string = 'http://localhost:8080'

@Injectable({
  providedIn: 'root',
})
export class PerfisService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getPerfis(): Observable<Perfil[]> {
    this.messageService.add('PerfisService: fetched perfis');
    const url = `${apiURL}/perfis`
    return this.http.get<Perfil[]>(url)
  }

  savePerfil(perfil: Perfil): Observable<Perfil> {
    this.messageService.add('PerfisService: perfil saved');
    const url = `${apiURL}/perfil`
    perfil.id = 0
    const perfilStr = JSON.stringify(perfil)
    console.log('savePerfil '+perfil.name)
    return this.http.post<Perfil>(url, perfilStr, {headers})
  }

  updatePerfil(perfil: Perfil): Observable<Perfil[]> {
    this.messageService.add('PerfisService: perfil updated')
    const url = `${apiURL}/perfil/`+perfil.id
    const perfilStr = JSON.stringify(perfil)
    console.log('updatePerfis '+perfil.id+' - '+perfil.name)
    return this.http.put<Perfil[]>(url, perfilStr, {headers})
  }

  deletePerfil(id: number): Observable<Perfil[]> {
    const url = `${apiURL}/perfil/${id}`
    this.messageService.add('PerfisService: fetched perfis')
    return this.http.delete<Perfil[]>(url, {headers})
  }

  getPerfil(id: number | string) {
    console.log('id: '+id)
    return this.getPerfis().pipe(
      map((perfis: Perfil[]) => perfis.find(perfil => perfil.id === +id)!)
    );
  }
}
