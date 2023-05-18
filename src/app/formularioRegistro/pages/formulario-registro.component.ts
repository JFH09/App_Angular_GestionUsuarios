import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ObtenerInfoLocalStorageService } from 'src/app/servicios/obtener-info-local-storage.service';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit{
  public formularioRegistro!: FormGroup;
  public hide : Boolean = true;
  public datos !: unknown;
  //listaUsuarios !: any;
  getListaUsuarios !: any;
  nuevaListaUsuarios : any = [];

  constructor(private router: Router, private obtenerInfoLocalStorage : ObtenerInfoLocalStorageService){}

  ngOnInit(): void {
    this.getListaUsuarios = this.obtenerInfoLocalStorage.getItem("listaUsuarios");
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
  registrarDatos(){
    console.log(this.formularioRegistro.value);

    alert("Ingreso: \n"+ 
    JSON.stringify(this.formularioRegistro.value));

    if(this.formularioRegistro.value.perfil == "estudiante"){
      this.formularioRegistro.value.promedio = 0;
      this.formularioRegistro.value.notasMateria = {
        ciencias: 0,
        fisica: 0,
        ingles: 0,
        matematicas: 0
      };
      this.formularioRegistro.value.observaciones = "ninguna";
     // this.formularioRegistro.value.salon = 999;
    }else if(this.formularioRegistro.value.perfil == "administrador"){
      this.formularioRegistro.value.promedio = 0;
      this.formularioRegistro.value.materia = "por Decidir";
      this.formularioRegistro.value.salario = 0;
    }
    const listaUsuarios = JSON.parse(this.getListaUsuarios);

    console.log("infoListaUsuaris"+ typeof listaUsuarios);
    for (const usuario of listaUsuarios) {
      this.nuevaListaUsuarios.push(usuario);
    }
    this.nuevaListaUsuarios.push(this.formularioRegistro.value);
    console.log(this.nuevaListaUsuarios);

    this.obtenerInfoLocalStorage.setItem("listaUsuarios", JSON.stringify(this.nuevaListaUsuarios));
    this.limpiarCampos();
  }

   limpiarCampos(): void{
    this.formularioRegistro.setValue({
      nombre: "",
      apellidos: "",
      edad: "",
      identificacion: "",
      curso: "",
      genero: "",
      perfil: "",
      email: "",
      pass: "",
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
