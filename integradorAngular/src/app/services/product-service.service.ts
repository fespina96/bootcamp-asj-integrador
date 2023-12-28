import { Injectable } from '@angular/core';
import { productosData } from '../data/productos';
import { Producto } from '../interfaces/producto';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private router:Router) { }

    prodList = productosData;

    errorProduct:Producto = {
        cod_sku:"",
        prov_id:"",
        cat_id:"",
        name_prod:"",
        desc:"",
        price:"",
        img_url:""
    }

    public getProductos(){
        return this.prodList;
    }

    public getProductosById(id:any){
        if(id.length>=4){
            return this.prodList.filter(item=>item.cod_sku==id)[0];
        }else{
            alert('Error al cargar producto.')
            return this.errorProduct;
        }
    }

    public addProducto(productoNuevo:Producto){
        if(this.prodList.find(item=>item.cod_sku==productoNuevo.cod_sku)){
            alert('El cod_skuigo debe ser único.')
        }else{
            this.prodList.push(productoNuevo);
            alert('Producto añadido correctamente.');
            this.router.navigateByUrl('/productos');
        }
    }

    public editProducto(productEditInput:Producto,id:any){
        let flag = false;
        for(let x=0;x<this.prodList.length;x++){
            if(this.prodList[x].cod_sku == id){
                this.prodList[x] = productEditInput;
                flag=true;
                break;
            }
        }
        if(flag=true){
            alert('Producto editado correctamente.');
            this.router.navigateByUrl('/productos');
        }else{
            alert('Error al editar producto.');
        }
    }

    public deleteProducto(id:any){
        this.prodList = this.prodList.filter(item=>item.cod_sku!=id);
        alert('Producto eliminado correctamente.');
    }
}
