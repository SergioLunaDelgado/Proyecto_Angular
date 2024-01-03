import { Component } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  
  urkuSearch:any = '';
  
  constructor(public meta: InfoPaginaService) {
    
  }

  ngOnInit() {
    this.urkuSearch = document.querySelector('#urku-search');
    this.urkuSearch.value = '';
  }
}
