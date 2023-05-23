import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ObtenerInfoLocalStorageService } from 'src/app/servicios/obtener-info-local-storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-paginas',
  templateUrl: './listado-paginas.component.html',
  styleUrls: ['./listado-paginas.component.css']
})
export class ListadoPaginasComponent {

  constructor(
    private obtenerInfoLocalStorageService: ObtenerInfoLocalStorageService,
    private router: Router
    ){}

  cerrarSesion(){
    this.obtenerInfoLocalStorageService.removeItem("infoUsuarioLogin");
    Swal.fire({
      title: "Se cerro Sesion Correctamente!",
      //text: "Ocurrio un inconveniente... ",
      icon: "success",
      confirmButtonText: "Ok",
    });

    this.router.navigate(['/login']);
  }
}
