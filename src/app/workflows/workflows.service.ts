import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Workflow } from './workflow';
import { MessageService } from '../message.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders().set("Content-Type", "application/json");

const apiURL: string = 'http://localhost:8080'

@Injectable({
  providedIn: 'root',
})
export class WorkflowsService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getWorkflows(): Observable<Workflow[]> {
    this.messageService.add('WorkflowsService: fetched workflows');
    const url = `${apiURL}/workflows`
    return this.http.get<Workflow[]>(url)
  }

  saveWorkflow(workflow: Workflow): Observable<Workflow> {
    this.messageService.add('WorkflowsService: workflow saved');
    const url = `${apiURL}/workflow`
    workflow.id = 0
    const workflowStr = JSON.stringify(workflow)
    console.log('saveWorkflow '+workflow.name)
    return this.http.post<Workflow>(url, workflowStr, {headers})
  }

  updateWorkflow(workflow: Workflow): Observable<Workflow[]> {
    this.messageService.add('WorkflowsService: workflow updated')
    const url = `${apiURL}/workflow/`+workflow.id
    const workflowStr = JSON.stringify(workflow)
    console.log('updateWorkflows '+workflow.id+' - '+workflow.name)
    return this.http.put<Workflow[]>(url, workflowStr, {headers})
  }

  deleteWorkflow(id: number): Observable<Workflow[]> {
    const url = `${apiURL}/workflow/${id}`
    this.messageService.add('WorkflowsService: fetched workflows')
    return this.http.delete<Workflow[]>(url, {headers})
  }

  getWorkflow(id: number | string) {
    console.log('id: '+id)
    return this.getWorkflows().pipe(
      map((workflows: Workflow[]) => workflows.find(workflow => workflow.id === +id)!)
    );
  }
}
