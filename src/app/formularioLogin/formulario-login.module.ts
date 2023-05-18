import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioLoginComponent } from './pages/formulario-login.component';
import { FormularioLoginRoutingModuleModule } from './formulario-login-routing-module.module';
import { LogoComponent } from '../componentes/logo/logo.component';
import { MaterialModule } from '../modulos/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormularioRegistroComponent } from '../formularioRegistro/pages/formulario-registro.component';



@NgModule({
  declarations: [
   // LogoComponent,
    FormularioLoginComponent,
  //  FormularioRegistroComponent
  ],
  imports: [
    CommonModule,
    FormularioLoginRoutingModuleModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class FormularioLoginModule { }
