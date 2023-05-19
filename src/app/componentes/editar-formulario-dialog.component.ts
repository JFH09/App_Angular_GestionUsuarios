import { Component, Input, OnInit, Output, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsuarioEstudiante } from '../usuarios/interfaces/usuarioEstudiante.model';
import { DatosCompartidosFormService } from '../servicios/datos-compartidos-form.service';

@Component({
  selector: 'app-editar-formulario-dialog',
  templateUrl: './editar-formulario-dialog.component.html',
  styleUrls: ['./editar-formulario-dialog.component.css']
})
export class EditarFormularioDialogComponent implements OnInit{
  public formularioRegistro!: FormGroup;
  public hide : Boolean = true;
  dialogRef: any;
  usuarioEditar !: UsuarioEstudiante;
  datos: any;
  public estudianteModificar !: UsuarioEstudiante;
  public nombre!: any; 
  public apellidos!: any; 
  public edad!: any; 
  public identificacion!: any; 
  public curso!: any; 
  public genero!: any; 
  public perfil!: any; 
  public email!: any; 
  public pass!: any; 
  public celular!: any; 
  public notaMatematicas!: any; 
  public notaCiencias!: any; 
  public notaIngles!: any; 
  public notaFisica!: any; 
  public sueldo!: any;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private datosCompartidosFormService: DatosCompartidosFormService) {
    this.data = data;
  }
  ngOnInit(): void {
   // this.getListaUsuarios = this.obtenerInfoLocalStorage.getItem("listaUsuarios");
    this.formularioRegistro = new FormGroup({
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
    this.nombre =  this.data.nombre;
    this.apellidos  =  this.data.apellidos; 
    this.edad  =  this.data.edad; 
    this.identificacion  =  this.data.identificacion; 
    this.curso  =  this.data.salon; 
    this.genero  =  this.data.genero; 
    this.perfil  =  this.data.perfil; 
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
    alert("se actualizaron los datos")
  }

  cancelar(): void{
    this.dialogRef.close();
  }
}
