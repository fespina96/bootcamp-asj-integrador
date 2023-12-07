window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki
    if(localStorage.getItem("proveedores")==null){
        let proveedores = [{"Código":"1","Razón Social":"Juancito SRL","Rubro":"Indumentaria","Contacto":{"Sitio Web":"www.juancito.com.ar","E-Mail":"contacto@juancito.com.ar","Teléfono":"11 1234-5678",},"Dirección":{"Calle":"Calle Falsa 1234","Código Postal":"1001","Provincia":"Buenos Aires","País":"Argentina",},"Datos Fiscales":{"CUIT":"12-34567890-1","Condición":"OK",},"Contacto Referencia":{"Nombre":"Juan Jose","Apellido":"Perez","Teléfono":"11 1234-5678","E-Mail":"jjp@juancito.com.ar","Rol":"CEO"}},
                            {"Código":"2","Razón Social":"Camila SA","Rubro":"Tecnología","Contacto":{"Sitio Web":"www.camila.com.ar","E-Mail":"contacto@camila.com.ar","Teléfono":"11 2345-6789",},"Dirección":{"Calle":"Calle 100% Real 4321","Código Postal":"4001","Provincia":"Santa Fe","País":"Argentina",},"Datos Fiscales":{"CUIT":"32-12345123-3","Condición":"OK",},"Contacto Referencia":{"Nombre":"Jose","Apellido":"Alegre","Teléfono":"11 6547-4235","E-Mail":"ose.alegre@camila.com.ar","Rol":"Empleado"}},
                            {"Código":"3","Razón Social":"Pedro SA","Rubro":"Carpintería","Contacto":{"Sitio Web":"www.pedro.com.ar","E-Mail":"contacto@pedro.com.ar","Teléfono":"11 0123-4567",},"Dirección":{"Calle":"Av. Acá A La Vuelta 123","Código Postal":"2222","Provincia":"Cordoba","País":"Argentina",},"Datos Fiscales":{"CUIT":"16-12315553-7","Condición":"OK",},"Contacto Referencia":{"Nombre":"Ana María","Apellido":"Gomez","Teléfono":"11 5135-1235","E-Mail":"amgomez@pedro.com.ar","Rol":"Jefa"}},
                        ];
        localStorage.setItem("proveedores",JSON.stringify(proveedores));
    }

    if(localStorage.getItem("productos")==null){
        let productos = [{"Código":"1","Proveedor":"Juancito SRL","Categoría":"Indumentaria","Nombre Producto":"Remera Juancito","Descripción":"Remera Marca Juancito","Precio":10000},
                        {"Código":"2","Proveedor":"Juancito SRL","Categoría":"Indumentaria","Nombre Producto":"Gorra Juancito","Descripción":"Gorra Marca Juancito","Precio":12000},
                        {"Código":"3","Proveedor":"Camila SA","Categoría":"Tecnología","Nombre Producto":"Control Remoto Universal","Descripción":"Control Remoto Universal Serie CRU-1234","Precio":4000},
                        {"Código":"4","Proveedor":"Camila SA","Categoría":"Tecnología","Nombre Producto":"Joystick Gamer","Descripción":"Joystick Gamer Serie JG-4321","Precio":50000},
                        {"Código":"5","Proveedor":"Pedro SA","Categoría":"Muebles","Nombre Producto":"Escritorio Oficina","Descripción":"Escritorio 80x200x40","Precio":300000},
                        ];
        localStorage.setItem("productos",JSON.stringify(productos));
    }

    if(localStorage.getItem("ordenes")==null){
        let ordenesDeCompra = [{"Número":"1","Emisión":"12/12/2012","Entrega Esperada":"19/02/2013","Dirección":"Calle 123","Proveedor":"Juancito SRL","Productos":["Remera Juancito","Remera Juancito"],"Total":20000},
                                {"Número":"2","Emisión":"21/01/2017","Entrega Esperada":"09/10/2017","Dirección":"Calle 123","Proveedor":"Camila SA","Productos":["Control Remoto Universal","Joystick Gamer"],"Total":54000},
                                {"Número":"3","Emisión":"29/02/2016","Entrega Esperada":"01/03/2016","Dirección":"Calle 123","Proveedor":"Camila SA","Productos":["Control Remoto Universal"],"Total":4000},
                            ];
        localStorage.setItem("ordenes",JSON.stringify(ordenesDeCompra));
    }

    let listFlag = document.getElementById("list-title").innerText;
    let data = JSON.parse(localStorage.getItem(listFlag.toLowerCase()));

    if(listFlag == "Ordenes"){
        for(x=0;x<data.length;x++){
            if(Array.isArray(data[x]["Productos"])){
                let parseString ="";
                for(y=0;y<data[x]["Productos"].length;y++){
                    parseString+=`${data[x]["Productos"][y]},\n`
                }
                data[x]["Productos"] = parseString;
            }
        }
    }

    if(listFlag == "Proveedores"){
        for(x=0;x<data.length;x++){
            if(typeof data[x]["Contacto"] === 'object'){
                let parseString ="";
                let keysObject = Object.keys(data[x]["Contacto"]);
                for(y=0;y<keysObject.length;y++){
                    parseString+=`${keysObject[y]}: ${data[x]["Contacto"][keysObject[y]]} \n`
                }
                data[x]["Contacto"] = parseString;
            }
            if(typeof data[x]["Dirección"] === 'object'){
                let parseString ="";
                let keysObject = Object.keys(data[x]["Dirección"]);
                for(y=0;y<keysObject.length;y++){
                    parseString+=`${keysObject[y]}: ${data[x]["Dirección"][keysObject[y]]} \n`
                }
                data[x]["Dirección"] = parseString;
            }
            if(typeof data[x]["Datos Fiscales"] === 'object'){
                let parseString ="";
                let keysObject = Object.keys(data[x]["Datos Fiscales"]);
                for(y=0;y<keysObject.length;y++){
                    parseString+=`${keysObject[y]}: ${data[x]["Datos Fiscales"][keysObject[y]]} \n`
                }
                data[x]["Datos Fiscales"] = parseString;
            }
            if(typeof data[x]["Contacto Referencia"] === 'object'){
                let parseString ="";
                let keysObject = Object.keys(data[x]["Contacto Referencia"]);
                for(y=0;y<keysObject.length;y++){
                    parseString+=`${keysObject[y]}: ${data[x]["Contacto Referencia"][keysObject[y]]} \n`
                }
                data[x]["Contacto Referencia"] = parseString;
            }
        }
    }

    let obj = {
        // Quickly get the headings
        
        headings: Object.keys(data[0]),
        
        // data array
        data: []
    };
    
    // Loop over the objects to get the values
    for ( let i = 0; i < data.length; i++ ) {
    
        obj.data[i] = [];
    
        for (let p in data[i]) {
            if( data[i].hasOwnProperty(p) ) {
                obj.data[i].push(data[i][p]);
            }
        }
    }

    const datatablesSimple = document.getElementById('datatablesSimple');
    if (datatablesSimple) {
        datatable = new simpleDatatables.DataTable(datatablesSimple,{data: obj});
    }


});
