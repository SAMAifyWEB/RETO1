window.onload = function() {
    let title = $("#title");
    let loaderContainer = $("#loader-container");
    let innerLoader = $("#inner-loader");
    let loadingText = $("#loading-text");
    let content = $("#content");
    let trainLine = $("#train-line");
    let featuresContainer = $("#features-container");
    let features = $(".features");
    let logo = $("#logo-samaify");
    let featuresText = $(".features-text");
    let train = $(".train");
    let loadingInterval;
    let calculation;


    title.css("opacity", "1");
    title.css("margin-bottom", "0");

    title.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", () => {
        loaderContainer.css("opacity", "1");
        innerLoader.css("width", "100%");
        loadingInterval = setInterval(() => {
            calculation = innerLoader.width() / innerLoader.parent().width() * 100;
            console.log(calculation)
            if(calculation === 100){
                console.log("entro porque es 100")
                clearInterval(loadingInterval);
            }
        }, 100);
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
        features.css("transition", "all .3s ease-in"); /*da nueva propiedad de transicion a las boxes para que las transiciones en hover sean de 0.3 en lugar del 0.8s inicial*/
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
            $(this).addClass("features-hover-class");
            hideFeatureBoxes($(this));
            createDesplegableInfo($(this));
            hiddenFeatures = true;
        }
    });

    features.on("mouseenter", function() {
        $(this).addClass("features-hover-class");
    });
    features.on("mouseleave", function() {
        if(!hiddenFeatures){ //if visible
            features.css("opacity", "0.7");
            removeFeaturesHoverClass($(this), 0);
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
            currentElement.removeClass("features-hover-class");
            hiddenFeatures = false;
        }, delay); //.8s is the transition time of the info dropdown
    }
}



/*setInterval(() => trainLine.css("display", "block"), 500);*/