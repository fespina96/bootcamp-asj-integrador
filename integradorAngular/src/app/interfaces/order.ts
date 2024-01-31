export interface Order {
    id:number|"",
    emision_date:Date|"",
    estimated_delivery_date:Date|"",
    delivery_date:Date|"",
    address:string,
    supplier_id:string,
    total:number|"",
    order_state_id:number|"",
    created_at:Date|"",
    updated_at:Date|"",
    deleted_at:Date|""
}