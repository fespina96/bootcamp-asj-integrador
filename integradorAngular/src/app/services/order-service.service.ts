import { Injectable } from '@angular/core';
import { Order } from '../interfaces/order';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    private orderUrl  ="http://localhost:8080/order"

    private orderProductsUrl  ="http://localhost:8080/products-per-order"

    constructor(private http:HttpClient) { }

    headers = new HttpHeaders({
        "Content-Type": "application/json"
    });

    getOrders():Observable<any>{
        return this.http.get(this.orderUrl);
    }

    getOrderById(id:any):Observable<any>{
        return this.http.get(this.orderUrl+"/"+id);
    }

    addOrder(newOrder?:Order):Observable<any>{
        return this.http.post(this.orderUrl,JSON.stringify(newOrder),{
            headers: this.headers
        });
    }

    editOrder(id:any,orderEditInput?:Order):Observable<any>{
        return this.http.put(this.orderUrl+"/"+id,JSON.stringify(orderEditInput),{
            headers: this.headers
        });
    }

    deleteOrder(id:any):Observable<any>{
        return this.http.delete(this.orderUrl+"/"+id);
    }

    getOrderProductsById(id:any):Observable<any>{
        return this.http.get(this.orderProductsUrl+"/"+id);
    }

    addOrderProducts(orderProducts:any):Observable<any>{
        return this.http.post(this.orderProductsUrl,JSON.stringify(orderProducts),{
            headers: this.headers
        });
    }

    getLastOrderId():Observable<any>{
        return this.http.get(this.orderUrl+"/lastOrderId");
    }
}
