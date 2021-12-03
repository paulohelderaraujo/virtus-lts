import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { AnotacoesService } from '../anotacoes.service';
import { Anotacao } from '../anotacao';

@Component({
  selector: 'app-anotacoes-detail',
  templateUrl: './anotacoes-detail.component.html',
  styleUrls: ['./anotacoes-detail.component.css']
})
export class AnotacoesDetailComponent implements OnInit {
  anotacao$!: Observable<Anotacao>
  anotacao:Anotacao={
    id:0,
    name: "",
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AnotacoesService
  ) {}

  ngOnInit() {
    this.anotacao$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getAnotacao(params.get('id')!)
      )
    );
  }

  update(anotacao:Anotacao, name:string){
    console.log('Updating '+name)
    this.anotacao = anotacao
    this.service.updateAnotacao(this.anotacao).subscribe(()=>{this.refresh()})
  }

  delete(id:number){
    console.log('Deleting '+id)
    this.anotacao.id = id
    this.service.deleteAnotacao(id).subscribe(()=>{this.refresh()})
  }

  save(argName:string) {
    this.anotacao.id = 0
    this.anotacao.name = argName
    console.log('Saving '+argName)
    this.service.saveAnotacao(this.anotacao).subscribe(()=>{this.refresh()})
  }

  refresh() {
    this.router.navigate(['/anotacoes']);
  }

}
