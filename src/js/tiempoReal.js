window.onload = function() {
    let trainLine = $("#train-line");
    let train = $(".train");
    let train1 = $("#train1");
    $(".subway-map").subwayMap();

    train1.css({"left" : "100%", "transform" : "translateX(-50%)"});
}