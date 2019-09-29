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
    let video = $


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
        features.css("transition", "all .5s ease-in-out"); /*da nueva propiedad de transicion a las boxes para que las transiciones en hover sean de 0.3 en lugar del 0.8s inicial*/
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
            featuresText.css("transform", "translateY(-23vh)");
            $(this).addClass("features-click-class");
            hideFeatureBoxes($(this));
            if($(this).prop("id")==='features-first'){
                createDesplegableInfo($(this), 350);
            }
            else{
                createDesplegableInfo($(this), 900);
            }
            hiddenFeatures = true;
        }
    });



    /*TRAIN ANIMATION*/
    trainLine.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", () => {
        /*train.css("transform", "translateX(15.6vw)");*/
    });
    function hideFeatureBoxes(currentElement){
        setTimeout(function(){
            currentElement.parent().css({"left":"0"});
            features.not(currentElement).parent().css("display", "none")
        }, 300); //.3s is the transition time of features. So when the feature trhansition ends we display them to none.
    }
    function showFeatureBoxes(currentElement){
        setTimeout(function(){
            switch (currentElement.prop("id")) {
                case 'features-first':
                    currentElement.parent().css({"left":"0"});
                    break;
                case 'features-second':
                    currentElement.parent().css({"left":"25%"});
                    break;
                case 'features-third':
                    currentElement.parent().css({"left":"50%"});
                    break;
                case 'features-forth':
                    currentElement.parent().css({"left":"75%"});
                    break;
            }
            features.not(currentElement).parent().css("display", "flex")
            features.css("opacity", "0.7"); //NOT WORKING BUGGED
        }, 1000); //.8s is the transition time of the info dropdown
    }
    function createDesplegableInfo(currentElement, delay){
        setTimeout(function(){
            currentElement.siblings().css("width", "60vw");
        }, delay);
    }
    function removeFeaturesHoverClass(currentElement, delay){
        setTimeout(function(){
            currentElement.removeClass("features-click-class");
            featuresText.css("transform", "translateY(-20vh)");
            hiddenFeatures = false;
        }, delay); //.8s is the transition time of the info dropdown
    }
    function load() {
        innerLoader.width("100%")
        let width = 0;
        let id = setInterval(frame, 10);
        function frame() {
            outerLoader.find("p").html(Math.round(width) + "%");
            if (width == 100) {
                clearInterval(id);
            } else { //getting the width on %
                width = innerLoader.width() / innerLoader.parent().width() * 100;
            }
        }
    }
}
