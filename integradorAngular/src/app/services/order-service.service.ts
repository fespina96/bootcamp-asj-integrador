import { Injectable } from '@angular/core';
import { Order } from '../interfaces/order';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    private orderUrl  ="http://locahost:8080/order"

    private orderProductsUrl  ="http://locahost:8080/products-per-order"

    constructor(private http:HttpClient) { }

    getOrders():Observable<any>{
        return this.http.get(this.orderUrl);
    }

    getOrderById(id:any):Observable<any>{
        return this.http.get(this.orderUrl+"/"+id);
    }

    addOrder(newOrder?:Order):Observable<any>{
        return this.http.post(this.orderUrl,newOrder);
    }

    editOrder(id:any,orderEditInput?:Order):Observable<any>{
        return this.http.put(this.orderUrl+"/"+id,orderEditInput);
    }

    deleteOrder(id:any):Observable<any>{
        return this.http.delete(this.orderUrl+"/"+id);
    }

    getOrderProductsById(id:any){
        return this.http.get(this.orderProductsUrl+"/"+id)
    }
}
