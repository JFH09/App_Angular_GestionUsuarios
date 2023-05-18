import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';
import { UsuarioEstudiante } from '../usuarios/interfaces/usuarioEstudiante.model';

@Injectable({
  providedIn: 'root'
})
export class ObtenerUsuariosService {

 // @Input("usuario") = usuario:
 constructor(private endpoint: HttpClient) { }

 public obtenerUsuarios(): UsuarioEstudiante[] {
   return []
 }

 public obtenerListaEstudiantes(): Observable<any>{
   return this.endpoint.get(`${environment.desarrolloURL}datosUsuariosProvisional.json`)
 }

}
