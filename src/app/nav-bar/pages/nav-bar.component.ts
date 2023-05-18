import { Component, OnInit } from '@angular/core';

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

  
  ngOnInit(): void {
   
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
