import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInfoUsuariosComponent } from './card-info-usuarios.component';

describe('CardInfoUsuariosComponent', () => {
  let component: CardInfoUsuariosComponent;
  let fixture: ComponentFixture<CardInfoUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardInfoUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardInfoUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
