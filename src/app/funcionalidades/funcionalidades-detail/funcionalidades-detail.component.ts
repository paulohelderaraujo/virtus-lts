import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { FuncionalidadesService } from '../funcionalidades.service';
import { Funcionalidade } from '../funcionalidade';

@Component({
  selector: 'app-funcionalidades-detail',
  templateUrl: './funcionalidades-detail.component.html',
  styleUrls: ['./funcionalidades-detail.component.css']
})
export class FuncionalidadesDetailComponent implements OnInit {
  funcionalidade$!: Observable<Funcionalidade>
  funcionalidade:Funcionalidade={
    id:0,
    name: "",
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: FuncionalidadesService
  ) {}

  ngOnInit() {
    this.funcionalidade$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getFuncionalidade(params.get('id')!)
      )
    );
  }

  update(funcionalidade:Funcionalidade, name:string){
    console.log('Updating '+name)
    this.funcionalidade = funcionalidade
    this.service.updateFuncionalidade(this.funcionalidade).subscribe(()=>{this.refresh()})
  }

  delete(id:number){
    console.log('Deleting '+id)
    this.funcionalidade.id = id
    this.service.deleteFuncionalidade(id).subscribe(()=>{this.refresh()})
  }

  save(argName:string) {
    this.funcionalidade.id = 0
    this.funcionalidade.name = argName
    console.log('Saving '+argName)
    this.service.saveFuncionalidade(this.funcionalidade).subscribe(()=>{this.refresh()})
  }

  refresh() {
    this.router.navigate(['/funcionalidades']);
  }

}
