import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ObtenerInfoLocalStorageService } from 'src/app/servicios/obtener-info-local-storage.service';
import Swal from 'sweetalert2';
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
    if(this.formularioRegistro.value.nombre == null || this.formularioRegistro.value.apellidos == null
      ||this.formularioRegistro.value.edad == null || this.formularioRegistro.value.genero == null
      || this.formularioRegistro.value.identificacion == null || this.formularioRegistro.value.curso == null
      || this.formularioRegistro.value.perfil == null || this.formularioRegistro.value.email == null
      || this.formularioRegistro.value.pass == null || this.formularioRegistro.value.celular == null){
        Swal.fire({
          title: "Debes llenar todos los campos!",
          //text: "Ocurrio un inconveniente... ",
          icon: "error",
          confirmButtonText: "Ok",
        });
        this.router.navigateByUrl('/RefrshComponent', {skipLocationChange: true}).then(()=> this.router.navigate(["login"]));
        
    }else{


      alert("Ingreso: \n"+ 
      JSON.stringify(this.formularioRegistro.value));
  
      if(this.formularioRegistro.value.perfil == "estudiante"){
        this.formularioRegistro.value.promedio = 0;
        this.formularioRegistro.value.notasMaterias = {
          ciencias: 999,
          fisica: 999,
          ingles: 999,
          matematicas: 999
        };
        this.formularioRegistro.value.observaciones = "ninguna";
       // this.formularioRegistro.value.salon = 999;
      }else if(this.formularioRegistro.value.perfil == "administrador"){
        this.formularioRegistro.value.promedio = 0;
        this.formularioRegistro.value.materia = "por Decidir";
        this.formularioRegistro.value.salario = 0;
        // this.formularioRegistro.value.notasMateria = {
        //   ciencias: 999,
        //   fisica: 999,
        //   ingles: 999,
        //   matematicas: 999
        // };
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

      // this.router.navigateByUrl('/RefrshComponent', {skipLocationChange: true}).then(()=> this.router.navigate(["login"]));
    }

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
