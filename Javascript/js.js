
 $(document).ready(function () {

    $("span").click(function () {
       
        $(".menulink").toggle();
    });

});


function mensAlert(dato){
   
    if(dato == "entra"){
        alert("A ingresado con el usuario: \n" + 
        document.getElementById("emailEntra").value);    

    }
    if(dato == "recu"){
        alert("Se ha enviado un correo de confirmación al: \n" + 
        document.getElementById("email").value);    

    }
    if(dato == "ingreso"){
        alert("Registro exitoso");   
        
    }
   
}

