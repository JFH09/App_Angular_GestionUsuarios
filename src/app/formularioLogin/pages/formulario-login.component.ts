import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ObtenerUsuariosService } from 'src/app/servicios/obtener-usuarios.service';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit{


  // @Input() usuario!: string;
  public hide : Boolean = true;
  infoIngresada : any ;
  listaUsuarios: any = [];
  //  usuarioLogin = "Joselin";
  //  usuarioLoginPass = "";

  public formularioLogin!: FormGroup;
  constructor(private obtenerUsuarioService: ObtenerUsuariosService, private router: Router){}

  ngOnInit(): void {
    this.obtenerUsuarioService.obtenerListaEstudiantes().subscribe((usuarios) => {

      for (const usuario of usuarios) {
        //alert("se puede iniciar sesion con : " + usuario.email + " - " + usuario.pass);
        this.listaUsuarios.push(usuario.email+usuario.pass);
      }
      
    });

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

     let ingreso = this.listaUsuarios.find( 
       (i:any) => i == emailUsu+passUsu
     );
    
     if(ingreso){
      console.log(ingreso);
      alert("entro");
      this.router.navigate(['panelPrincipal']);
     }else{
      alert("intenta nuevamente")
     }

  }
}
