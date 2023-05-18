import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {UsuarioActions} from '../../store/usuario.actions';
import { selectUsuarioState } from '../../store/usuario.selectors';
import { UsuarioEstudiante } from '../../interfaces/usuarioEstudiante.model';

@Component({
  selector: 'app-contenido-usuarios',
  templateUrl: './contenido-usuarios.component.html',
  styleUrls: ['./contenido-usuarios.component.css']
})
export class ContenidoUsuariosComponent implements OnInit{
  
  public listaUsuarios: UsuarioEstudiante[]=[];
  constructor(private store: Store){}
  ngOnInit(): void {
    this.store.dispatch(UsuarioActions.loadUsuarios());
    this.store
      .select(selectUsuarioState)
      .subscribe((response) => (this.listaUsuarios = response.data));
  }

}
