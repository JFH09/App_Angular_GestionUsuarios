import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioRegistroComponent } from './pages/formulario-registro.component';
import { FormularioRegistroRoutingModule } from './formulario-registro-routing.module';
import { FormularioLoginComponent } from '../formularioLogin/pages/formulario-login.component';
import { MaterialModule } from '../modulos/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  // FormularioRegistroComponent,
 //   FormularioLoginComponent,
  
  ],
  imports: [
    CommonModule,
    FormularioRegistroRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FormularioregistroModule { }
