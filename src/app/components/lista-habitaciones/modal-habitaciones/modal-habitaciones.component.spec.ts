import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHabitacionesComponent } from './modal-habitaciones.component';

describe('ModalHabitacionesComponent', () => {
  let component: ModalHabitacionesComponent;
  let fixture: ComponentFixture<ModalHabitacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalHabitacionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalHabitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
