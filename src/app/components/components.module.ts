import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaReservasComponent } from './reservas/lista-reservas/lista-reservas.component';
import { CalendarioComponent } from './reservas/calendario/calendario.component';
import { TiposHabitacionComponent } from './habitaciones/tipos-habitacion/tipos-habitacion.component';
import { PisosComponent } from './habitaciones/pisos/pisos.component';
import { ProductosComponent } from './habitaciones/productos/productos.component';
import { ModalPisosComponent } from './habitaciones/pisos/modal-pisos/modal-pisos.component';
import { ModalTiposHabitacionesComponent } from './habitaciones/tipos-habitacion/modal-tipos-habitaciones/modal-tipos-habitaciones.component';
import { ModalProductoHabitacionComponent } from './habitaciones/productos/modal-producto-habitacion/modal-producto-habitacion.component';
import { ListaHabitacionesComponent } from './habitaciones/lista-habitaciones/lista-habitaciones.component';
import { ModalHabitacionesComponent } from './habitaciones/lista-habitaciones/modal-habitaciones/modal-habitaciones.component';
import { ReportesLimpiezaComponent } from './limpieza/reportes-limpieza/reportes-limpieza.component';
import { IncidenciasLimpiezaComponent } from './limpieza/incidencias-limpieza/incidencias-limpieza.component';
import { ListaPersonalComponent } from './empleados/lista-personal/lista-personal.component';
import { CargosPersonalComponent } from './empleados/cargos-personal/cargos-personal.component';
import { PermisosPersonalComponent } from './empleados/permisos-personal/permisos-personal.component';
import { ListaProductosComponent } from './productos/lista-productos/lista-productos.component';
import { CategoriasProductosComponent } from './productos/categorias-productos/categorias-productos.component';
import { ListaClientesComponent } from './reservas/lista-clientes/lista-clientes.component';


@NgModule({
  declarations: [
    ListaHabitacionesComponent,
    ModalHabitacionesComponent,
    ListaReservasComponent,
    CalendarioComponent,
    TiposHabitacionComponent,
    PisosComponent,
    ProductosComponent,
    ModalPisosComponent,
    ModalTiposHabitacionesComponent,
    ModalProductoHabitacionComponent,
    ReportesLimpiezaComponent,
    IncidenciasLimpiezaComponent,
    ListaPersonalComponent,
    CargosPersonalComponent,
    PermisosPersonalComponent,
    ListaProductosComponent,
    CategoriasProductosComponent,
    ListaClientesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
