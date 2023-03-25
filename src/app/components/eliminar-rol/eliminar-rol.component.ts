import { RolService } from './../../services/rol.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Rol } from 'src/app/models/rol';
import { MongoClient } from 'mongodb';


@Component({
  selector: 'app-eliminar-rol',
  templateUrl: './eliminar-rol.component.html',
  styleUrls: ['./eliminar-rol.component.css']
})
export class EliminarRolComponent {
  
  selectedOption: string = 'Administrador';
  
  rolForm: FormGroup;
  id: string | null;
  
  constructor(private fb: FormBuilder, 
    private router: Router,
    private toastr: ToastrService,
    private _rolService: RolService,
    private aRouter: ActivatedRoute){
    this.rolForm = this.fb.group({
      NombreRol: [''],
      NombreUsuario: [''],
      ApP: [''],
      ApM: [''],
      Email: [''],
      Telefono: [''],
      Privilegios: [''],
      Nombre: [''],
      //Nombre: ['', Validators.required],
      })
      this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  procesarInput() {
    const tipoUsuario = this.rolForm.get('NombreRol')?.setValue('Sin Rol');
    const tipoPrivilegios = this.rolForm.get('Privilegios')?.setValue(' ');
    this.eliminarRol();
  }

  eliminarRol() {
    const ROL: Rol = {
      NombreRol: this.rolForm.get('NombreRol')?.value,
      NombreUsuario: this.rolForm.get('NombreUsuario')?.value,
      ApP: this.rolForm.get('ApP')?.value,
      ApM: this.rolForm.get('ApM')?.value,
      Email: this.rolForm.get('Email')?.value,
      Telefono: this.rolForm.get('Telefono')?.value,
      Privilegios: this.rolForm.get('Privilegios')?.value,
      Nombre: this.rolForm.get('Nombre')?.value,
  
    }
  
    
    if(this.id !== null){
      //editar rol
      this._rolService.editarRol(this.id, ROL).subscribe(data =>{
        this.toastr.error('El rol fue eliminado con exito!', 'Rol Eliminado!');
        this.router.navigate(['/listar-rol']);
      }, error => {
        console.log(error);
        this.rolForm.reset();
      })
    }else{
      //agregar rol
      console.log(ROL);
      this._rolService.guardarRol(ROL).subscribe(data => {
        this.toastr.success('El rol fue registrado con exito!', 'Rol Registrado!');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.rolForm.reset();
      })
    }

    
    
  }

  esEditar() {

    if(this.id !== null) {
      this._rolService.obtenerRol(this.id).subscribe(data => {
        this.rolForm.setValue({
          NombreUsuario: data.NombreUsuario,
          NombreRol: data.NombreRol,
          ApP: data.ApP,
          ApM: data.ApM,
          Email: data.Email,
          Telefono: data.Telefono,
          Privilegios: data.Privilegios,
          Nombre: data.Nombre,
        })
      })
    }
  }
}
