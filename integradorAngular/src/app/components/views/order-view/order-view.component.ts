import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../../services/order-service.service';
import { Order } from '../../../interfaces/order';
@Component({
    selector: 'app-order-view',
    templateUrl: './order-view.component.html',
    styleUrl: './order-view.component.css'
})
export class OrderViewComponent {
    constructor(private route:ActivatedRoute, private orderService:OrderService, private router:Router){}

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
            (res)=>this.orderDetail=res
        );
        this.orderService.getOrderProductsById(this.route.snapshot.paramMap.get("id")).subscribe(
            (res)=>this.orderProducts=res
        );
    }

    cancelOrder(id:any){
        if(confirm(`Esta seguro que desea borrar la orden Nº ${id}?`)){
            this.orderService.deleteOrder(id);
            this.router.navigateByUrl("/ordenes");
        }
    }

    orderDelivered(id:any){
        this.orderService.orderDelivered(id);
        this.router.navigateByUrl("/ordenes");
    }
}
