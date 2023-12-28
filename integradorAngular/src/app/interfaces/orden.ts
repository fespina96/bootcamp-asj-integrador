export interface Orden {
    order_num:number|"",
    emision:string,
    entrega_estimada:string,
    address:string,
    prov_id:string,
    products:any,
    total:number|"",
    estado:boolean
}