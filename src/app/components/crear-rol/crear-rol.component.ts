import { RolService } from './../../services/rol.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Rol } from 'src/app/models/rol';
import { HttpClient } from '@angular/common/http';

import { PrivilegioService } from './../../services/privilegio.service';
import { Privilegio } from 'src/app/models/privilegio';


import { NombreRolService } from './../../services/nombreRol.service';
import { NombreRol } from './../../models/nombreRol';

@Component({
  selector: 'app-crear-rol',
  templateUrl: './crear-rol.component.html',
  styleUrls: ['./crear-rol.component.css']
})
export class CrearRolComponent implements OnInit {

  rolForm: FormGroup;
  id: string | null;

  listNombreRol: NombreRol[] = [];

  constructor(private http: HttpClient, private fb: FormBuilder, private _privilegioService: PrivilegioService, private _nombreRolService: NombreRolService,
    private router: Router,
    private toastr: ToastrService,
    private _rolService: RolService,
    private aRouter: ActivatedRoute){
    this.rolForm = this.fb.group({
      NombreRol: ['',Validators.required],
      NombreUsuario: [''],
      ApP: [''],
      ApM: [''],
      Email: [''],
      Telefono: [''],
      Nombre: [''],
      Privilegios:  this.fb.array([]),
      //Nombre: ['', Validators.required],
      })
      this.id = this.aRouter.snapshot.paramMap.get('id');
  }


  ngOnInit(): void {
    this.esEditar();
    this.esEditar2();
    this.esEditar3();
    this.obtenerNombreRol();
  }
  
  procesarInput() {
    const tipoUsuario = this.rolForm.get('NombreRol')?.value;
    if (tipoUsuario === 'Administrador') {
      this.agregarRol();
    } else if (tipoUsuario === 'Estandar') {
      this.agregarRol2();
    } else if (tipoUsuario === 'Verificador') {
      this.agregarRol3();
    } 
  }

  obtenerNombreRol() {
    this._nombreRolService.getRol().subscribe(data => {
      console.log(data);
      this.listNombreRol = data;
    }, error => {
      console.log(error);
    })
  }
  
  agregarRol() {
    const ROL: Rol = {
      NombreRol: this.rolForm.get('NombreRol')?.value,
      NombreUsuario: this.rolForm.get('NombreUsuario')?.value,
      ApP: this.rolForm.get('ApP')?.value,
      ApM: this.rolForm.get('ApM')?.value,
      Email: this.rolForm.get('Email')?.value,
      Telefono: this.rolForm.get('Telefono')?.value,
      Nombre: this.rolForm.get('Nombre')?.value,
      Privilegios: this.rolForm.get('Privilegios')?.value.concat(['GestionarUsuarios','GestionarEmpresas', 'AgregarTopico','AgregarTema','CargarCodigo','Borradores','RevisionCodigo' ]),
 

    }

    
    if(this.id !== null){
      //editar rol
      this._rolService.editarRol(this.id, ROL).subscribe(data =>{
        this.toastr.success('El rol fue registrado con exito!', 'Rol Administrador!');
        this.router.navigate(['/listar-noRol']);
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
          Nombre: data.Nombre,
          Privilegios: data.Privilegios,
        })
      })
    }
  }

  agregarRol2() {
    const ROL: Rol = {
      NombreRol: this.rolForm.get('NombreRol')?.value,
      NombreUsuario: this.rolForm.get('NombreUsuario')?.value,
      ApP: this.rolForm.get('ApP')?.value,
      ApM: this.rolForm.get('ApM')?.value,
      Email: this.rolForm.get('Email')?.value,
      Telefono: this.rolForm.get('Telefono')?.value,
      Nombre: this.rolForm.get('Nombre')?.value,
      Privilegios: this.rolForm.get('Privilegios')?.value.concat(['AgregarTema','CargarCodigo', 'Borradores']),
  
    }
  
    
    if(this.id !== null){
      //editar rol
      this._rolService.editarRol(this.id, ROL).subscribe(data =>{
        this.toastr.success('El rol fue registrado con exito!','Rol Estandar!');
        this.router.navigate(['/listar-noRol']);
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
  
  esEditar2() {
  
    if(this.id !== null) {
      this._rolService.obtenerRol(this.id).subscribe(data => {
        this.rolForm.setValue({
          NombreUsuario: data.NombreUsuario,
          NombreRol: data.NombreRol,
          ApP: data.ApP,
          ApM: data.ApM,
          Email: data.Email,
          Telefono: data.Telefono,
          Nombre: data.Nombre,
          Privilegios: data.Privilegios,
        })
      })
    }
  }

  agregarRol3() {
    const ROL: Rol = {
      NombreRol: this.rolForm.get('NombreRol')?.value,
      NombreUsuario: this.rolForm.get('NombreUsuario')?.value,
      ApP: this.rolForm.get('ApP')?.value,
      ApM: this.rolForm.get('ApM')?.value,
      Email: this.rolForm.get('Email')?.value,
      Telefono: this.rolForm.get('Telefono')?.value,
      Nombre: this.rolForm.get('Nombre')?.value,
      Privilegios: this.rolForm.get('Privilegios')?.value.concat(['AgregarTema','RevisionCodigo', 'CargarCodigo', 'Borradores']),

    }
  
    
    if(this.id !== null){
      //editar rol
      this._rolService.editarRol(this.id, ROL).subscribe(data =>{
        this.toastr.success('El rol fue registrado con exito!','Rol Verificador!');
        this.router.navigate(['/listar-noRol']);
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
  
  esEditar3() {
  
    if(this.id !== null) {
      this._rolService.obtenerRol(this.id).subscribe(data => {
        this.rolForm.setValue({
          NombreUsuario: data.NombreUsuario,
          NombreRol: data.NombreRol,
          ApP: data.ApP,
          ApM: data.ApM,
          Email: data.Email,
          Telefono: data.Telefono,
          Nombre: data.Nombre,
          Privilegios: data.Privilegios,

        })
      })
    }
  }

  

}







   
