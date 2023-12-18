import { Injectable } from '@angular/core';
import { productos
 } from '../data/productos';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

    constructor() { }

    prodList = productos;

    get getProductos(){
        return this.prodList;
    }

    set addProducto(productoNuevo:any){
        this.prodList.push(productoNuevo);
    }

    
}
