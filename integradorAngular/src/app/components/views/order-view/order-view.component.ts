import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../../services/order-service.service';
import { Order } from '../../../interfaces/order';
import { ToastService } from '../../../services/toast.service';
@Component({
    selector: 'app-order-view',
    templateUrl: './order-view.component.html',
    styleUrl: './order-view.component.css'
})
export class OrderViewComponent {
    constructor(private route:ActivatedRoute, private orderService:OrderService, private router:Router, private toastService:ToastService){}

    orderDetail:Order = {
        id:undefined,
        emisionDate:undefined,
        estimatedDeliveryDate:undefined,
        deliveryDate:undefined,
        address:"",
        supplier:{id:undefined,name:""},
        total:0,
        orderState:{id:undefined,name:""},
        createdAt:undefined,
        updatedAt:undefined,
        deletedAt:undefined
    }

    orderProducts:any = [];

    ngOnInit(): void {
        this.loadOrder();
    }

    loadOrder(){
        this.orderService.getOrderById(this.route.snapshot.paramMap.get("id")).subscribe(
            {
                next:(data)=>{this.orderDetail=data},
                error:(error)=>{this.toastService.show(error,{ classname: 'bg-danger text-light', delay: 15000 })},
                complete:()=>{}
            }
        );
        this.orderService.getOrderProductsById(this.route.snapshot.paramMap.get("id")).subscribe(
            {
                next:(data)=>{this.orderProducts=data},
                error:(error)=>{this.toastService.show(error,{ classname: 'bg-danger text-light', delay: 15000 })},
                complete:()=>{}
            }
        );
    }

    cancelOrder(id:any){
        if(confirm(`Esta seguro que desea cancelar la orden Nº ${id}?`)){
            this.orderService.deleteOrder(id).subscribe(
                {
                    next:(data)=>{console.log(data)},
                    error:(error)=>{this.toastService.show(error,{ classname: 'bg-danger text-light', delay: 15000 })},
                    complete:()=>{this.toastService.show("Orden cancelada exitosamente.",{ classname: 'bg-success', delay: 10000 })}
                }
            )
        }
    }

    orderDelivered(id:any){
        this.orderService.orderDelivered(id).subscribe(
            {
                next:(data)=>{console.log(data)},
                error:(error)=>{this.toastService.show(error,{ classname: 'bg-danger text-light', delay: 15000 })},
                complete:()=>{this.router.navigateByUrl("/ordenes")}
            }
        );;
    }
}
