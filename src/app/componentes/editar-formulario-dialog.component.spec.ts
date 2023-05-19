import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFormularioDialogComponent } from './editar-formulario-dialog.component';

describe('EditarFormularioDialogComponent', () => {
  let component: EditarFormularioDialogComponent;
  let fixture: ComponentFixture<EditarFormularioDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarFormularioDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarFormularioDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
