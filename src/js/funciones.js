
/*Las variables Bool en tia portal muestran un true/false
  Internamente son 1 y 0 por lo que al mostrarlas en la pagina html se muestra un 0 o un 1
  para poder hacer la combersion leo el dato lo guardo en una variable y lo combierto a true/false respectivamente.
*/
$(document).ready(function() {
    setInterval(actualizar,500);
    let s = parseInt(document.getElementById("bool").innerHTML);
    document.getElementById("bool").innerHTML = Boolean(s);
})
function actualizar(){
    $("#etiqueta").load("leer_variable.html");
}


