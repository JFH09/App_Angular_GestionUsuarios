import { createFeature, createReducer, on } from '@ngrx/store';
import { UsuarioActions } from './usuario.actions';
import { UsuarioEstudiante } from '../interfaces/usuarioEstudiante.model';

export const usuarioFeatureKey = 'usuario';

export interface State {
  data: UsuarioEstudiante[]
}

export const initialState: State = {
  data: []
};

export const reducer = createReducer(
  initialState,
  on(UsuarioActions.loadUsuarios, state => state),
  on(UsuarioActions.loadUsuariosSuccess, (state, action) => {
    return {
      ...state,
      data: action.data,
    }
  }),
  on(UsuarioActions.loadUsuariosFailure, (state, action) => state),
);

export const usuarioFeature = createFeature({
  name: usuarioFeatureKey,
  reducer,
});

