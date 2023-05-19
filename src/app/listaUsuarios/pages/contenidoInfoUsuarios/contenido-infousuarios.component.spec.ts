import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoInfousuariosComponent } from './contenido-infousuarios.component';

describe('ContenidoInfousuariosComponent', () => {
  let component: ContenidoInfousuariosComponent;
  let fixture: ComponentFixture<ContenidoInfousuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoInfousuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoInfousuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
