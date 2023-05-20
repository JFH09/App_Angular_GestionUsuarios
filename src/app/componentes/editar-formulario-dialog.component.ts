import { Component, Input, OnInit, Output, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsuarioEstudiante } from '../usuarios/interfaces/usuarioEstudiante.model';
import { DatosCompartidosFormService } from '../servicios/datos-compartidos-form.service';
import { ObtenerInfoLocalStorageService } from '../servicios/obtener-info-local-storage.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-formulario-dialog',
  templateUrl: './editar-formulario-dialog.component.html',
  styleUrls: ['./editar-formulario-dialog.component.css']
})
export class EditarFormularioDialogComponent implements OnInit{
  public formularioActualizacionData!: FormGroup;
  public hide : Boolean = true;
  // dialogRef: any;
  usuarioEditar !: UsuarioEstudiante;
  datos: any;
  public estudianteModificar !: UsuarioEstudiante;
  public id!: any; 
  public nombre!: any; 
  public apellidos!: any; 
  public edad!: any; 
  public identificacion!: any; 
  public curso!: any; 
  public genero!: any; 
  public perfilAnt: any[] = []; 
  public perfil!: any; 
  public email!: any; 
  public pass!: any; 
  public celular!: any; 
  public notaMatematicas!: any; 
  public notaCiencias!: any; 
  public notaIngles!: any; 
  public notaFisica!: any; 
  public sueldo!: any;
  listaUsers !: any;
  listaUsuarios : any[] = [];
  nuevaListaUsuarios : any = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, 
  private datosCompartidosFormService: DatosCompartidosFormService,
  private obtenerInfoLocalStorageService: ObtenerInfoLocalStorageService,
  private router: Router, public dialogRef: MatDialogRef<EditarFormularioDialogComponent>) {
    this.data = data;
  }
  ngOnInit(): void {
   // this.getListaUsuarios = this.obtenerInfoLocalStorage.getItem("listaUsuarios");
    this.formularioActualizacionData = new FormGroup({
      nombre: new FormControl(),
      apellidos: new FormControl(),
      edad: new FormControl(),
      identificacion: new FormControl(),
      curso: new FormControl(),
      genero: new FormControl(),
      perfil: new FormControl(),
      email: new FormControl(),
      pass: new FormControl(),
      celular: new FormControl(),
      notaMatematicas : new FormControl(),
      notaCiencias : new FormControl(),
      notaIngles : new FormControl(),
      notaFisica : new FormControl(),
      sueldo: new FormControl()
    })
    console.log("usuario editar::: " + (this.data.notasMaterias.matematicas));
    this.id = this.data.id;
    this.nombre =  this.data.nombre;
    this.apellidos  =  this.data.apellidos; 
    this.edad  =  this.data.edad; 
    this.identificacion  =  this.data.identificacion; 
    this.curso  =  this.data.salon; 
    this.genero  =  this.data.genero; 
    this.perfil = this.data.perfil; 
    this.perfilAnt.push(this.data.perfil); 
    this.email  =  this.data.email; 
    this.pass  =  this.data.pass; 
    this.celular  =  this.data.celular; 
    this.notaMatematicas = this.data.notasMaterias.matematicas;
    this.notaCiencias = this.data.notasMaterias.ciencias;
    this.notaIngles = this.data.notasMaterias.ingles;
    this.notaFisica = this.data.notasMaterias.fisica;
    this.sueldo = this.data.sueldo;
  }


  actualizarDatos(){
    console.log(this.perfilAnt[0]);
    this.listaUsers =  this.obtenerInfoLocalStorageService.getItem("listaUsuarios");
    this.listaUsuarios = JSON.parse(this.listaUsers);
    console.log(this.listaUsuarios)
    console.log(this.listaUsuarios.length);
    this.formularioActualizacionData.value.id = this.listaUsuarios.length + 1;
    this.formularioActualizacionData.value.perfil = this.perfilAnt[0];
    this.formularioActualizacionData.value.notasMaterias = {
      matematicas:  this.notaMatematicas,
      ciencias :this.notaCiencias,
      ingles: this.notaIngles,
      fisica: this.notaFisica,
    };
    let cont = 0;
    for (const usuario of this.listaUsuarios) {
      if(usuario.id != this.id ){
        this.nuevaListaUsuarios.push(usuario);
      }
    }
    this.nuevaListaUsuarios.push(this.formularioActualizacionData.value);
    console.log(this.nuevaListaUsuarios);
    this.obtenerInfoLocalStorageService.removeItem("listaUsuarios");
    console.log(this.nuevaListaUsuarios);
    this.obtenerInfoLocalStorageService.setItem("listaUsuarios", JSON.stringify(this.nuevaListaUsuarios));
    Swal.fire('Actualizado!', '', 'success');
    this.cerrarDialogo();
    this.router.navigateByUrl('/RefrshComponent', {skipLocationChange: true}).then(()=> this.router.navigate(["panelPrincipal/listaUsuarios"]));
  }

  cerrarDialogo(): void {
    this.dialogRef.close();
  }


}
