import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Usuario } from './usuario';
import { MessageService } from '../message.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders().set("Content-Type", "application/json");

const apiURL: string = 'http://localhost:8080'

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]> {
    this.messageService.add('UsuariosService: fetched usuarios');
    const url = `${apiURL}/usuarios`
    return this.http.get<Usuario[]>(url)
  }

  saveUsuario(usuario: Usuario): Observable<Usuario> {
    this.messageService.add('UsuarioService: usuario saved');
    const url = `${apiURL}/usuario`
    usuario.id = 0
    const usuarioStr = JSON.stringify(usuario)
    console.log('saveUsuario '+usuario.name)
    return this.http.post<Usuario>(url, usuarioStr, {headers})
  }

  updateUsuario(usuario: Usuario): Observable<Usuario[]> {
    this.messageService.add('UsuariosService: usuario updated')
    const url = `${apiURL}/usuario/`+usuario.id
    const usuarioStr = JSON.stringify(usuario)
    console.log('updateUsuarios '+usuario.id+' - '+usuario.name)
    return this.http.put<Usuario[]>(url, usuarioStr, {headers})
  }

  deleteUsuario(id: number): Observable<Usuario[]> {
    const url = `${apiURL}/usuario/${id}`
    this.messageService.add('UsuariosService: fetched usuarios')
    return this.http.delete<Usuario[]>(url, {headers})
  }

  getUsuario(id: number | string) {
    console.log('id: '+id)
    return this.getUsuarios().pipe(
      map((usuarios: Usuario[]) => usuarios.find(usuario => usuario.id === +id)!)
    );
  }
}
