import { Privilegio } from './../../models/privilegio';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PrivilegioService } from 'src/app/services/privilegio.service';

@Component({
  selector: 'app-crear-privilegio',
  templateUrl: './crear-privilegio.component.html',
  styleUrls: ['./crear-privilegio.component.css']
})
export class CrearPrivilegioComponent implements OnInit {
  privilegioForm: FormGroup;
  id: string | null;
  titulo = 'Crear Privilegio';
   
  constructor(private fb: FormBuilder, 
    private router: Router,
    private toastr: ToastrService,
    private _privilegioService: PrivilegioService,
    private aRouter: ActivatedRoute){
    this.privilegioForm = this.fb.group({
      Menu: ['',Validators.required],
      Privilegios:  this.fb.array([]),
      //Nombre: ['', Validators.required],
      })
      this.id = this.aRouter.snapshot.paramMap.get('id');
  }


  ngOnInit(): void {
    this.esEditar();
  }

  get privilegios(): FormArray {
    return this.privilegioForm.get('Privilegios') as FormArray;
  }

  agregarPrivilegio(): void {
    const nuevoPrivilegio = this.fb.control('', Validators.required);
    this.privilegios.push(nuevoPrivilegio);
  }

  eliminarPrivilegio(index: number): void {
    this.privilegios.removeAt(index);
  }

  guardarPrivilegio() {

    const PRIVILEGIO: Privilegio = {
      Menu: this.privilegioForm.get('Menu')?.value,
      Privilegios: this.privilegioForm.get('Privilegios')?.value,

    }

    
    if(this.id !== null){
      //editar privilegio
      this._privilegioService.editarPrivilegio(this.id, PRIVILEGIO).subscribe(data =>{
        this.toastr.success('El privilegio fue actualizado con exito!', 'Privilegios!');
        this.router.navigate(['/listar-privilegios']);
      }, error => {
        console.log(error);
        this.privilegioForm.reset();
      })
    }else{
      //agregar rol
      
      console.log(PRIVILEGIO);
      this._privilegioService.guardarPrivilegio(PRIVILEGIO).subscribe(data => {
        this.toastr.success('El privilegio fue registrado con exito!', 'Privilegio!');
        this.router.navigate(['/listar-privilegios']);
      }, error => {
        console.log(error);
        this.privilegioForm.reset();
      })
    }

    
  }

  esEditar() {

    if(this.id !== null) {
      this.titulo = 'Editar Privilegio';
      this._privilegioService.obtenerPrivilegio(this.id).subscribe(data => {
        this.privilegioForm.setValue({
          Menu: data.Menu,
          Privilegios: data.Privilegios,
        })
      })
    }
  }

 
  
}
