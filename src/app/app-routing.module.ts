import { EditarRolComponent } from './components/editar-rol/editar-rol.component';
import { CrearPrivilegioComponent } from './components/crear-privilegio/crear-privilegio.component';
import { ListarPrivilegiosComponent } from './components/listar-privilegios/listar-privilegios.component';
import { ListarNoRolComponent } from './components/listar-no-rol/listar-no-rol.component';
import { PrivilegiosAComponent } from './components/privilegios-a/privilegios-a.component';
import { HomeComponent } from './components/home/home.component';
import { EliminarRolComponent } from './components/eliminar-rol/eliminar-rol.component';
import { CrearRolComponent } from './components/crear-rol/crear-rol.component';
import { ListarRolComponent } from './components/listar-rol/listar-rol.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
const routes: Routes = [
  { path: 'listar-rol', component: ListarRolComponent },
  { path: 'listar-noRol', component: ListarNoRolComponent},
  { path: 'crear-rol', component: CrearRolComponent },
  { path: 'crear-privilegios', component: CrearPrivilegioComponent },
  { path: 'crear-rol/:id', component: CrearRolComponent },
  { path: 'editar-rol/:id', component: EditarRolComponent },
  { path: 'editar-privilegios/:id', component: CrearPrivilegioComponent },
  { path: 'eliminar-rol/:id', component: EliminarRolComponent },
  { path: '', component: HomeComponent },
  { path: 'privilegiosA', component: PrivilegiosAComponent },
  { path: 'listar-privilegios', component: ListarPrivilegiosComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
