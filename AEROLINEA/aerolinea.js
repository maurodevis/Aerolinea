function validarcorreo(){
    var a =document.getElementById("correo_electronico");

    var validar =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (validar.test(a.value)){
        alert("el correo electronico es valido")
        return true;
    }else{
        alert("el correo electronico es invalido");
        return false;
    }
}
