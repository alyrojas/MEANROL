import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearRolComponent } from './components/crear-rol/crear-rol.component';
import { ListarRolComponent } from './components/listar-rol/listar-rol.component';
import { EliminarRolComponent } from './components/eliminar-rol/eliminar-rol.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { PrivilegiosAComponent } from './components/privilegios-a/privilegios-a.component';
import { ListarNoRolComponent } from './components/listar-no-rol/listar-no-rol.component';
import { ListarPrivilegiosComponent } from './components/listar-privilegios/listar-privilegios.component';
import { CrearPrivilegioComponent } from './components/crear-privilegio/crear-privilegio.component';
import { EditarRolComponent } from './components/editar-rol/editar-rol.component';
import { FilterPipe } from './pipe/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CrearRolComponent,
    ListarRolComponent,
    EliminarRolComponent,
    HomeComponent,
    NavComponent,
    PrivilegiosAComponent,
    ListarNoRolComponent,
    ListarPrivilegiosComponent,
    CrearPrivilegioComponent,
    EditarRolComponent,
    FilterPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
