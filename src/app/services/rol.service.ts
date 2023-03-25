import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Rol } from '../models/rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  url = 'http://localhost:4000/api/rol/';

  constructor(private http: HttpClient) { }

  getRol(): Observable<any> {
    return this.http.get(this.url);
  }


  eliminarRol(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarRol(rol: Rol): Observable<any> {
    return this.http.post(this.url, rol);
  }

  obtenerRol(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarRol(id: string, rol: Rol): Observable<any> {
    return this.http.put(this.url + id, rol);
  }


}
