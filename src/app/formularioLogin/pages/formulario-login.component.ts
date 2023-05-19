import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ObtenerInfoLocalStorageService } from 'src/app/servicios/obtener-info-local-storage.service';
import { ObtenerUsuariosService } from 'src/app/servicios/obtener-usuarios.service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit{


  // @Input() usuario!: string;
  public hide : Boolean = true;
  infoIngresada : any ;
  listaUsuariosComparativa: any = [];
  listaUsuarios: any = [];
  datosUsuario: any = [];
  usuariosAlmacenados !: any;
  listaUsuariosComparativaAUX !: any;

  //  usuarioLogin = "Joselin";
  //  usuarioLoginPass = "";

  public formularioLogin!: FormGroup;
  constructor(private obtenerUsuarioService: ObtenerUsuariosService, private router: Router, private obtenerInfoLocalStorage: ObtenerInfoLocalStorageService){}

  ngOnInit(): void {
    this.usuariosAlmacenados = this.obtenerInfoLocalStorage.getItem("listaUsuarios");
console.log(this.usuariosAlmacenados);
    if( this.usuariosAlmacenados != null){
      console.log("hay datos guardados...");
      const usuarios = JSON.parse(this.usuariosAlmacenados)
      console.log(usuarios);
      for (const usuario of usuarios) {
        this.listaUsuariosComparativa.push(usuario.email+usuario.pass);
        this.datosUsuario.push(usuario);
        this.listaUsuarios.push(usuario);
      }
      console.log(this.listaUsuariosComparativa);
    }else{
      this.obtenerUsuarioService.obtenerListaEstudiantes().subscribe((usuarios) => {
        for (const usuario of usuarios) {
          //alert("se puede iniciar sesion con : " + usuario.email + " - " + usuario.pass);
          this.listaUsuariosComparativa.push(usuario.email+usuario.pass);
          this.datosUsuario.push(usuario);
          this.listaUsuarios.push(usuario);
        }
        localStorage.setItem("listaUsuarios",JSON.stringify(this.listaUsuarios));
      });
    }



    

    this.formularioLogin = new FormGroup({
      usuarioLoginEmail: new FormControl(),
      password: new FormControl()
    })

  }

  validarUsuario():void{

    this.infoIngresada = this.formularioLogin.value;
    let emailUsu = this.infoIngresada.usuarioLoginEmail;
    let passUsu = this.infoIngresada.password;
    console.log(emailUsu);
    this.listaUsuariosComparativaAUX = this.obtenerInfoLocalStorage.getItem("listaUsuarios");
    const listaUsuariosComparativa2 = JSON.parse(this.listaUsuariosComparativaAUX);
    
    console.log(listaUsuariosComparativa2);

    //  let ingreso = listaUsuariosComparativa2.find( 
    //    (i:any) => i == emailUsu+passUsu
    //  );
    //  console.log(ingreso);
    let ingreso = false;

      for (const usuario of this.listaUsuariosComparativa) {
        console.log(usuario);
        console.log(emailUsu+passUsu);
        if (usuario ==  emailUsu+passUsu) {
          ingreso = true;
        }
      }
      console.log(listaUsuariosComparativa2);
 
      console.log(ingreso);
    
    if(ingreso){
  
    
        let infoUsuarioLogin = [];
        for (const usuario of this.datosUsuario) {
          if (usuario.email == emailUsu && usuario.pass == passUsu) {
            infoUsuarioLogin.push(usuario);
          }
        }
        console.log(ingreso);
    
          localStorage.setItem("infoUsuarioLogin",JSON.stringify(infoUsuarioLogin[0]));
        //alert("entro");
          Swal.fire({
            title: "Se Inicio Sesion correctamente!",
            text: "Bienvenido " + infoUsuarioLogin[0].nombre,
            icon: "success",
            confirmButtonText: "Ok",
          })
        this.router.navigate(['panelPrincipal']);
    }else{
      Swal.fire({
        title: "Intenta Nuevamente!",
        //text: "Ocurrio un inconveniente... ",
        icon: "error",
        confirmButtonText: "Ok",
      })
    }
      


  }
}
