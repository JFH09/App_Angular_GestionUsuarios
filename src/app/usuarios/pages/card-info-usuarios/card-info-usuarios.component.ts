import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsuarioEstudiante } from '../../interfaces/usuarioEstudiante.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-info-usuarios',
  templateUrl: './card-info-usuarios.component.html',
  styleUrls: ['./card-info-usuarios.component.css']
})
export class CardInfoUsuariosComponent implements OnInit{


  @Input() estudiante!: UsuarioEstudiante;
  @Output() perfilEstudiante !: String;
  @Output() alumnoModificar  =new EventEmitter<UsuarioEstudiante>();
  public mostrarUsuariosPerfil !: string;
  public nombreCompleto!: string;
  public promedio: number = 85;

  constructor(private activateRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activateRoute.params.subscribe(parametro => {
      for (const key in parametro) {
        this.mostrarUsuariosPerfil = parametro[key];
  
      }
      console.log(this.mostrarUsuariosPerfil)
    });
  }

  sacarPromedio (matematicas:number, ciencias:number, ingles:number, fisica:number){

    this.promedio = ((matematicas + ciencias + ingles + fisica)/ 4)
    return this.promedio;
  }

  editarEstudiante(){
    alert("editar - " +this.estudiante.nombre);
    this.alumnoModificar.emit(this.estudiante);
  }
}
