//documento usado unicmanete para la creacion de graficas
let contador
let velocidad
let aceleracion
let hoy = new Date();

let hoyString = hoy.toISOString().substr(11,8);



console.log(hoyString)

console.log(typeof hoyString)



$(document).ready(function () {
    setInterval(actualizar, 6000);
})

function actualizar() {
    $("#contador").load("leer_variable.html #contador1");
    $("#velocidad").load("leer_variable.html #velocidad2");
    $("#aceleracion").load("leer_variable.html #aceleracion3");

    contador = parseInt(document.getElementById("contador1").innerHTML)
    velocidad = parseInt(document.getElementById("velocidad2").innerHTML)
    aceleracion = parseInt(document.getElementById("aceleracion3").innerHTML)
    console.log("contador: " + contador)
    chart.data.datasets[0].data.push(contador)


    hoy = new Date();

    hoyString = hoy.toISOString().substr(11,8);

    chart.data.labels.push(hoyString)
    chart.update();

}


let miCanvas = document.getElementById("miGrafica").getContext("2d")

let chart = new Chart(miCanvas, {
    type: "line",
    data: {
        labels: [],
        datasets: [
            {
                label: "Grafica del tranvia",
                backgroundColor: "rgb(255,0,0,0)",
                borderColor: "rgb(0,250,0)",
                borderWidth: 2.5,
                data: []
            }
        ]
    }


})

/*setInterval(() => {
	console.log(contador)
	chart.data.datasets[0].data[0] = contador
	console.log(chart.data.datasets[0].data[0])},1201)
alert(contador, velocidad, aceleracion)*/



