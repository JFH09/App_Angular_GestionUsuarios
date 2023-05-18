import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { UsuarioEffects } from './usuario.effects';

describe('UsuarioEffects', () => {
  let actions$: Observable<any>;
  let effects: UsuarioEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UsuarioEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(UsuarioEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
