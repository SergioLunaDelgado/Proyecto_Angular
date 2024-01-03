import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.css'
})
export class PortafolioComponent {
  urkuSearch:any = '';
  
  constructor (public productos: ProductosService ) {
  }

  ngOnInit() {
    this.urkuSearch = document.querySelector('#urku-search');
    this.urkuSearch.value = '';
  }
}
