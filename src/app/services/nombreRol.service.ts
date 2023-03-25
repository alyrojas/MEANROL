import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { NombreRol } from '../models/nombreRol';

@Injectable({
  providedIn: 'root'
})
export class NombreRolService {

  url = 'http://localhost:4000/api/nombreRol/';

  constructor(private http: HttpClient) { }

  getRol(): Observable<any> {
    return this.http.get(this.url);
  }


  eliminarRol(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarRol(rol: NombreRol): Observable<any> {
    return this.http.post(this.url, rol);
  }

  obtenerRol(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarRol(id: string, rol: NombreRol): Observable<any> {
    return this.http.put(this.url + id, rol);
  }


}
