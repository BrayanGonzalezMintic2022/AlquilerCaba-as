var urlBase = "https://g3b7c8eecc73be5-alquilerbasededatos.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/cabin/cabin"
var cabinLastID = 0;
function consultar(){
  $.ajax({
    url: urlBase,
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
    url: urlBase,
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
        consultar();
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

function LimpiarCeldas(){
  $("#brand").val("");
  $("#rooms").val("");
  $("#category_id").val("");
  $("#name").val("");
}

$(document).ready(function() {
  consultar()
});

