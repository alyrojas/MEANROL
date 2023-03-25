import { Privilegio } from './../models/privilegio';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class PrivilegioService {

  url = 'http://localhost:4000/api/privilegio/';

  constructor(private http: HttpClient) { }

  getPrivilegio(): Observable<any> {
    return this.http.get(this.url);
  }


  eliminarPrivilegio(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarPrivilegio(privilegio: Privilegio): Observable<any> {
    return this.http.post(this.url, privilegio);
  }

  obtenerPrivilegio(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarPrivilegio(id: string, privilegio: Privilegio): Observable<any> {
    return this.http.put(this.url + id, privilegio);
  }


}
