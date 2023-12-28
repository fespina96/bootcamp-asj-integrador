import { Injectable } from '@angular/core';
import { ordenesData } from '../data/ordenes';
import { Orden } from '../interfaces/orden';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

    constructor(private router:Router) { }

    orderList = ordenesData;

    errorOrder:Orden = {
        order_num:"",
        emision:"",
        entrega_estimada:"",
        address:"",
        prov_id:"",
        products:[],
        total:"",
        estado:true
    }

    public getOrdenes(){
        return this.orderList;
    }

    public getOrderById(id:any){
        if(id>0){
            return this.orderList.filter(item=>item.order_num==id)[0];
        }else{
            alert('Error al cargar orden.')
            return this.errorOrder;
        }
    }

    public addOrder(orderNueva:Orden){
        if(this.orderList.find(item=>item.order_num==orderNueva.order_num)){
            alert('El número debe ser único.')
        }else{
            if(orderNueva.products.length!=0){
                this.orderList.push(orderNueva);
                alert('Orden añadido correctamente.');
                this.router.navigateByUrl('/ordenes');
            }else{
                alert('Orden vacía.')
            }

        }
    }

    public editOrder(orderEditInput:Orden,id:any){
        let flag = false;
        for(let x=0;x<this.orderList.length;x++){
            if(this.orderList[x].order_num == id){
                this.orderList[x] = orderEditInput;
                flag=true;
                break;
            }
        }
        if(flag=true){
            alert('Orden editada correctamente.');
            this.router.navigateByUrl('/productos');
        }else{
            alert('Error al editar orden.');
        }
    }

    public checkOrder(id:any){
        let flag = false;
        for(let x=0;x<this.orderList.length;x++){
            if(this.orderList[x].order_num == id){
                this.orderList[x].estado = !this.orderList[x].estado;
                flag=true;
                break;
            }
        }
        if(flag=true){
            alert('Orden cancelada correctamente.');
            this.router.navigateByUrl('/ordenes');
        }else{
            alert('Error al editar orden.');
        }
    }
}
