import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductCategoryService {
    private productCategoryUrl = 'http://localhost:8080/product-category'

    constructor(private http:HttpClient) { }

    getProductCategories():Observable<any>{
        return this.http.get(this.productCategoryUrl);
    }

    getProductCategoryById(id:any):Observable<any>{
        return this.http.get(this.productCategoryUrl+"/"+id);
    }
    
}
