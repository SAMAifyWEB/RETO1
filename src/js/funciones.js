$(document).ready(function() {
    setInterval(actualizar,500);
    let s = parseInt(document.getElementById("bool").innerHTML);
    document.getElementById("bool").innerHTML = Boolean(s);
})
function actualizar(){
    $("#etiqueta").load("leer_variable.html");
}