import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order-service.service';
import { Order } from '../../../interfaces/order';
@Component({
    selector: 'app-list-ordenrs',
    templateUrl: './list-orders.component.html',
    styleUrl: './list-orders.component.css'
})
export class ListOrdersComponent implements OnInit{
    constructor(private orderService:OrderService){}

    orderList:Array<Order> = []

    ngOnInit(): void {
        this.loadList();
    }

    loadList(){
        this.orderService.getOrders().subscribe(
            (res)=>this.orderList=res
        );
    }

    deleteListItem(id:any){
        if(confirm(`Esta seguro que desea borrar la orden número ${id}?`)){
            this.orderService.deleteOrder(id);
            this.loadList();
        }
    }
}
