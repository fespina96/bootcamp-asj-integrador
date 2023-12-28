import { ItemOrden } from "./item-orden"

export interface Orden {
    order_num:number|"",
    emision:string,
    entrega_estimada:string,
    address:string,
    prov_id:string,
    products:Array<ItemOrden>,
    total:number|"",
    estado:boolean
}