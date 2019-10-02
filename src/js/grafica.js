//documento usado unicmanete para la creacion de graficas

let contador
let velocidad
let aceleracion

$(document).ready(function () {
    setInterval(actualizar, 5000);
})

function actualizar() {
    $("#valores").load("leer_variable.html");
}

contador = parseInt($("#valores").load("leer_variable.html"))

alert(contador)

let miCanvas = document.getElementById("miGrafica").getContext("2d")

let chart = new Chart(miCanvas, {
    type: "line",
    data: {
        labels: ["Contador", "Velocidad", "Aceleracion"],
        datasets: [
            {
                label: "Grafica del tranvia",
                backgroundColor: "rgb(0,0,0)",
                borderColor: "rgb(0,250,0)",
                borderWidth: 2.5,
                data: [contador]
            }
        ]
    }

})