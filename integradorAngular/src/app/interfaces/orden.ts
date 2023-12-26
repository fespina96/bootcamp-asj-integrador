export interface Orden {
        order_num:number,
        emision:Date,
        entrega_estimada:Date,
        address:string,
        prov_id:number,
        products:any,
        total:number,
        estado:boolean
}