import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PanelPrincipalComponent } from './pages/panel-principal.component';
import { FormularioRegistroComponent } from '../formularioRegistro/pages/formulario-registro.component';
import { ContenidoUsuariosComponent } from '../usuarios/pages/contenido-usuarios/contenido-usuarios.component';
import { ContenidoInfousuariosComponent } from '../listaUsuarios/pages/contenidoInfoUsuarios/contenido-infousuarios.component';

// const routes : Routes = [
//   { 
//     path: 'panelPrincipal', 
//     loadChildren: () => import('./panel-principal.module').then((module) => module.PanelPrincipalModule)
//   },
//   {
//     path: '**', 
//     redirectTo: 'panelPrincipal'
//   }
// ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: PanelPrincipalComponent, children: [
        { path: "registro", component: FormularioRegistroComponent},
        //{ path: "login", component: FormularioLoginComponent},
        { path: "listaEstudiantes", component: ContenidoUsuariosComponent},
        { path: "listaUsuarios", component: ContenidoInfousuariosComponent},
        // { path: "listaEstudiantes/:parametro", component: ContenidoUsuariosComponent},
      ]}
    ])
  ]
})
export class PanelPrincipalRoutingModule { }
