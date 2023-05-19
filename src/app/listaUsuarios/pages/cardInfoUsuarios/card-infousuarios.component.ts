import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { ObtenerInfoLocalStorageService } from 'src/app/servicios/obtener-info-local-storage.service';
import { UsuarioEstudiante } from 'src/app/usuarios/interfaces/usuarioEstudiante.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-infousuarios',
  templateUrl: './card-infousuarios.component.html',
  styleUrls: ['./card-infousuarios.component.css']
})
export class CardInfousuariosComponent implements OnInit{


  public promedio: number = 85;
  public materia!: string;



  @Input() usuario!: any;
  @Output() infoBorrarUsu = new EventEmitter<UsuarioEstudiante>();
  @Output() alumnoModificar  =new EventEmitter<UsuarioEstudiante>();
  @Output() perfilUsuario !: String;

  public mostrarUsuariosPerfil !: string;
  public nombreCompleto!: string;

  public listaInfoUsuarios !: any;
  public listaUsers  :any[] = [];
  public nuevaListaUsers  :any[] = [];

  constructor(private activateRoute: ActivatedRoute, private router: Router,private obtenerInfoLocalStorageService: ObtenerInfoLocalStorageService){

  }
  ngOnInit(): void {
    // this.activateRoute.params.subscribe(parametro => {
    //   for (const key in parametro) {
    //     this.mostrarUsuariosPerfil = parametro[key];
  
    //   }
    //   console.log(this.mostrarUsuariosPerfil)
    // });
  }
  sacarPromedio (matematicas:number, ciencias:number, ingles:number, fisica:number){

    this.promedio = ((matematicas + ciencias + ingles + fisica)/ 4)
    return this.promedio;
  }

  editarEstudiante(){
    alert("editar - " +this.usuario.nombre);
    this.alumnoModificar.emit(this.usuario);
  }

  eliminarUsuario(){
    Swal.fire({
      title: 'Estas seguro de eliminar el registro? -> ' + this.usuario.nombre,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Cancelar',
      denyButtonText: `Eliminar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('No se elimino nada', '', 'info')
      } else if (result.isDenied) {


        this.infoBorrarUsu.emit(this.usuario);

        this.listaInfoUsuarios = this.obtenerInfoLocalStorageService.getItem("listaUsuarios");
        console.log(this.listaInfoUsuarios)
      
        this.listaUsers = JSON.parse(this.listaInfoUsuarios);
        console.log(this.listaUsers);
        console.log(this.infoBorrarUsu);
        for (const user of this.listaUsers) {
          if(user.email == this.usuario.email && user.identificacion == this.usuario.identificacion){
        
           //Swal.fire('Eliminado!' + user.email, '')

          }else{
            this.nuevaListaUsers.push(user);
          }
        }
        this.obtenerInfoLocalStorageService.removeItem("listaUsuarios");
        Swal.fire('Eliminado!', '', 'success')
        this.obtenerInfoLocalStorageService.setItem("listaUsuarios", JSON.stringify(this.nuevaListaUsers));
        //location.reload();
        this.router.navigateByUrl('/RefrshComponent', {skipLocationChange: true}).then(()=> this.router.navigate(["panelPrincipal/listaUsuarios"]));

      }
    });
    
    
  }
  
}
