window.onload = function() {
    let title = $("#title");
    let loaderContainer = $("#loader-container");
    let outerLoader = $("#outer-loader");
    let innerLoader = $("#inner-loader");
    let loadingText = $("#loading-text");
    let content = $("#content");
    let trainLine = $("#train-line");
    let featuresContainer = $("#features-container");
    let features = $(".features");
    let logo = $("#logo-samaify");
    let featuresText = $(".features-text");
    let train = $(".train");


    title.css("opacity", "1");
    title.css("margin-bottom", "0");


    title.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", () => {
        load();
        loaderContainer.css("opacity", "1");
    });

    innerLoader.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", () => {
        loadingText.css("opacity", "0");
    });

    loadingText.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", () => {
        loadingText.css("opacity", "1");
        loadingText.html("Welcome");
        //JS -> document.getElementById("loading-text").innerHTML = "Welcome";
    });

    loadingText.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", () => {
        content.css("opacity", "0");
    });

    content.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", (e) => {
        //comprobamos que el event target (content) sea el event currentTarget (Puede ser content o cualquiera de sus hijos que tengan transiciones)
        if(e.target === e.currentTarget){
            content.css("display", "none");
            featuresContainer.css("position", "static");
            featuresContainer.css("opacity", "1");
            features.css("opacity", "0.7");
            logo.css("opacity", "1");
            /*trainLine.css("position", "static");
            trainLine.css("opacity", "0.6");*/
        }
    });
    features.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", () => {
        features.css("transition", "all .3s ease-in-out"); /*da nueva propiedad de transicion a las boxes para que las transiciones en hover sean de 0.3 en lugar del 0.8s inicial*/
    });


    //EVENTOS CLICK EN FEATURES
    let hiddenFeatures = false;
    features.off('click').on('click', function() {
        if(hiddenFeatures){
            $(this).siblings().css("width", "0");
            showFeatureBoxes($(this));
            removeFeaturesHoverClass($(this), 800);
        }
        else{
            features.not($(this)).css("opacity", "0");
            featuresText.css("transform", "translateY(-25vh)");
            $(this).addClass("features-click-class");
            hideFeatureBoxes($(this));
            createDesplegableInfo($(this));
            hiddenFeatures = true;
        }
    });



    /*TRAIN ANIMATION*/
    trainLine.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", () => {
        /*train.css("transform", "translateX(15.6vw)");*/
    });
    function hideFeatureBoxes(currentElement){
        setTimeout(function(){
            currentElement.closest("#features-container").css("justify-content", "flex-start");
            features.not(currentElement).parent().css("display", "none")
        }, 300); //.3s is the transition time of features. So when the feature trhansition ends we display them to none.
    }
    function showFeatureBoxes(currentElement){
        setTimeout(function(){
            currentElement.closest("#features-container").css("justify-content", "space-between");
            features.not(currentElement).parent().css("display", "block")
            features.css("transition", "all .8s ease-in");
            features.css("opacity", "0.7"); //WHY TRANSITION NOT APPLIED TO THIS LINEEEEEEEEEE WTFFF
        }, 1000); //.8s is the transition time of the info dropdown
    }
    function createDesplegableInfo(currentElement){
        setTimeout(function(){
            currentElement.siblings().css("width", "60vw");
        }, 350);
    }
    function removeFeaturesHoverClass(currentElement, delay){
        setTimeout(function(){
            currentElement.removeClass("features-click-class");
            featuresText.css("transform", "translateY(-21vh)");
            hiddenFeatures = false;
        }, delay); //.8s is the transition time of the info dropdown
    }
    function load() {
        innerLoader.width("100%");
        let width = 0;
        let id = setInterval(frame, 10);
        function frame() {
            console.log(width)
            outerLoader.find("p").html(width + "%");
            if (width == 100) {
                clearInterval(id);
            } else {//meter la formula
                console.log("entro")
                width = innerLoader.width() / innerLoader.parent().width() * 100;;
                innerLoader.width(width + '%');
            }
        }
    }
}
