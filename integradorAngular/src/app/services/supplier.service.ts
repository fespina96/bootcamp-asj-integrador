import { Injectable } from '@angular/core';
import { Supplier } from '../interfaces/supplier';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SupplierService {

    private supplierCategoryUrl = 'http://localhost:8080/supplier-category'

    private supplierUrl = "http://localhost:8080/supplier";

    private conditionUrl = "http://localhost:8080/condition";

    constructor(private http:HttpClient) { }

    getSuppliers():Observable<any>{
        return this.http.get(this.supplierUrl);
    }

    getSupplierById(id:any):Observable<any>{
        return this.http.get(this.supplierUrl+"/"+id);
    }

    addSupplier(newSupplier:Supplier):Observable<any>{
        return this.http.post(this.supplierUrl,newSupplier);
    }

    editSupplier(id:any,supplierEditInput?:Supplier):Observable<any>{
        return this.http.put(this.supplierUrl+"/"+id,supplierEditInput);
    }

    deleteSupplier(id:any):Observable<any>{
        return this.http.delete(this.supplierUrl+"/"+id);
    }

    getConditions():Observable<any>{
        return this.http.get(this.conditionUrl);
    }

    getConditionById(id:any):Observable<any>{
        return this.http.get(this.conditionUrl+"/"+id);
    }

    getSupplierCategories():Observable<any>{
        return this.http.get(this.supplierCategoryUrl);
    }

    getSupplierCategoryById(id:any):Observable<any>{
        return this.http.get(this.supplierCategoryUrl+"/"+id);
    }
}
