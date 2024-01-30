export interface Order {
    id:number|"",
    emision_date:Date|"",
    estimated_delivery_date:Date|"",
    delivery_date:Date|"",
    address:string,
    supplier_id:string,
    total:number|"",
    estado:boolean
}