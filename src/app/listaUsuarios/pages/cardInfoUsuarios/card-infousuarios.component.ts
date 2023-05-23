import { Component, EventEmitter, Input, OnInit, Output , Inject} from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { ObtenerInfoLocalStorageService } from 'src/app/servicios/obtener-info-local-storage.service';
import { UsuarioEstudiante } from 'src/app/usuarios/interfaces/usuarioEstudiante.model';
import Swal from 'sweetalert2';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { EditarFormularioDialogComponent } from 'src/app/componentes/editar-formulario-dialog.component';
import { DatosCompartidosFormService } from 'src/app/servicios/datos-compartidos-form.service';

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

  @Input() datos: any;
  @Output() editar = new EventEmitter();

  public mostrarUsuariosPerfil !: string;
  public nombreCompleto!: string;

  public listaInfoUsuarios !: any;
  public listaUsers  :any[] = [];
  public nuevaListaUsers  :any[] = [];
  public infoUserLogin !: any;
  infoUsuarioLogueado !: any;
  constructor(public dialog: MatDialog, private activateRoute: ActivatedRoute, 
    private router: Router,private obtenerInfoLocalStorageService: ObtenerInfoLocalStorageService,
    private datosCompartidosFormService: DatosCompartidosFormService){

  }
  datosParaEditar: any;

  enviarDatos() {
    const datos = 'Estos son los datos que quiero enviar';
    this.datosCompartidosFormService.datos = this.usuario;
  }
  ngOnInit(): void {
    this.infoUserLogin = this.obtenerInfoLocalStorageService.getItem("infoUsuarioLogin");
    this.infoUsuarioLogueado = JSON.parse(this.infoUserLogin);
    console.log(this.infoUsuarioLogueado.perfil);
    // this.activateRoute.params.subscribe(parametro => {
    //   for (const key in parametro) {
    //     this.mostrarUsuariosPerfil = parametro[key];
  
    //   }
    //   console.log(this.mostrarUsuariosPerfil)
    // });
  }
  
  abrirDialogo() {

    const dialogRef = this.dialog.open(EditarFormularioDialogComponent, {
      width: '85%',
      height: 'auto',
      data: this.usuario
      // Opciones adicionales del diálogo, como data, panelClass, etc.
    });

    // Puedes suscribirte a los eventos del diálogo si lo deseas
    dialogRef.afterClosed().subscribe(result => {
      // Acciones después de que se cierra el diálogo
    });
  }

  sacarPromedio (matematicas:number, ciencias:number, ingles:number, fisica:number){

    this.promedio = ((matematicas + ciencias + ingles + fisica)/ 4)
    return this.promedio;
  }

  eresEstudiante(){
    
    Swal.fire({
      title: "No puedes editar o eliminar!",
      text: "Para poder editar o eliminar, inicia Sesión como administrador",
      icon: "info",
      confirmButtonText: "Ok",
    });
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

