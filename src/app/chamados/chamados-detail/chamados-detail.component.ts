import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { ChamadosService } from '../chamados.service';
import { Chamado } from '../chamado';

@Component({
  selector: 'app-chamados-detail',
  templateUrl: './chamados-detail.component.html',
  styleUrls: ['./chamados-detail.component.css']
})
export class ChamadosDetailComponent implements OnInit {
  chamado$!: Observable<Chamado>
  chamado:Chamado={
    id:0,
    name: "",
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ChamadosService
  ) {}

  ngOnInit() {
    this.chamado$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getChamado(params.get('id')!)
      )
    );
  }

  update(chamado:Chamado, name:string){
    console.log('Updating '+name)
    this.chamado = chamado
    this.service.updateChamado(this.chamado).subscribe(()=>{this.refresh()})
  }

  delete(id:number){
    console.log('Deleting '+id)
    this.chamado.id = id
    this.service.deleteChamado(id).subscribe(()=>{this.refresh()})
  }

  save(argName:string) {
    this.chamado.id = 0
    this.chamado.name = argName
    console.log('Saving '+argName)
    this.service.saveChamado(this.chamado).subscribe(()=>{this.refresh()})
  }

  refresh() {
    this.router.navigate(['/chamados']);
  }

}
