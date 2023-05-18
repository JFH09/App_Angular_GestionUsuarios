import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPaginasComponent } from './listado-paginas.component';

describe('ListadoPaginasComponent', () => {
  let component: ListadoPaginasComponent;
  let fixture: ComponentFixture<ListadoPaginasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoPaginasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoPaginasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
