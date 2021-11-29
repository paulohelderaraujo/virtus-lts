import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Status } from './status';
import { MessageService } from '../message.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders().set("Content-Type", "application/json");

const apiURL: string = 'http://localhost:8080'

@Injectable({
  providedIn: 'root',
})
export class StatusService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getStatuses(): Observable<Status[]> {
    this.messageService.add('StatusService: fetched statuses');
    const url = `${apiURL}/statuses`
    return this.http.get<Status[]>(url)
  }

  saveStatus(status: Status): Observable<Status> {
    this.messageService.add('StatusService: status saved');
    const url = `${apiURL}/status`
    status.id = 0
    const statusStr = JSON.stringify(status)
    console.log('saveStatus '+status.name)
    return this.http.post<Status>(url, statusStr, {headers})
  }
  
  updateStatus(status: Status): Observable<Status[]> {
    this.messageService.add('StatusService: status updated')
    const url = `${apiURL}/status/`+status.id
    const statusStr = JSON.stringify(status)
    console.log('updateStatus '+status.id+' - '+status.name)
    return this.http.put<Status[]>(url, statusStr, {headers})
  }

  deleteStatus(id: number): Observable<Status[]> {
    const url = `${apiURL}/status/${id}`
    this.messageService.add('StatusService: fetched statuses')
    return this.http.delete<Status[]>(url, {headers})
  }

  getStatus(id: number | string) {
    console.log('id: '+id)
    return this.getStatuses().pipe(
      map((statuses: Status[]) => statuses.find(status => status.id === +id)!)
    );
  }
}

function s<T>(arg0: string, s: any): Observable<Status> {
  throw new Error('Function not implemented.');
}
