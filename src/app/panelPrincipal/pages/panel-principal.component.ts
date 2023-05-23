import { Component, OnInit } from '@angular/core';
import { ObtenerInfoLocalStorageService } from 'src/app/servicios/obtener-info-local-storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-panel-principal',
  templateUrl: './panel-principal.component.html',
  styleUrls: ['./panel-principal.component.css']
})
export class PanelPrincipalComponent implements OnInit{
  infoUserLogin !: any;
  constructor(private obtenerInfoLocalStorageService: ObtenerInfoLocalStorageService){}
  
  ngOnInit(): void {
    this.infoUserLogin = this.obtenerInfoLocalStorageService.getItem("infoUsuarioLogin");
    let infoUsuarioLogueado = JSON.parse(this.infoUserLogin);
    console.log(infoUsuarioLogueado.perfil);


    if(infoUsuarioLogueado.perfil == 'Estudiante'){
      Swal.fire({
        title: "Iniciaste sesion como estudiante!",
        text: "Tendras opciones limitadas, para poder editar o eliminar algun estudiante, inicia como administrador",
        icon: "info",
        confirmButtonText: "Ok",
      });
    }
  }


}
