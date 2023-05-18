import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContenidoUsuariosComponent } from './pages/contenido-usuarios/contenido-usuarios.component';
import { CardInfoUsuariosComponent } from './pages/card-info-usuarios/card-info-usuarios.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ContenidoUsuariosComponent},
   //   {path: 'cardsUsuarios', component: CardInfoUsuariosComponent},

    ])
  ]
})
export class UsuariosRoutingModule { }
