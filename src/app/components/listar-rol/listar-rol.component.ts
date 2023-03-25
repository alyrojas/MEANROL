import { ToastrService } from 'ngx-toastr';
import { RolService } from './../../services/rol.service';
import { Component, OnInit } from '@angular/core';
import { Rol } from 'src/app/models/rol';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar-rol',
  templateUrl: './listar-rol.component.html',
  styleUrls: ['./listar-rol.component.css']
})
export class ListarRolComponent implements OnInit {
  listRol: Rol[] = [];

  filterPost = '';

  filter: string = '';

  filterPersonas(personas: any[], filter: string): any[] {
    if (!filter) return personas;
    return personas.filter(persona =>
      persona.nombre.toLowerCase().includes(filter.toLowerCase()) ||
      persona.edad.toString().includes(filter)
    );
  }
  
  constructor(private _rolService: RolService,
    private toastr: ToastrService) {}

  ngOnInit(): void {
    this.obtenerRol();
  }

  obtenerRol() {
    this._rolService.getRol().subscribe(data => {
      console.log(data);
      this.listRol = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarRol(id:any) {
    this._rolService.eliminarRol(id).subscribe(data => {
      this.toastr.error('El rol fue eliminado con exito');
      this.obtenerRol();
    }, error=> {
       console.log(error);
    } )
  }
 

}
