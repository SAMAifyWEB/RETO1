window.onload = function() {
    let train = $("#train");
    $(".subway-map").subwayMap();
    let span = $(".text");
    let currentPositionTag = $("#current-position");
    let targetPositionTag = $("#target-position");
    let speedTag = $("#speed");
    let accelerationTag = $("#acceleration");
    let distanceTag = $("#distancia");
    let currentPosition;
    let targetPosition;
    let speed;
    let acceleration;

    span.eq(0).css({"left" : "21", "top" : "203"})
    span.eq(1).css({"left" : "162", "top" : "160"})
    span.eq(2).css({"left" : "320", "top" : "200"})
    span.eq(3).css({"left" : "462", "top" : "158"})

    setInterval(actualizar, 6500);
    setInterval(animacion, 6500);


    function animacion(){
        switch (parseInt(targetPosition)) {
            case 1: train.css("transition", "all 1s ease-in-out");
                train.css("left", "2.5%");
                targetPositionTag.text("Angulema");
                break;
            case 2: train.css("transition", "all 2s ease-in-out");
                train.css("left", "31.7%");
                targetPositionTag.text("Parlamento");
                break;
            case 3: train.css("transition", "all 3s ease-in-out");
                train.css("left", "65%");
                targetPositionTag.text("Lovaina");
                break;
            case 4: train.css("transition", "all 4s ease-in-out");
                train.css("left", "94.2%");
                targetPositionTag.text("Sancho el Sabio");
                break;
        }

        /*on transition end check*/

        train.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", () => {
            currentPositionTag.text(targetPositionTag.text());
        });

        speedTag.text(speed + " cm/s");
        accelerationTag.text(acceleration + " cm/s");
    };


    function actualizar(){
        $.get('../html/leer_variable.html', function (data) {
            let fullDatos = data;
            speed = fullDatos.substring(18,19);
            acceleration = fullDatos.substring(42,43);
            targetPosition = fullDatos.substring(66,67);
        });
    }
};