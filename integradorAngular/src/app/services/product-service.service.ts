import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    productUrl = "http://localhost:8080/product"

    constructor(private http:HttpClient) { }

    getProducts():Observable<any>{
        return this.http.get(this.productUrl);
    }

    getProductById(id:any):Observable<any>{
        return this.http.get(this.productUrl+"/"+id);
    }

    addProduct(productoNuevo:Product):Observable<any>{
        return this.http.post(this.productUrl,productoNuevo);
    }

    editProduct(id:any,productEditInput:Product):Observable<any>{
        return this.http.put(this.productUrl+"/"+id,productEditInput);
    }

    deleteProduct(id:any):Observable<any>{
        return this.http.delete(this.productUrl+"/"+id);
    }

    getSupplierProductsById(id:any):Observable<any>{
        return this.http.get(this.productUrl+"/"+id+"/products")
    }
}
