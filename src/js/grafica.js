/**
 * Documento usado unicmanete para la creacion de graficas
 */


//PESTAÑAS

/**
 * Dadas la division que contiene todas las pestañas y la de la pestaña que se
 * quiere mostrar, la funcion oculta todas las pestañas a excepcion de esa.
 */
function cambiarPestanna(pestannas,pestanna) {

    // Obtiene los elementos con los identificadores pasados.
    pestanna = document.getElementById(pestanna.id);
    listaPestannas = document.getElementById(pestannas.id);

    // Obtiene las divisiones que tienen el contenido de las pestañas.
    cpestanna = document.getElementById('c'+pestanna.id);
    listacPestannas = document.getElementById('contenido'+pestannas.id);

    i=0;
    // Recorre la lista ocultando todas las pestañas y restaurando el fondo
    // y el padding de las pestañas.
    while (typeof listacPestannas.getElementsByTagName('div')[i] != 'undefined'){
        $(document).ready(function(){
            $(listacPestannas.getElementsByTagName('div')[i]).css('display','none');
            $(listaPestannas.getElementsByTagName('li')[i]).css('background','');
            $(listaPestannas.getElementsByTagName('li')[i]).css('padding-bottom','');
        });
        i += 1;
    }

    $(document).ready(function(){
        // Muestra el contenido de la pestaña pasada como parametro a la funcion,
        // cambia el color de la pestaña y aumenta el padding para que tape el
        // borde superior del contenido que esta juesto debajo y se vea de este
        // modo que esta seleccionada.
        $(cpestanna).css('display','');
        $(pestanna).css('background',' #000000');
        $(pestanna).css('padding-bottom','2px');
    });

}

/**
 * Funcion para seleccionar por defecto la pestaña velocidad
 */
function ocultarGraficas () {
    document.getElementById("pestana1").style.background = ' #000000';
    document.getElementById("miGrafica2").style.display = 'none';
    document.getElementById("miGrafica3").style.display = 'none';
}

/**
 * Funcion para las pestañas de almacenadas y errores
 */
function mostrarGraficas () {
    document.getElementById("miGrafica2").style.display = 'block';
    document.getElementById("miGrafica3").style.display = 'block';
}


//GRAFICA VELOCIDAD
let contador
let velocidad
let contador2
let mediaContador = 0;
let contadorActualizaciones = 0;
let hoy = new Date();
let error

let hoyString = hoy.toISOString().substr(11,8);

console.log(hoyString)

console.log(typeof hoyString)

$(document).ready(function () {
    setInterval(actualizar, 6000);
})



/**
 * Actualiza cada cierto tiempo los datos que coge del automata
 */
function actualizar() {
    $("#contador").load("../html/leer_variable.html #contador1");
    $("#velocidad").load("../html/leer_variable.html #velocidad2");

    contador = parseInt(document.getElementById("contador1").innerHTML)
    velocidad = parseInt(document.getElementById("velocidad2").innerHTML)
    console.log("contador: " + contador)

    chart.data.datasets[0].data.push(contador)
    chart.data.datasets[1].data.push(velocidad)

    hoy = new Date();

    hoyString = hoy.toISOString().substr(11, 8);

    chart.data.labels.push(hoyString);
    chart.update();
}

let miCanvas = document.getElementById("miGrafica").getContext("2d")

let chart = new Chart(miCanvas, {
    type: "line",
    data: {
        labels: [],
        datasets: [
            {
                label: "Velocidad del tranvia",
                backgroundColor: "rgb(255,0,0,0)",
                borderColor: "rgb(0,250,0)",
                borderWidth: 2.5,
                data: []
            },
            {
                label: "Posicion del tranvia",
                backgroundColor: "rgb(255,0,0,0)",
                borderColor: "rgb(27,167,250)",
                borderWidth: 2.5,
                data: []
            }

        ]
    }

})

//GRAFICA ALMACENADA

/**
 * Funcion para que coja los datos cada 6 segundos y saque las medias cada 8 segundos
 */
$(document).ready(function () {
    setInterval(actualizar2, 6000);
    setInterval(sacarMedias, 18000);
})

/**
 * Funcion para actualizar los datos del automata cada 18 segundos y sacar la media
 */
function actualizar2() {
    $("#contador").load("../html/leer_variable.html #contador1");

    contador2 = parseInt(document.getElementById("contador1").innerHTML)
    console.log("contador: " + contador2)

    mediaContador += contador2;
    console.log(mediaContador);

    contadorActualizaciones ++;
    console.log(contadorActualizaciones);

}

/**
 * Funcion con la que sacamos las medias de los datos recogidos
 */
function sacarMedias() {
    let media;
    media = mediaContador / contadorActualizaciones;
    console.log(mediaContador);

    localStorage.setItem("media", media);

    chart2.data.datasets[0].data.push(localStorage.getItem("media"));

    hoy = new Date();

    hoyString = hoy.toISOString().substr(11,8);

    chart2.data.labels.push(hoyString)
    chart2.update();
}

let miCanvas2 = document.getElementById("miGrafica2").getContext("2d");

let chart2 = new Chart(miCanvas2, {
    type: "line",
    data: {
        labels: [],
        datasets: [
            {
                label: "Grafica almacenada",
                backgroundColor: "rgb(255,0,0,0)",
                borderColor: "rgb(0,250,0)",
                borderWidth: 2.5,
                data: []
            }
        ]
    }

})



//GRAFICA ERRORES

/**
 * Funcion para comprobar si hay algun error
 */
$(document).ready(function () {
    setInterval(actualizarError, 2000);
})

function actualizarError() {
    $("#error").load("../html/leer_variable.html #error3");

    error = parseInt(document.getElementById("error3").innerHTML)
    chartError.data.datasets[0].data.push(error)
    console.log(error)

    hoy = new Date();

    hoyString = hoy.toISOString().substr(11, 8);

    chartError.data.labels.push(hoyString)
    chartError.update();

}


let miCanvasError = document.getElementById("miGrafica3").getContext("2d")

let chartError = new Chart(miCanvasError, {
    type: "bar",
    data: {
        labels: [],
        datasets: [
            {
                label: "Errores del tranvia",
                backgroundColor: "rgb(128,64,0)",
                borderColor: "rgb(0,0,0)",
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
