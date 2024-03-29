import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto.descripcion-interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  producto: ProductoDescripcion = {};
  id: string = '';

  constructor(private route: ActivatedRoute, public productoService: ProductosService) {

  }

  ngOnInit() {
    /* parametros -> constructor -> service-constructor -> private cargarProductos */
    this.route.params.subscribe(parametros => {
      this.productoService.getProducto(parametros['id']).subscribe((producto: ProductoDescripcion) => {
        this.id = parametros['id'];
        this.producto = producto;
      });
    })
  }
}
