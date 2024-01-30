export interface Product{
    id:number|"",
    sku_code:string,
    supplier_id:string,
    product_category_id:number|"",
    name:string,
    description:string,
    price:number|"",
    image_url:string,
    created_at:Date|"",
    updated_at:Date|"",
    deleted_at:Date|""
}
