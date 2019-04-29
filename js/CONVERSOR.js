window.onload=iniciar;
function iniciar(){
    document.getElementById('enter').addEventListener('click',validar,false);
}

function Euros(){
    var numero=document.getElementById('numero').value;
    var elemento = document.forms["convertir"].elements["convertir"].value;
    var euro=0.00028;
    var dolar=0.00032;
    if(elemento==='Euro'){
      document.convertir.verify.value=numero*euro;
      return true;
    }
    if(elemento==='Dolar'){
       document.convertir.verify.value=numero*dolar;
       return true;
    }
    return false;
}
function validar(e){
  DeleteError();
  if(Euros()){
      return true;
      
  }
  else{
      e.preventDefault();
      return false;
  }
}



function error(elemento,mensaje){
  document.getElementById('Error').innerHTML=mensaje;
  elemento.className='error';
  elemento.focus();
}
function DeleteError(){
  var form=document.forms[0];
  for(var i=0; i<form.elements.length; i++){
      form.elements[i].className="";
  } 
}









