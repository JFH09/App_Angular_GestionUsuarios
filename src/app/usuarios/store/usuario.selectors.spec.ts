import * as fromUsuario from './usuario.reducer';
import { selectUsuarioState } from './usuario.selectors';

describe('Usuario Selectors', () => {
  it('should select the feature state', () => {
    const result = selectUsuarioState({
      [fromUsuario.usuarioFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
