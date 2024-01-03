import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Productos } from '../interfaces/producto.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: Productos[] = [];
  productosFiltrado: Productos[] = [];
  cargando = true;

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {

    return new Promise( (resolve, reject) => {
      this.http.get('https://portafolio-8e3e1-default-rtdb.firebaseio.com/productos_idx.json').subscribe((res: any) => {
        this.productos = res;
        this.cargando = false;
        // resolve;
      });
    })

  }

  getProducto(id:string) {
    return this.http.get(`https://portafolio-8e3e1-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(termino: string) {
    if(this.productos.length === 0) {
      /* Cargar Productos */
      this.cargarProductos().then( () => {
        /* ejecutar despues de tener los productos */
        /* Aplicar filtro */
        this.filtrarProductos(termino);
      });
    } else {
      /* Aplicar el filtro */
      this.filtrarProductos(termino);
    }
  }
  
  private filtrarProductos(termino: string) {
    this.productosFiltrado = [];
    termino = termino.toLocaleLowerCase();
    this.productos.forEach((prod:any) => {
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if(prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0 ) {
        this.productosFiltrado.push(prod);
      }
    });
  }
}
