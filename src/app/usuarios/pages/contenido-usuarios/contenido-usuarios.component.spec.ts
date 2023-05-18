import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoUsuariosComponent } from './contenido-usuarios.component';

describe('ContenidoUsuariosComponent', () => {
  let component: ContenidoUsuariosComponent;
  let fixture: ComponentFixture<ContenidoUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
