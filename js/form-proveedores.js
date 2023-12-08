let storedArray = [];

window.addEventListener('DOMContentLoaded', event => {
    if(localStorage.getItem('proveedores').length>0){
        storedArray = JSON.parse(localStorage.getItem('proveedores'));
    }else{
        alert('List error.');
        window.history.go(-1);
    }
});

const btnCancel = document.getElementById("btn-cancel");
const btnAlta = document.getElementById("btn-alta");
const inputCodigo = document.getElementById('input-codigo');
const inputRubro = document.getElementById('input-rubro');
const inputRazonSocial = document.getElementById('input-razon-social');
const inputSitioWeb = document.getElementById('input-sitio-web');
const inputEmail = document.getElementById('input-email');
const inputTelefono = document.getElementById('input-telefono');
const inputCalle = document.getElementById('input-calle');
const inputCodigoPostal = document.getElementById('input-codigo-postal');
const inputProvincia = document.getElementById('input-provincia');
const inputPais = document.getElementById('input-pais');
const inputCuit = document.getElementById('input-cuit');
const inputCondicion = document.getElementById('input-condicion');
const inputNombre = document.getElementById('input-nombre-contacto');
const inputApellido = document.getElementById('input-apellido-contacto');
const inputTelefonoConctacto = document.getElementById('input-telefono-contacto');
const inputEmailContacto = document.getElementById('input-email-contacto');
const inputRolContacto = document.getElementById('input-rol-contacto');


cargarAltaProducto = () =>{
    let outputObj = {
        "Código":inputCodigo.value,
        "Razón Social":inputRazonSocial.value,
        "Rubro":inputRubro.value,
        "Contacto":{"Sitio Web":inputSitioWeb.value,
            "E-Mail":inputEmail.value,
            "Teléfono":inputTelefono.value,},
        "Dirección":{"Calle":inputCalle.value,
            "Código Postal":inputCodigoPostal.value,
            "Provincia":inputProvincia.value,
            "País":inputPais.value,},
        "Datos Fiscales":{"CUIT":inputCuit.value,
            "Condición":inputCondicion.value,},
        "Contacto Referencia":{"Nombre":inputNombre.value,
            "Apellido":inputApellido.value,
            "Teléfono":inputTelefonoConctacto.value,
            "E-Mail":inputEmailContacto.value,
            "Rol":inputRolContacto.value,}
    }
    storedArray.push(outputObj);
    localStorage.setItem('proveedores', JSON.stringify(storedArray));
    alert('Carga realizada correctamente.');
    window.history.go(-1);
}


cargarBotones = () =>{
    btnAlta.addEventListener('click',()=>cargarAltaProducto());
    btnCancel.addEventListener('click',()=>{window.history.go(-1);});
}

cargarBotones();