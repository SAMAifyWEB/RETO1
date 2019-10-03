window.onload = function() {
    let trainLine = $("#train-line");
    let train = $(".train");
    let train1 = $("#train1");
    $(".subway-map").subwayMap();
    let span = $(".text");

    span.eq(0).css({"left" : "40", "top" : "80"})
    span.eq(1).css({"left" : "240", "top" : "160"})
    span.eq(2).css({"left" : "361", "top" : "41"})
    span.eq(3).css({"left" : "361", "top" : "243"})

    //train1.css({"left" : "100%", "transform" : "translateX(-50%)"});

}