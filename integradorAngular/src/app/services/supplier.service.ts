import { Injectable } from '@angular/core';
import { Supplier } from '../interfaces/supplier';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SupplierFilterOptions } from '../interfaces/supplier-filter-options';
import { SupplierCategory } from '../interfaces/supplier-category';

@Injectable({
    providedIn: 'root'
})
export class SupplierService {

    private supplierCategoryUrl = 'http://localhost:8080/supplier-category'

    private supplierUrl = "http://localhost:8080/supplier";

    private conditionUrl = "http://localhost:8080/condition";

    constructor(private http:HttpClient) { }

    headers = new HttpHeaders({
        "Content-Type": "application/json"
    });

    getSuppliers():Observable<any>{
        return this.http.get(this.supplierUrl);
    }

    getDeletedSuppliers():Observable<any>{
        return this.http.get(this.supplierUrl+"/deleted");
    }

    getSupplierById(id:any):Observable<any>{
        return this.http.get(this.supplierUrl+"/"+id);
    }

    addSupplier(newSupplier:Supplier):Observable<any>{
        return this.http.post(this.supplierUrl,JSON.stringify(newSupplier),{
            headers: this.headers
        });
    }

    editSupplier(id:any,supplierEditInput?:Supplier):Observable<any>{
        return this.http.put(this.supplierUrl+"/"+id,JSON.stringify(supplierEditInput),{
            headers: this.headers
        });
    }

    deleteSupplier(id:any):Observable<any>{
        return this.http.delete(this.supplierUrl+"/"+id);
    }

    undoDeleteSupplier(id:any):Observable<any>{
        return this.http.delete(this.supplierUrl+"/undo/"+id);
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

    addSupplierCategory(input:SupplierCategory):Observable<any>{
        return this.http.post(this.supplierCategoryUrl,JSON.stringify(input),{
            headers: this.headers
        });
    }

    getSupplierCategoryById(id:any):Observable<any>{
        return this.http.get(this.supplierCategoryUrl+"/"+id);
    }

    getFilteredSuppliers(filterOptions:SupplierFilterOptions):Observable<any>{
        return this.http.post(this.supplierUrl+"/filtered",JSON.stringify(filterOptions),{
            headers: this.headers
        });
    }

    getFilteredDeletedSuppliers(filterOptions:SupplierFilterOptions):Observable<any>{
        return this.http.post(this.supplierUrl+"/filtered/deleted",JSON.stringify(filterOptions),{
            headers: this.headers
        });
    }
}
