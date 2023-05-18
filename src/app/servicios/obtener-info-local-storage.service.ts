import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ObtenerInfoLocalStorageService {

  constructor() { }


  getItem(key: string): string | null{
    return localStorage.getItem(key)
  }

  setItem(key: string, value: string):void{
    localStorage.setItem(key, value);
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  // public (): Observable<any>{
  //   let infoUsuario =localStorage.getItem("infoUsuarioLogin");
  //   if( infoUsuario != null){
  //     return  JSON.parse(infoUsuario);
  //   }else{
  //     return JSON.parse("sin info");
  //   }
     
  
}
