import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormularioRegistroComponent } from './formularioRegistro/pages/formulario-registro.component';

const routes : Routes = [
  { 
    path: 'panelPrincipal', 
    loadChildren: () => import('./panelPrincipal/panel-principal.module').then((module) => module.PanelPrincipalModule)
  },
  { 
    path: 'login', 
    loadChildren: () => import('./formularioLogin/formulario-login.module').then((module) => module.FormularioLoginModule)
  },
  { 
    path: 'registro', 
    component: FormularioRegistroComponent
  },
  {
    path: '**', 
    redirectTo: 'login'
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
