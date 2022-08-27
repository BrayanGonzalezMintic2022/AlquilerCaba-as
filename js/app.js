// WARNING: For GET requests, body is set to null by browsers.
var data = "";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://g3b7c8eecc73be5-alquilerbasededatos.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/cabin/cabin");

xhr.send(data);