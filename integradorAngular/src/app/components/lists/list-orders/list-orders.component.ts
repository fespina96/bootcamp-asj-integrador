import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order-service.service';
import { Order } from '../../../interfaces/order';
import { ToastService } from '../../../services/toast.service';
@Component({
    selector: 'app-list-ordenrs',
    templateUrl: './list-orders.component.html',
    styleUrl: './list-orders.component.css'
})
export class ListOrdersComponent implements OnInit{
    constructor(private orderService:OrderService, private toastService:ToastService){}

    orderList:Array<Order> = [];

    selectedState="";

    orderStateList:Array<{id:"",name:""}> = [];

    ngOnInit(): void {
        this.loadList();
        this.orderService.getOrderStates().subscribe(
            {
                next:(data)=>{this.orderStateList=data},
                error:(error)=>{this.toastService.show(error,{ classname: 'bg-danger text-light', delay: 15000 })},
                complete:()=>{}
            }
        )
    }

    loadList(){
        this.orderService.getOrders().subscribe(
            {
                next:(data)=>{this.orderList=data},
                error:(error)=>{this.toastService.show(error,{ classname: 'bg-danger text-light', delay: 15000 })},
                complete:()=>{}
            }
        );
    }

    deleteListItem(id:any){
        if(confirm(`Esta seguro que desea cancelar la orden número ${id}?`)){
            this.orderService.deleteOrder(id).subscribe(
                {
                    next:(data)=>{console.log(data)},
                    error:(error)=>{this.toastService.show(error,{ classname: 'bg-danger text-light', delay: 15000 })},
                    complete:()=>{this.toastService.show("Orden cancelada.",{ classname: 'bg-success', delay: 10000 });this.loadList();}
                }
            );
        }
    }

    undoDeleteListItem(id:any){
        if(confirm(`Esta seguro que desea restablecer la orden número ${id}?`)){
            this.orderService.undoDeleteOrder(id).subscribe(
                {
                    next:(data)=>{console.log(data)},
                    error:(error)=>{this.toastService.show(error,{ classname: 'bg-danger text-light', delay: 15000 })},
                    complete:()=>{this.toastService.show("Orden restablecida.",{ classname: 'bg-success', delay: 10000 });this.loadList();}
                }
            );
        }
    }

    orderStateChange(){
        if(this.selectedState!=""){
            this.orderService.getOrdersByOrderStateId(this.selectedState).subscribe(
                {
                    next:(data)=>{this.orderList=data},
                    error:(error)=>{this.toastService.show(error,{ classname: 'bg-danger text-light', delay: 15000 })},
                    complete:()=>{}
                }
            );
        }else{
            this.loadList();
        }
    }
}
