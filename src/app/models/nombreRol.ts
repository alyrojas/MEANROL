export class NombreRol{
    _id?: number;
    
    NombreRol: string;
    Menu: string;
    Privilegios: string[];
   

    constructor(NombreRol: string, Menu: string, Privilegios: string[]){
        this.NombreRol = NombreRol;
        this.Menu = Menu;
        this.Privilegios = Privilegios;
       
    }
}