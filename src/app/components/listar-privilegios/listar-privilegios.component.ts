import { NombreRol } from './../../models/nombreRol';
import { PrivilegioService } from './../../services/privilegio.service';
import { NombreRolService } from './../../services/nombreRol.service';
import { Component } from '@angular/core';
import { Privilegio } from 'src/app/models/privilegio';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-privilegios',
  templateUrl: './listar-privilegios.component.html',
  styleUrls: ['./listar-privilegios.component.css']
})
export class ListarPrivilegiosComponent {
  listPrivilegio: Privilegio[] = [];
  listNombreRol: NombreRol[] = [];
  //listPrivilegioAdministrador:  Privilegio[] = [];
  privilegioAdministrador: any;
  privilegioVerificador: string[] = [];


  constructor(private _privilegioService: PrivilegioService,
    private _nombreRolService: NombreRolService,
    private toastr: ToastrService) {}

  ngOnInit(): void {
    this.obtenerPrivilegio();
  }

  obtenerPrivilegio() {
    this._privilegioService.getPrivilegio().subscribe(data => {
      console.log(data);
      this.listPrivilegio = data;
    }, error => {
      console.log(error);
    })
  }

  obtenerNombreRol() {
    this._nombreRolService.getRol().subscribe(data => {
      console.log(data);
      this.listNombreRol = data;
    }, error => {
      console.log(error);
    })
  }


  obtenerNombreDelPrimerPrivilegio() {
    this._privilegioService.getPrivilegio().subscribe(data => {
      console.log(data);
      this.listPrivilegio = data;
  
      // Obtener el valor del campo 'nombre' del primer elemento del array
      const primerPrivilegio = this.listPrivilegio[0];
      const nombreDelPrimerPrivilegio = primerPrivilegio.Privilegios;
      console.log(nombreDelPrimerPrivilegio); // Mostrar el valor en la consola
    }, error => {
      console.log(error);
    });
  }


  obtenerPrivilegioVerificador() {
    this._privilegioService.getPrivilegio().subscribe(data => {
      return this.privilegioVerificador = data[0].Privilegios;
    }, error => {
      console.log(error);
    })
  }



  eliminarPrivilegio(id:any) {
    this._privilegioService.eliminarPrivilegio(id).subscribe(data => {
      this.toastr.error('El privilegio fue eliminado con exito');
      this.obtenerPrivilegio();
    }, error=> {
       console.log(error);
    } )
  }
}
