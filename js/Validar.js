window.onload=iniciar;

function iniciar(){
    document.getElementById('Enviar').addEventListener('click',validar,false);
}




function validaEmail(){
    var elemento= document.getElementById('correo');
    if(!elemento.checkValidity()){
        if(elemento.validity.valueMissing){
            error2(elemento,'Debe introducir un correo');

        }
        if(elemento.validity.patternMismatch){
            error2(elemento,'El nombre debe tener entre 2 y 8 caracteres como maximo');

        }
        return false;
    }
    return true;
}


function validaPassword(){
    var elemento= document.getElementById('password');
    if(!elemento.checkValidity()){

        if(elemento.validity.valueMissing){
            error2(elemento,'Debe introducir su password con minimo 8 caracteres incluyendo mayusculas');
        }
        if(elemento.validity.patternMismatch){
            error2(elemento,'Debe introducir un password entre 4 caracteres y 20 como maximo');

        }
        if(elemento.validity.rangeOverflow){
            error2(elemento,'el password debe ser menor a 25 caracteres');
        }
        if(elemento.validity.rangeUnderflow){
            error2(elemento,'el password debe ser mayor 8 caracteres');
        }
        return false;
    }
    return true;
}
function ValidaOpcion(){
elemento=document.getElementById("novedad");
if (!document.querySelector('input[name="novedad"]:checked')){
error2(elemento,'Elige una opcion para recibir o no  el boletin de novedades');
    return false;
    }
    return true;
}


function validaCheck(){
    var elemento=document.getElementById('opcion');
    if(!elemento.checked){
        error2(elemento,"Debes elegir una opcion");
        return false;
    }
     return true;
}


function validar(e){
    borrarError();
    if(validaEmail() && validaPassword() && ValidaOpcion() && validaCheck()    && confirm('Pulsa aceptar si deseas enviar el formulario'))
    {
        return true;
    }
    else{
        e.preventDefault();
        return false;
    }
}

function error(elemento){
    document.getElementById('mensajeError').innerHTML=elemento.validationMessage;
    elemento.className="error";
    elemento.focus();
}


function error2(elemento,mensaje){
    document.getElementById("mensajeError").innerHTML=mensaje;
    elemento.className="error";
    elemento.focus();
}
function error3(correo,mensaje){
    document.getElementById("mensajeError").innerHTML=mensaje;
    correo.className="error";
    correo.focus();
}


function borrarError(){
    var form= document.forms[0];
    for(var i=0; i<form.elements.length; i++){
        form.elements[i].className="";

    }
}

function Iniciarlogin(){
    console.log("hola");
    var correologueado=document.getElementById("correo").value=localStorage.getItem("correo");
    var correologin=document.getElementById("correologin").value;
    var contraseñalogueado=document.getElementById("password").value=localStorage.getItem("password");
    var contraseñalogin=document.getElementById("contraseñalogin").value;
    if( correologueado==correologin & contraseñalogueado==contraseñalogin){
        console.log("Correo  y contraseña correctas");
    }else{
        console.log("Correo y contraseña incorrectos");
        return false;
    }
    return true;
}



   
    
























































