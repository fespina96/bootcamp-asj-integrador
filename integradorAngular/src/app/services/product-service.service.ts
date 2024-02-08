import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductFilterOptions } from '../interfaces/product-filter-options';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private productCategoryUrl = "http://localhost:8080/product-category"

    private productUrl = "http://localhost:8080/product"

    constructor(private http:HttpClient) { }

    headers = new HttpHeaders({
        "Content-Type": "application/json"
    });

    getProducts():Observable<any>{
        return this.http.get(this.productUrl);
    }

    getFilteredProducts(filterOptions:ProductFilterOptions):Observable<any>{
        return this.http.post(this.productUrl+"/filtered",JSON.stringify(filterOptions),{
            headers: this.headers
        });
    }

    getFilteredDeletedProducts(filterOptions:ProductFilterOptions):Observable<any>{
        return this.http.post(this.productUrl+"/filtered/deleted",JSON.stringify(filterOptions),{
            headers: this.headers
        });
    }

    getDeletedProducts():Observable<any>{
        return this.http.get(this.productUrl+'/deleted');
    }

    getProductById(id:any):Observable<any>{
        return this.http.get(this.productUrl+"/"+id);
    }

    addProduct(productoNuevo?:Product):Observable<any>{
        return this.http.post(this.productUrl,JSON.stringify(productoNuevo),{
            headers: this.headers
        });
    }

    editProduct(id:any,productEditInput?:Product):Observable<any>{
        return this.http.put(this.productUrl+"/"+id,JSON.stringify(productEditInput),{
            headers: this.headers
        });
    }

    deleteProduct(id:any):Observable<any>{
        return this.http.delete(this.productUrl+"/"+id);
    }

    undoDeleteProduct(id:any):Observable<any>{
        return this.http.delete(this.productUrl+"/undo/"+id);
    }


    getProductsBySupplierId(id:any):Observable<any>{
        return this.http.get(this.productUrl+"/supplier/"+id);
    }

    getProductCategories():Observable<any>{
        return this.http.get(this.productCategoryUrl);
    }

    getProductCategoryById(id:any):Observable<any>{
        return this.http.get(this.productCategoryUrl+"/"+id);
    }

    addProductCategory(input:any):Observable<any>{
        return this.http.post(this.productCategoryUrl,JSON.stringify({name:input.name,description:input.description}),{
            headers: this.headers
        });
    }
}
