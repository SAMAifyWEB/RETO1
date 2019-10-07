window.onload = function() {
    let train = $("#train");
    $(".subway-map").subwayMap();
    let span = $(".text");
    let currentPositionTag = $("#current-position");
    let targetPositionTag = $("#target-position");
    let speedTag = $("#speed");
    let accelerationTag = $("#acceleration");
    let distanceTag = $("#distancia");

    span.eq(0).css({"left" : "21", "top" : "203"})
    span.eq(1).css({"left" : "162", "top" : "160"})
    span.eq(2).css({"left" : "320", "top" : "200"})
    span.eq(3).css({"left" : "462", "top" : "158"})

    //ajax qb200 //Es current stop or destination stop? cuando cambia el valor de qb?
    setInterval(() => {
        let qb200 = 4;
        switch (qb200) {
            case 1: train.css("transition", "all 1s ease-in-out");
                    train.css("left", "2.5%");
                    currentPositionTag.text("Angulema");
                    break;
            case 2: train.css("transition", "all 2s ease-in-out");
                    train.css("left", "31.7%");
                    currentPositionTag.text("Parlamento");
                    break;
            case 3: train.css("transition", "all 3s ease-in-out");
                    train.css("left", "65%");
                    currentPositionTag.text("Lovaina");
                    break;
            case 4: train.css("transition", "all 4s ease-in-out");
                    train.css("left", "94.2%");
                    currentPositionTag.text("Sancho el Sabio");
                    break;
        }

        let acceleration;
        let speed;

        speedTag.text(speed + "X");
        accelerationTag.text(acceleration + "X");


    }, 100);


};