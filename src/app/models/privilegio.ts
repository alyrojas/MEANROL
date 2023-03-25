export class Privilegio{
    _id?: number;
    
    Menu: string;
    Privilegios: string[];
   

    constructor(Menu: string, Privilegios: string[]){
      
        this.Menu = Menu;
        this.Privilegios = Privilegios;
       
    }
}