import { Component } from '@angular/core';
import { productos } from '../../data/productos';

@Component({
  selector: 'app-list-productos',
  templateUrl: './list-productos.component.html',
  styleUrl: './list-productos.component.css'
})
export class ListProductosComponent {
    productList = productos;
}
