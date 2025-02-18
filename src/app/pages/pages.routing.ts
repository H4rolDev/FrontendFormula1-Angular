import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListaHabitacionesComponent } from '../components/lista-habitaciones/lista-habitaciones.component';
import { CalendarioComponent } from '../components/reservas/calendario/calendario.component';
import { GenerarReservaComponent } from '../components/reservas/generar-reserva/generar-reserva.component';
import { ListaReservasComponent } from '../components/reservas/lista-reservas/lista-reservas.component';
import { PisosComponent } from '../components/habitaciones/pisos/pisos.component';
import { TiposHabitacionComponent } from '../components/habitaciones/tipos-habitacion/tipos-habitacion.component';
import { ProductosComponent } from '../components/habitaciones/productos/productos.component';

const routes: Routes = [
    {
      path: '', component: PagesComponent,
      children: [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'lista-habitaciones', component: ListaHabitacionesComponent },
        { path: 'generar-reserva', component: GenerarReservaComponent },
        { path: 'calendario', component: CalendarioComponent },
        { path: 'lista-reservas', component: ListaReservasComponent },
        { path: 'lista-pisos', component: PisosComponent },
        { path: 'tipo-habitacion', component: TiposHabitacionComponent },
        { path: 'producto-habitacion', component: ProductosComponent },
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PagesRoutingModule { }
