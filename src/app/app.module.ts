import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppStoreModule } from './app-store.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CabecerasTamano20Directive } from './directivas/cabeceras-tamano20.directive';
import { MateriasPipe } from './pipes/materias.pipe';
import { JuntarNombresPipe } from './pipes/juntar-nombres.pipe';
import { DiferenciaUsuariosAdminEstudDirective } from './directivas/diferencia-usuarios-admin-estud.directive';
import { MaterialModule } from './modulos/material/material.module';
import { NavBarComponent } from './nav-bar/pages/nav-bar.component';
import { ListadoPaginasComponent } from './componentes/listadoPaginas/listado-paginas.component';
import { LogoComponent } from './componentes/logo/logo.component';
import { ToolBarComponent } from './tool-bar/pages/tool-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    // CabecerasTamano20Directive,
    // JuntarNombresPipe,
    // MateriasPipe,
   // DiferenciaUsuariosAdminEstudDirective
  //  NavBarComponent, 
  ],
  imports: [
    BrowserModule,
    AppStoreModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
