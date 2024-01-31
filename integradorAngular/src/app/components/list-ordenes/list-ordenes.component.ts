import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order-service.service';
import { Order } from '../../interfaces/order';
@Component({
    selector: 'app-list-ordenes',
    templateUrl: './list-ordenes.component.html',
    styleUrl: './list-ordenes.component.css'
})
export class ListOrdenesComponent implements OnInit{
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
