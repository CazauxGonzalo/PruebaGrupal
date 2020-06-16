
$(document).ready(function () {
  var i = 0;
  $("#commentForm").validate();


  //obtenemos el valor de los input

  $('#adicionar').click(function () {
    var nombre = document.getElementById("nombre").value.trim();
    var apellido = document.getElementById("apellido").value.trim();
    var email = document.getElementById("email").value.trim();
    var telefono = document.getElementById("telefono").value.trim();
    i++; //contador para asignar id al boton que borrara la fila


    if(nombre == "" || apellido == "" || email == "" || telefono == ""  ){
        alert("Debe llenar todos los campos");
    }else{
      var fila = '<tr id="row' + i + '"><td>' + nombre + '</td><td>' + apellido + '</td><td>' +
      email+ '</td><td>' + telefono + '</td><td><button type="button" name="remove" id="' + i +
      '" class="btn btn-danger btn_remove">Quitar</button></td></tr>'; //esto seria lo que contendria la fila

      document.getElementById("apellido").value = "";
      document.getElementById("email").value = "";
      document.getElementById("nombre").value = "";
      document.getElementById("telefono").value ="";

    }
   
 
    

    $('#mytable tr:first').after(fila);
   
  });
  $(document).on('click', '.btn_remove', function () {
    var button_id = $(this).attr("id");
    //cuando da click obtenemos el id del boton
    $('#row' + button_id + '').remove(); //borra la fila
    //limpia el para que vuelva a contar las filas de la tabla
    $("#adicionados").text("");
    var nFilas = $("#mytable tr").length;
    $("#adicionados").append(nFilas - 1);
  });
});



