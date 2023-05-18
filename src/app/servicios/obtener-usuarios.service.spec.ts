import { TestBed } from '@angular/core/testing';

import { ObtenerUsuariosService } from './obtener-usuarios.service';

describe('ObtenerUsuariosService', () => {
  let service: ObtenerUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
