export interface Proveedor {
    cod:string,
    raz_social:string,
    rubro:string,
    logo_img_url:string,
    contact:contact,
    address:address,
    datos_fiscales:datos_fiscales,
    ref_contact:ref_contact
}

export interface contact{
    website:string,
    email:string,
    phone:string
}

export interface address{
    street:string,
    zip_code:string,
    state_id:number|"",
    country_id:number|""
}

export interface datos_fiscales{
    cuit:string,
    cod_condicion:number|""
}

export interface ref_contact{
    name:string,
    surname:string,
    phone:string,
    email:string,
    role:string
}