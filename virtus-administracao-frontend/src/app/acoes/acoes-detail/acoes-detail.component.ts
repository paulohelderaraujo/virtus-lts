import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { AcoesService } from '../acoes.service';
import { Acao } from '../acao';

@Component({
  selector: 'app-acoes-detail',
  templateUrl: './acoes-detail.component.html',
  styleUrls: ['./acoes-detail.component.css']
})
export class AcoesDetailComponent implements OnInit {
  acao$!: Observable<Acao>
  acao:Acao={
    id:0,
    name: "",
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AcoesService
  ) {}

  ngOnInit() {
    this.acao$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getAcao(params.get('id')!)
      )
    );
  }

  update(acao:Acao, name:string){
    console.log('Updating '+name)
    this.acao = acao
    this.service.updateAcao(this.acao).subscribe(()=>{this.refresh()})
  }

  delete(id:number){
    console.log('Deleting '+id)
    this.acao.id = id
    this.service.deleteAcao(id).subscribe(()=>{this.refresh()})
  }

  save(argName:string) {
    this.acao.id = 0
    this.acao.name = argName
    console.log('Saving '+argName)
    this.service.saveAcao(this.acao).subscribe(()=>{this.refresh()})
  }

  refresh() {
    this.router.navigate(['/acoes']);
  }

}
