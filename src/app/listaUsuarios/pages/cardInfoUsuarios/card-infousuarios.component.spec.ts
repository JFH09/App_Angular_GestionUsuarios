import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInfousuariosComponent } from './card-infousuarios.component';

describe('CardInfousuariosComponent', () => {
  let component: CardInfousuariosComponent;
  let fixture: ComponentFixture<CardInfousuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardInfousuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardInfousuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
