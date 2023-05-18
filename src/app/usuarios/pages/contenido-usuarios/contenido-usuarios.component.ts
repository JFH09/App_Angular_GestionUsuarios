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
  listaUsuarios: any = [];
  listaUsers: any[] = [];
  
//  public listaUsuarios: UsuarioEstudiante[]=[];
  //public listaUsers: UsuarioEstudiante[] =  [];
  constructor(private store: Store){}
  ngOnInit(): void {
    this.store.dispatch(UsuarioActions.loadUsuarios());
    this.store
      .select(selectUsuarioState)
      .subscribe((response) => {
      //  (this.listaUsuarios = response.data)
      this.listaUsuarios = Object.values(response.data); // Convertir el objeto en un array de valores
      this.listaUsers = this.listaUsuarios;
      });
    
    
  }


}
