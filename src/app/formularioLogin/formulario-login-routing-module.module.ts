import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormularioLoginComponent } from './pages/formulario-login.component';
import { FormularioRegistroComponent } from '../formularioRegistro/pages/formulario-registro.component';
import { compileClassMetadata } from '@angular/compiler';

// const routes : Routes = [
//   // { 
//   //   path: 'listaUsuarios', 
//   //   loadChildren: () => import('./usuarios/usuarios.module').then((module) => module.UsuariosModule)
//   // },
//   { 
//     path: 'panelPrincipal', 
//     loadChildren: () => import('../panelPrincipal/panel-principal.module').then((module) => module.PanelPrincipalModule)
//   },
//   { 
//     path: 'registro', 
//     loadChildren: () => import('../formularioRegistro/formularioregistro.module').then((module) => module.FormularioregistroModule)
//   },
//   { 
//     path: 'login', 
//     loadChildren: () => import('./formulario-login.module').then((module) => module.FormularioLoginModule)
//   },
//   {
//     path: '**', 
//     redirectTo: 'PanelPrincipal'
//   }
// ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: FormularioLoginComponent}
    ])
  ]
})
export class FormularioLoginRoutingModuleModule { }
