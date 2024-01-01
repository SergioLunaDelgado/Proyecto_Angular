/* Este archivo solo se carga la primera vez que se visita a la pagina, sustituye el localstorage */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { infoPagina } from '../interfaces/info.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: infoPagina = {};
  cargada: boolean = true;
  equipo: any = [];

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }
  
  private cargarInfo() {
    /* Leer el archivo JSON */
    this.http.get('assets/data/data.json').subscribe((res: infoPagina) => {
      this.cargada = false;
      this.info = res;
    });
  }
  
  private cargarEquipo() {
    this.http.get('https://portafolio-8e3e1-default-rtdb.firebaseio.com/equipo.json').subscribe((res: any) => {
      this.equipo = res;
      this.cargada = false;
    });

  }
}
