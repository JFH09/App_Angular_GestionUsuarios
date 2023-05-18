import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { UsuarioEstudiante } from '../interfaces/usuarioEstudiante.model';

export const UsuarioActions = createActionGroup({
  source: 'Usuario',
  events: {
    'Load Usuarios': emptyProps(),
    'Load Usuarios Success': props<{ data: UsuarioEstudiante[] }>(),
    'Load Usuarios Failure': props<{ error: unknown }>(),
  }
});
