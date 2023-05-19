import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editar-formulario-dialog',
  templateUrl: './editar-formulario-dialog.component.html',
  styleUrls: ['./editar-formulario-dialog.component.css']
})
export class EditarFormularioDialogComponent implements OnInit{
  public formularioRegistro!: FormGroup;
  public hide : Boolean = true;
  dialogRef: any;

  constructor(){}
  
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
    })
  }


  actualizarDatos(){
    alert("se actualizaron los datos")
  }

  cancelar(): void{
    this.dialogRef.close();
  }
}
