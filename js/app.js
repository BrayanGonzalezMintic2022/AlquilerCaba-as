var urlCabaña = "https://g3b7c8eecc73be5-alquilerbasededatos.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/cabin/cabin"
var cabinLastID = 0;

var urlCliente = "https://g3b7c8eecc73be5-alquilerbasededatos.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/client/client"
var clienteLastID = 0;

var urlMensajes = "https://g3b7c8eecc73be5-alquilerbasededatos.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/message/message"
var mensajesLastID = 0;


function consultarCabañas(){
  console.log("Cabaña");
  $.ajax({
    url: urlCabaña,
    type: "GET",
    dataType: "json",
    success: function(response){
      $("#cuerpoTabla").empty();
      response.items.forEach(item => {
        var row = $("<tr>");
        row.append($("<td>").text(item.id));
        row.append($("<td>").text(item.brand));
        row.append($("<td>").text(item.rooms));
        row.append($("<td>").text(item.category_id));
        row.append($("<td>").text(item.name));
        row.append($("<td class='text-center no-padding'>").append('<button type="button" class="btn btn-outline-warning btn-block w-100" onclick="actualizarCabin('+item.id+')">Editar</button>'));
        row.append($("<td class='text-center no-padding'>").append('<button type="button" class="btn btn-outline-danger btn-block w-100" onclick="eliminarCabin('+item.id+',\''+item.name+'\')">Eliminar</button>'));
        $("#cuerpoTabla").append(row);
        cabinLastID = item.id;
      });
      cabinLastID++;
      $("#id").val(cabinLastID);
    }, error: function(error){
      console.log(error);
    }
  });
}

function crearCabin(){
  var cabin={
    id: $("#id").val(),
    brand: $("#brand").val(),
    rooms: $("#rooms").val(),
    category_id: $("#category_id").val(),
    name: $("#name").val(),
  }
  $.ajax({
    url: urlCabaña,
    type: "POST",
    dataType: "json",
    data: cabin,
    statusCode: {
      201: function(){
        alert("Cabana creada");
        $("#brand").val("");
        $("#rooms").val("");
        $("#category_id").val("");
        $("#name").val("");
        consultarCabañas();
      }
    }, error: function(error){
      if(error.status != 201){
        alert(error);
      } 
    }
  });
}

function eliminarCabin(id,name){
  console.log(id);
}

function actualizarCabin(id){
  console.log(id);
}


function consultarCliente(){
  console.log("Cliente");
  $.ajax({
    url: urlCliente,
    type: "GET",
    dataType: "json",
    success: function(response){
      $("#cuerpoTabla_Cliente").empty();
      response.items.forEach(item => {
        var row = $("<tr>");
        row.append($("<td>").text(item.id));
        row.append($("<td>").text(item.name));
        row.append($("<td>").text(item.email));
        row.append($("<td>").text(item.age));
        row.append($("<td class='text-center no-padding'>").append('<button type="button" class="btn btn-outline-warning btn-block w-100" onclick="actualizarCliente('+item.id+')">Editar</button>'));
        row.append($("<td class='text-center no-padding'>").append('<button type="button" class="btn btn-outline-danger btn-block w-100" onclick="eliminarCliente('+item.id+',\''+item.name+'\')">Eliminar</button>'));
        $("#cuerpoTabla_Cliente").append(row);
        clienteLastID = item.id;
      });
      clienteLastID++;
      $("#id_Cliente").val(clienteLastID);
      console.log(clienteLastID);
    }, error: function(error){
      console.log("Error Cliente")
      console.log(error);
    }
  });
}

function crearCliente(){
  var cliente={
    id: $("#id_Cliente").val(),
    name: $("#name_Cliente").val(),
    email: $("#email_Cliente").val(),
    age: $("#age_Cliente").val(),
  }
  $.ajax({
    url: urlCliente,
    type: "POST",
    dataType: "json",
    data: cliente,
    statusCode: {
      201: function(){
        alert("Cliente creado");
        $("#name_Cliente").val("");
        $("#email_Cliente").val("");
        $("#age_Cliente").val("");
        consultarCliente();
      }
    }, error: function(error){
      if(error.status != 201){
        alert(error);
      } 
    }
  });
}

function eliminarCliente(id,name){
  console.log(id);
}

function actualizarCliente(id){
  console.log(id);
}




function consultarMensaje(){
  console.log("Mensaje");
  $.ajax({
    url: urlMensajes,
    type: "GET",
    dataType: "json",
    success: function(response){
      $("#cuerpoTabla_Mensaje").empty();
      response.items.forEach(item => {
        var row = $("<tr>");
        row.append($("<td>").text(item.id));
        row.append($("<td>").text(item.messagetext));
        row.append($("<td class='text-center no-padding'>").append('<button type="button" class="btn btn-outline-warning btn-block w-100" onclick="actualizarMensaje('+item.id+')">Editar</button>'));
        row.append($("<td class='text-center no-padding'>").append('<button type="button" class="btn btn-outline-danger btn-block w-100" onclick="eliminarMensaje('+item.id+',\''+item.name+'\')">Eliminar</button>'));
        $("#cuerpoTabla_Mensaje").append(row);
        mensajesLastID = item.id;
      });
      mensajesLastID++;
      $("#id_Message").val(mensajesLastID);
      console.log(mensajesLastID);
    }, error: function(error){
      console.log("Error Mensajes")
      console.log(error);
    }
  });
}

function crearMensaje(){
  var mensaje={
    id: $("#id_Message").val(),
    messagetext: $("#message").val(),
  }
  $.ajax({
    url: urlMensajes,
    type: "POST",
    dataType: "json",
    data: mensaje,
    statusCode: {
      201: function(){
        alert("Mensaje creado");
        $("#message").val("");
        consultarMensaje();
      }
    }, error: function(error){
      if(error.status != 201){
        alert(error);
      } 
    }
  });
}

function eliminarMensaje(id,name){
  console.log(id);
}

function actualizarMensaje(id){
  console.log(id);
}







function LimpiarCeldas(){
  $("#brand").val("");
  $("#rooms").val("");
  $("#category_id").val("");
  $("#name").val("");
}

$(document).ready(function() {
  consultarCabañas()
  consultarCliente()
  consultarMensaje()
});

