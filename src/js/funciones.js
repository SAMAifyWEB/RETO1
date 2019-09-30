$(document).read(function () {
    $.ajaxSetup({cache:false});
    setInterval(function () {
        $.get("leer_variable.html",function (result) {
            //etiqueta es el id del
            $('#etiqueta').text(result.trim());
        });
    },1000);
});