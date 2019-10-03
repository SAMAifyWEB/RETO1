$(document).ready(function() {

var contador = 1;

    $('#imgMenu').on("click", function(){
        if (contador == 1) {
            console.log("entro")
            $('nav').css("left", "0");
            contador = 0;
        } else {
            $('nav').css("left", "-100%");
            console.log("entro al else")
            contador = 1;
        }
    });
});