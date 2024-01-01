import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Productos } from '../interfaces/producto.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: Productos[] = [];
  cargando = true;

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    this.http.get('https://portafolio-8e3e1-default-rtdb.firebaseio.com/productos_idx.json').subscribe((res: any) => {
      this.productos = res;
      this.cargando = false;
    });
  }
}
