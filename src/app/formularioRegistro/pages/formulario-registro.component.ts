import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit{
  public formularioRegistro!: FormGroup;
  public hide : Boolean = true;
  public datos !: unknown;

  constructor(private router: Router){}

  ngOnInit(): void {
     
    this.formularioRegistro = new FormGroup({
      nombres: new FormControl(),
      apellidos: new FormControl(),
      edad: new FormControl(),
      identificacion: new FormControl(),
      curso: new FormControl(),
      genero: new FormControl(),
      perfil: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      celular: new FormControl(),
    })
  }
  registrarDatos(){
    console.log(this.formularioRegistro.value);

    alert("Ingreso: \n"+ 
    JSON.stringify(this.formularioRegistro.value));

    this.limpiarCampos();
  }

   limpiarCampos(): void{
    this.formularioRegistro.setValue({
      nombres: "",
      apellidos: "",
      edad: "",
      identificacion: "",
      curso: "",
      genero: "",
      perfil: "",
      email: "",
      password: "",
      celular: "",
    });
  }

  cancelar(){
    console.log("volviendo... de " + this.router.url);
    switch(this.router.url){
      case "/panelPrincipal/registro":
        this.router.navigate(["panelPrincipal/listaEstudiantes"]);
      break;
      case "/registro":
        this.router.navigate(["login"]);
      break;
    }
  }
}
