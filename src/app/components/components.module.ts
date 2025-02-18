import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaHabitacionesComponent } from './lista-habitaciones/lista-habitaciones.component';
import { ModalHabitacionesComponent } from './lista-habitaciones/modal-habitaciones/modal-habitaciones.component';
import { ListaReservasComponent } from './reservas/lista-reservas/lista-reservas.component';
import { CalendarioComponent } from './reservas/calendario/calendario.component';
import { TiposHabitacionComponent } from './habitaciones/tipos-habitacion/tipos-habitacion.component';
import { PisosComponent } from './habitaciones/pisos/pisos.component';
import { ProductosComponent } from './habitaciones/productos/productos.component';
import { ModalPisosComponent } from './habitaciones/pisos/modal-pisos/modal-pisos.component';
import { ModalTiposHabitacionesComponent } from './habitaciones/tipos-habitacion/modal-tipos-habitaciones/modal-tipos-habitaciones.component';
import { ModalProductoHabitacionComponent } from './habitaciones/productos/modal-producto-habitacion/modal-producto-habitacion.component';


@NgModule({
  declarations: [
    ListaHabitacionesComponent, ModalHabitacionesComponent, ListaReservasComponent, CalendarioComponent, TiposHabitacionComponent, PisosComponent, ProductosComponent, ModalPisosComponent, ModalTiposHabitacionesComponent, ModalProductoHabitacionComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
