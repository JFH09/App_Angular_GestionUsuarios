import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { UsuarioEffects } from './store/usuario.effects';
import { StoreModule } from '@ngrx/store';
import { reducer, usuarioFeatureKey } from './store/usuario.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(usuarioFeatureKey, reducer),
    EffectsModule.forFeature([UsuarioEffects])
  ]
})
export class UsuariosStoreModule { }
