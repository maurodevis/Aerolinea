function validacion_form(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let direccion = document.getElementById("direccion");
    let telefono = document.getElementById("telefono");
    let correo_electronico = document.getElementById("correo_electronico");
    let edad = document.getElementById("edad");
    let peso_equipaje = document.getElementById("peso_equipaje");
    let mensa = document.getElementById("mensaje");
    

    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s']+$/.test(nombre.value)) {
        mensa.textContent = "Ingrese un nombre válido";
        mensa.style.color = "red";
        return;
    }
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s']+$/.test(apellido.value)) {
        mensa.textContent = "Ingrese un apellido válido";
        mensa.style.color = "red";
        return;
    }
    if (!/^[a-zA-Z0-9\s',.-]+$/.test(direccion.value)) {
        mensa.textContent = "Ingrese una dirección válida";
        mensa.style.color = "red";
        return;
    }
    if (!/^\d{10}$/.test(telefono.value)) {
        mensa.textContent = "Ingrese un número de teléfono válido";
        mensa.style.color = "red";
        return;
    }
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(correo_electronico.value)) {
        mensa.textContent = "Ingrese un correo electrónico válido";
        mensa.style.color = "red";
        return;
    }
    if (isNaN(edad.value) || edad.value < 18 || edad.value > 120) {
        mensa.textContent = "Ingrese una edad válida";
        mensa.style.color = "red";
        return;
    }
    if (isNaN(peso_equipaje.value) || peso_equipaje.value <= 0) {
        mensa.textContent = "Ingrese un peso de equipaje válido";
        mensa.style.color = "red";
        return;
    }else{
        mensa.textContent = "Formulario válido";
        mensa.style.color = "green";
    }
}

    
let expnom= /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s']+$/; //esta exprecion permite espacios mayusculas minusculas no numeros
/*function validarcorreo(){
    var a =document.getElementById("correo_electronico");

    var validar =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (validar.test(a.value)){
        alert("el correo electronico es valido")
        return true;
    }else{
        alert("el correo electronico es invalido");
        return false;
    }
}*/
