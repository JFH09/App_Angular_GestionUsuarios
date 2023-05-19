import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ObtenerInfoLocalStorageService } from 'src/app/servicios/obtener-info-local-storage.service';
import { ObtenerUsuariosService } from 'src/app/servicios/obtener-usuarios.service';
import { UsuarioEstudiante } from 'src/app/usuarios/interfaces/usuarioEstudiante.model';

@Component({
  selector: 'app-contenido-infousuarios',
  templateUrl: './contenido-infousuarios.component.html',
  styleUrls: ['./contenido-infousuarios.component.css']
})
export class ContenidoInfousuariosComponent implements OnInit{

  
  public estudianteModificar !: UsuarioEstudiante;
  public usuarioEliminar !: UsuarioEstudiante;
  public mostrarUsuariosPerfil !: string;
  public listaEstudiantes :UsuarioEstudiante[]  = [];
   public listaInfoUsuarios !: any;
   public listaUsers  :any[] = [];
   //@Input() usuario !: UsuarioEstudiante;
  constructor(private activateRoute: ActivatedRoute, private obtenerInfoLocalStorage :ObtenerInfoLocalStorageService){
  
  }
  
    ngOnInit(): void {
      this.activateRoute.params.subscribe(parametro => {
        for (const key in parametro) {
          this.mostrarUsuariosPerfil = parametro[key];
    
        }
        console.log(this.mostrarUsuariosPerfil)
      });
  
      //console.log(this.obtenerUsuariosService.obtenerUsuarios());
      this.listaInfoUsuarios  = this.obtenerInfoLocalStorage.getItem("listaUsuarios");
      console.log(this.listaInfoUsuarios)
      
      this.listaUsers = JSON.parse(this.listaInfoUsuarios);
console.log(this.listaUsers);

    // this.listaInfoUsuarios = listaUsuarios;
      console.log(this.listaInfoUsuarios);
    }
  
  alumnoModificar(usuario: UsuarioEstudiante){
    this.estudianteModificar  = usuario;
  }

  eliminarUsuario(usuario: UsuarioEstudiante){
    this.usuarioEliminar  = usuario;
  }
}
