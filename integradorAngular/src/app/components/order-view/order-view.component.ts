import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../services/order-service.service';
import { Orden } from '../../interfaces/orden';
@Component({
    selector: 'app-order-view',
    templateUrl: './order-view.component.html',
    styleUrl: './order-view.component.css'
})
export class OrderViewComponent {
    constructor(private route:ActivatedRoute, private orderService:OrderService, private router:Router){}

    orderDetail:Orden = {
        order_num:"",
        emision:"",
        entrega_estimada:"",
        address:"",
        prov_id:"",
        products:[],
        total:"",
        estado:true
    }

    ngOnInit(): void {
        this.cargarProducto();
    }

    cargarProducto(){
        this.orderDetail = this.orderService.getOrderById(this.route.snapshot.paramMap.get("id"));
    }

    cancelarOrden(id:any){
        if(confirm(`Esta seguro que desea cancelar la orden Nº ${id}?`)){
            this.orderService.checkOrder(id);
            this.router.navigateByUrl("/ordenes");
        }
    }
}
