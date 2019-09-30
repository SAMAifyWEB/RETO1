//documento usado unicmanete para la creacion de graficas

let miCanvas = document.getElementById("miGrafica").getContext("2d")

let chart = new Chart(miCanvas, {
    type: "line",
    data: {
        labels: ["Velocidad", "Distancia", "Prueba"],
        datasets: [
            {
                label: "Grafica del tranvia",
                backgroundColor: "rgb(0,0,0)",
                borderColor: "rgb(0,250,0)",
                borderWidth: 2.5,
                data: [27, 50, 10]
            }
        ]
    }


})