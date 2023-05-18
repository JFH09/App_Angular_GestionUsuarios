import { NgModule, isDevMode } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { UsuariosStoreModule } from './usuarios/usuarios-store.module';
import { PanelPrincipalModule } from './panelPrincipal/panel-principal.module';



@NgModule({
  declarations: [],
  imports: [
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    StoreModule.forRoot({}, {}),
    UsuariosStoreModule,
    
  ]
})
export class AppStoreModule { }
