import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    
    if (arg === '' || arg.length < 3) return value;
    const resultRol = [];
    for (const rol of value) {
      if (rol.NombreUsuario.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultRol.push(rol);
      } else if(rol.ApP.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultRol.push(rol);
      } else if(rol.ApM.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultRol.push(rol);
      }else if(rol.Nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultRol.push(rol);
      } else if(rol.NombreRol.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultRol.push(rol);
      };
    };
    return resultRol;
  }

}
