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

    orderList:Array<Order> = [];

    orderStateList:Array<{id:"",name:""}> = [];

    ngOnInit(): void {
        this.loadList();
        this.orderService.getOrderStates().subscribe(
            (res)=>this.orderStateList=res
        )
    }

    loadList(){
        this.orderService.getOrders().subscribe(
            (res)=>this.orderList=res
        );
    }

    deleteListItem(id:any){
        if(confirm(`Esta seguro que desea borrar la orden número ${id}?`)){
            this.orderService.deleteOrder(id).subscribe(
                (res)=>console.log(res),
                (complete)=>this.loadList()
            );
        }
    }

    undoDeleteListItem(id:any){
        if(confirm(`Esta seguro que desea restablecer la orden número ${id}?`)){
            this.orderService.undoDeleteOrder(id).subscribe(
                (res)=>console.log(res),
                (complete)=>this.loadList()
            );
        }
    }
}
