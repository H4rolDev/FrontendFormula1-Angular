import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaHabitacionesComponent } from './lista-habitaciones/lista-habitaciones.component';
import { ModalHabitacionesComponent } from './lista-habitaciones/modal-habitaciones/modal-habitaciones.component';


@NgModule({
  declarations: [    
  
    ListaHabitacionesComponent, ModalHabitacionesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
