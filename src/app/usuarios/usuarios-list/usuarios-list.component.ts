// TODO: Feature Componetized like CrisisCenter
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsuariosService } from '../usuarios.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.css']
})
export class UsuariosListComponent implements OnInit {
  usuarios$!: Observable<Usuario[]>;
  selectedId = 0;

  constructor(
    private service: UsuariosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.usuarios$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.getUsuarios();
      })
    );
  }

}
