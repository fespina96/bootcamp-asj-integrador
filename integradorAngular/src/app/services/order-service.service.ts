import { Injectable } from '@angular/core';
import { Order } from '../interfaces/orden';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    orderUrl  ="http://locahost:8080/order"

    constructor(private http:HttpClient) { }

    public getOrders():Observable<any>{
        return this.http.get(this.orderUrl);
    }

    public getOrderById(id:any):Observable<any>{
        return this.http.get(this.orderUrl+"/"+id);
    }

    public addOrder(newOrder:Order):Observable<any>{
        return this.http.post(this.orderUrl,newOrder);
    }

    public editOrder(id:any,orderEditInput:Order):Observable<any>{
        return this.http.put(this.orderUrl+"/"+id,orderEditInput);
    }

    public deleteOrder(id:any):Observable<any>{
        return this.http.delete(this.orderUrl+"/"+id);
    }
}
