import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUsuario from './usuario.reducer';

export const selectUsuarioState = createFeatureSelector<fromUsuario.State>(
  fromUsuario.usuarioFeatureKey
);
