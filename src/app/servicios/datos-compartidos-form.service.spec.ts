import { TestBed } from '@angular/core/testing';

import { DatosCompartidosFormService } from './datos-compartidos-form.service';

describe('DatosCompartidosFormService', () => {
  let service: DatosCompartidosFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosCompartidosFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
