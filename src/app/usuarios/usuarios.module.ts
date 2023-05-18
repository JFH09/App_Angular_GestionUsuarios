import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenidoUsuariosComponent } from './pages/contenido-usuarios/contenido-usuarios.component';
import { CardInfoUsuariosComponent } from './pages/card-info-usuarios/card-info-usuarios.component';
import { RouterModule } from '@angular/router';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { CabecerasTamano20Directive } from '../directivas/cabeceras-tamano20.directive';
import { JuntarNombresPipe } from '../pipes/juntar-nombres.pipe';
import { MateriasPipe } from '../pipes/materias.pipe';
import { DiferenciaUsuariosAdminEstudDirective } from '../directivas/diferencia-usuarios-admin-estud.directive';



@NgModule({
  declarations: [
  //  ContenidoUsuariosComponent,
    //CardInfoUsuariosComponent,
    CabecerasTamano20Directive,
    JuntarNombresPipe,
    MateriasPipe,
    //DiferenciaUsuariosAdminEstudDirective
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
