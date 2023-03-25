

export class Rol{
    _id?: number;
    
    NombreRol: string;
    NombreUsuario: String;
    ApP: String;
    ApM: String;
    Privilegios: string[];
    Nombre: String;
    Email: String;
    Telefono: String;

   

    constructor(NombreRol: string, Privilegios: string[], NombreUsuario: string, Nombre: string, ApP: string, ApM: string,  Email: String, Telefono: String){
      
        this.NombreRol = NombreRol;
        this.NombreUsuario = NombreUsuario;
        this.ApP = ApP;
        this.ApM = ApM;
        this.Privilegios = Privilegios;
        this.Email = Email;
        this.Telefono = Telefono;
        this.Nombre = Nombre;
       
    }
}