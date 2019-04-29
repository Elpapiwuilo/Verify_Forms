         
 
 function guardar()
 {
     localStorage.setItem("correo", document.getElementById("correo").value);
     localStorage.setItem("password", document.getElementById("password").value);  
     localStorage.setItem("novedad",document.getElementById("novedad").checked);
     localStorage.setItem("opcion", document.getElementById("opcion").checked);             
     mostrarDatos();
 }
 function mostrarDatos()
 {
     var resultado="correo: "+localStorage.getItem("correo");
     resultado+="<br>password: "+localStorage.getItem("password");
     resultado+="<br>Eleccion de permiso: "+localStorage.getItem("novedad");
     resultado+="<br>Tus intereses son: "+localStorage.getItem("opcion");

     document.getElementById("resultado").innerHTML=resultado;
 }
 window.onload=function()
 {
     mostrarDatos();           
     if(localStorage.getItem("correo")!=null)
         document.getElementById("correo").value=localStorage.getItem("correo");
     if(localStorage.getItem("password")!=null)
         document.getElementById("password").value=localStorage.getItem("password");
     if(localStorage.getItem("novedad")!=null){
         document.getElementById("novedad").checked=localStorage.getItem("novedad");
     }
     if(localStorage.getItem("opcion")!=null)
     document.getElementById("opcion").value=localStorage.getItem("opcion");
 
 }