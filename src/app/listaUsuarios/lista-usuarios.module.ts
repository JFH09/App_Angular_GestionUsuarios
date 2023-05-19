import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardInfoUsuariosComponent } from '../usuarios/pages/card-info-usuarios/card-info-usuarios.component';
import { ContenidoInfousuariosComponent } from './pages/contenidoInfoUsuarios/contenido-infousuarios.component';
import { DiferenciaUsuariosAdminEstudDirective } from '../directivas/diferencia-usuarios-admin-estud.directive';
import { JuntarNombresPipe } from '../pipes/juntar-nombres.pipe';
import { MaterialModule } from '../modulos/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaUsuariosRoutingModule } from './lista-usuarios-routing.module';
import { CardInfousuariosComponent } from './pages/cardInfoUsuarios/card-infousuarios.component';
import { MateriasPipe } from '../pipes/materias.pipe';



@NgModule({
  declarations: [

//ContenidoInfousuariosComponent,
   // DiferenciaUsuariosAdminEstudDirective,
    
   //JuntarNombresPipe,
  // MateriasPipe,
  //CardInfousuariosComponent,
   //ContenidoInfousuariosComponent
  ],
  imports: [
    
    CommonModule,
    ListaUsuariosRoutingModule

  ]
})
export class ListaUsuariosModule { }
