window.onload = function() {
    let trainLine = $("#train-line");
    let train = $(".train");
    let train1 = $("#train1");
    $(".subway-map").subwayMap();
    let span = $(".text");

    span.eq(0).css({"left" : "21", "top" : "203"})
    span.eq(1).css({"left" : "162", "top" : "160"})
    span.eq(2).css({"left" : "320", "top" : "200"})
    span.eq(3).css({"left" : "462", "top" : "158"})

    //train1.css({"left" : "100%", "transform" : "translateX(-50%)"});

}