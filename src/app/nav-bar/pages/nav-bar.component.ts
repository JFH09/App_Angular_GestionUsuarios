import { Component, OnInit } from '@angular/core';
import { ObtenerInfoLocalStorageService } from 'src/app/servicios/obtener-info-local-storage.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  public fecha!: Date;
  public horas: number = 0;
  public minutos: number = 0;
  public segundos: number = 0;
  public tiempoSesion!: any;

  public nombreUsuario !: string;
  public rol !: string;
  public email !: string;
  infoUsuario !: any;
  constructor(private obtenerInfoLocalStorage: ObtenerInfoLocalStorageService){}
  
  ngOnInit(): void {


   
      this.infoUsuario = this.obtenerInfoLocalStorage.getItem('infoUsuarioLogin');
      const usuarioLogeado = JSON.parse(this.infoUsuario);

      console.log("Informacion usuario logeado: "+usuarioLogeado);
      this.nombreUsuario = usuarioLogeado.nombre;
      this.rol = usuarioLogeado.perfil;
      this.email = usuarioLogeado.email;
    setInterval(()=>{
      this.fecha = new Date();
      if(this.segundos == 60){
        this.minutos++;
        this.segundos = 0;
        if(this.horas == 60){
          this.minutos = 0;
        }
      }
      this.segundos++;
      this.tiempoSesion = this.horas + "hr:" + this.minutos +"m:" + this.segundos + "s";
      
    }, 1000);

  }


}
