import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SupplierCategoryService {

    private supplierCategoryUrl = 'http://localhost:8080/supplier-category'

    constructor(private http:HttpClient) { }

    getSupplierCategories():Observable<any>{
        return this.http.get(this.supplierCategoryUrl);
    }

    getSupplierCategoryById(id:any):Observable<any>{
        return this.http.get(this.supplierCategoryUrl+"/"+id);
    }
    
}
