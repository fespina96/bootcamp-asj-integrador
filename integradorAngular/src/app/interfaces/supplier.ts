export interface Supplier {
    id:number|"",
    code:string,
    name:string,
    supplier_category_id:number|"",
    logo_image_url:string,
    email:string,
    phone:string,
    website:string,
    address:string,
    zip_code:string,
    cuit:string,
    condition_id:number|"",
    country_id:number|"",
    state_id:number|"",
    contact_name:string,
    contact_surname:string,
    contact_email:string,
    contact_phone:string,
    contact_role:string,
    created_at:Date|"",
    updated_at:Date|"",
    deleted_at:Date|""

}