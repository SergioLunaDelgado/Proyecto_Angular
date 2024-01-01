/* Este archivo solo se carga la primera vez que se visita a la pagina, sustituye el localstorage */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { infoPagina } from '../interfaces/info.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: infoPagina = {};
  cargada: boolean = false;

  constructor(private http: HttpClient) {
    /* Leer el archivo JSON */
    this.http.get('assets/data/data.json').subscribe((res: infoPagina) => {
      console.log(res);
      this.cargada = true;
      this.info = res;
    });

  }
}
