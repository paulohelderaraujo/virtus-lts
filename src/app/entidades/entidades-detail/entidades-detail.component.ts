import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { EntidadesService } from '../entidades.service';
import { Entidade } from '../entidade';

@Component({
  selector: 'app-entidades-detail',
  templateUrl: './entidades-detail.component.html',
  styleUrls: ['./entidades-detail.component.css']
})
export class EntidadesDetailComponent implements OnInit {
  entidade$!: Observable<Entidade>
  entidade:Entidade={
    id:0,
    name: "",
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: EntidadesService
  ) {}

  ngOnInit() {
    this.entidade$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getEntidade(params.get('id')!)
      )
    );
  }

  update(entidade:Entidade, name:string){
    console.log('Updating '+name)
    this.entidade = entidade
    this.service.updateEntidade(this.entidade).subscribe(()=>{this.refresh()})
  }

  delete(id:number){
    console.log('Deleting '+id)
    this.entidade.id = id
    this.service.deleteEntidade(id).subscribe(()=>{this.refresh()})
  }

  save(argName:string) {
    this.entidade.id = 0
    this.entidade.name = argName
    console.log('Saving '+argName)
    this.service.saveEntidade(this.entidade).subscribe(()=>{this.refresh()})
  }

  refresh() {
    this.router.navigate(['/entidades']);
  }

}
