import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Radar } from './radar';
import { MessageService } from '../message.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders().set("Content-Type", "application/json");

const apiURL: string = 'http://localhost:8080'

@Injectable({
  providedIn: 'root',
})
export class RadaresService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getRadares(): Observable<Radar[]> {
    this.messageService.add('RadaresService: fetched radares');
    const url = `${apiURL}/radares`
    return this.http.get<Radar[]>(url)
  }

  saveRadar(radar: Radar): Observable<Radar> {
    this.messageService.add('RadaresService: radar saved');
    const url = `${apiURL}/radar`
    radar.id = 0
    const radarStr = JSON.stringify(radar)
    console.log('saveRadar '+radar.name)
    return this.http.post<Radar>(url, radarStr, {headers})
  }

  updateRadar(radar: Radar): Observable<Radar[]> {
    this.messageService.add('RadaresService: radar updated')
    const url = `${apiURL}/radar/`+radar.id
    const radarStr = JSON.stringify(radar)
    console.log('updateRadar '+radar.id+' - '+radar.name)
    return this.http.put<Radar[]>(url, radarStr, {headers})
  }

  deleteRadar(id: number): Observable<Radar[]> {
    const url = `${apiURL}/radar/${id}`
    this.messageService.add('RadaresService: fetched radares')
    return this.http.delete<Radar[]>(url, {headers})
  }

  getRadar(id: number | string) {
    console.log('id: '+id)
    return this.getRadares().pipe(
      map((radar: Radar[]) => radar.find(radar => radar.id === +id)!)
    );
  }
}
