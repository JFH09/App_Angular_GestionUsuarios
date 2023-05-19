import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/pages/nav-bar.component';
import { ToolBarComponent } from '../tool-bar/pages/tool-bar.component';
import { ListadoPaginasComponent } from '../componentes/listadoPaginas/listado-paginas.component';
import { LogoComponent } from '../componentes/logo/logo.component';
import { PanelPrincipalRoutingModule } from './panel-principal-routing.module';
import { RouterModule } from '@angular/router';
import { PanelPrincipalComponent } from './pages/panel-principal.component';
import { FormularioRegistroComponent } from '../formularioRegistro/pages/formulario-registro.component';
import { CardInfoUsuariosComponent } from '../usuarios/pages/card-info-usuarios/card-info-usuarios.component';
import { ContenidoUsuariosComponent } from '../usuarios/pages/contenido-usuarios/contenido-usuarios.component';
import { CabecerasTamano20Directive } from '../directivas/cabeceras-tamano20.directive';
import { JuntarNombresPipe } from '../pipes/juntar-nombres.pipe';
import { MateriasPipe } from '../pipes/materias.pipe';
import { DiferenciaUsuariosAdminEstudDirective } from '../directivas/diferencia-usuarios-admin-estud.directive';
import { MaterialModule } from '../modulos/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContenidoInfousuariosComponent } from '../listaUsuarios/pages/contenidoInfoUsuarios/contenido-infousuarios.component';
import { ListaUsuariosModule } from '../listaUsuarios/lista-usuarios.module';
import { CardInfousuariosComponent } from '../listaUsuarios/pages/cardInfoUsuarios/card-infousuarios.component';



@NgModule({
  declarations: [
    LogoComponent,
    ToolBarComponent,
    NavBarComponent,
    ListadoPaginasComponent,
    CardInfoUsuariosComponent,
    ContenidoUsuariosComponent,
    PanelPrincipalComponent,
    CabecerasTamano20Directive,
    JuntarNombresPipe,
    MateriasPipe,
    DiferenciaUsuariosAdminEstudDirective,
    FormularioRegistroComponent,
    CardInfousuariosComponent,
    ContenidoInfousuariosComponent
    
  ],
  imports: [
    CommonModule,
    PanelPrincipalRoutingModule, RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    //ListaUsuariosModule
    
 
  ],
  exports:[
    RouterModule
  ]
})
export class PanelPrincipalModule { }
