import { Injectable } from '@angular/core';
import { productosData } from '../data/productos';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    constructor() { }

    prodList = productosData;

    errorProduct:Producto = {
        cod:0,
        prov:"",
        cat:"",
        name_prod:"",
        desc:"",
        price:0,
    }

    public getProductos(){
        return this.prodList;
    }

    public getProductosById(id:any){
        if(id>0){
            return this.prodList.filter(item=>item.cod==id)[0];
        }else{
            alert('Error al cargar producto.')
            return this.errorProduct;
        }
    }

    public addProducto(productoNuevo:Producto){
        if(this.prodList.find(item=>item.cod==productoNuevo.cod)){
            alert('El codigo debe ser único.')
        }else{
            this.prodList.push(productoNuevo);
        }
    }

    public editProducto(productEditInput:Producto,id:any){
        for(let x=0;x<this.prodList.length;x++){
            if(this.prodList[x].cod == id){
                this.prodList[x] = productEditInput;
                break;
            }
        }
    }

    public deleteProducto(id:any){
        this.prodList = this.prodList.filter(item=>item.cod!=id);
    }
}
