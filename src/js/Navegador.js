/**
 * Funcion para que se despliegue y se oculte el menu.
 */
$(document).ready(function() {
let contador = 1;
    $('#imgMenu').on("click", function(){
        if (contador == 1) {
            console.log("entro")
            $('nav').addClass("menuToggle");
            contador = 0;
        } else if (contador != 1){
            $('nav').removeClass("menuToggle");
            console.log("entro al else")
            contador = 1;
        }
    });
});




