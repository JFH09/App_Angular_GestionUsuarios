import { TestBed } from '@angular/core/testing';

import { ObtenerInfoLocalStorageService } from './obtener-info-local-storage.service';

describe('ObtenerInfoLocalStorageService', () => {
  let service: ObtenerInfoLocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerInfoLocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
