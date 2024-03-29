/**
 * Funcion que se realiza al cargar la pagina
 */
window.onload = function() {
    let title = $("#title");
    let loaderContainer = $("#loader-container");
    let outerLoader = $("#outer-loader");
    let innerLoader = $("#inner-loader");
    let loadingText = $("#loading-text");
    let content = $("#content");
    let featuresContainer = $("#features-container");
    let features = $(".features");
    let logo = $("#logo-samaify");
    let textContainerParent = $(".text-container-parent");
    let linkContainerParent = $(".link-container-parent");
    let url;
    let video = document.getElementsByClassName("video");


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
            featuresContainer.css({"position" : "static", "opacity" : "1"});
            features.css("opacity", "0.7");
            logo.css("opacity", "1");
        }
    });
    features.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", () => {
        features.css("transition", "all .5s ease-in-out"); /*da nueva propiedad de transicion a las boxes para que las transiciones en hover sean de 0.5 en lugar del 0.8s inicial*/
    });


    /**
     * EVENTOS CLICK EN FEATURES
     */

    let hiddenFeatures = false;
    features.off('click').on('click', function() {
        if($(this).prop("id") === "features-forth"){
            asingarUrl($(this).prop("id"));
            window.open(url, '_self');
        }
        else{
            let currentElementId = $(this).prop("id");
            let videoIndex;
            features.each(function(i){
                if(currentElementId === $(this).prop("id")){
                    videoIndex = i;
                }
            });
            if(hiddenFeatures){
                $(this).siblings().css("width", "0");
                showFeatureBoxes($(this));
                removeFeaturesHoverClass($(this), 800);
                //stopVideo(videoIndex, 800);
                hideText();
            }
            else{
                features.not($(this)).css("opacity", "0");
                $(this).addClass("features-click-class");
                hideFeatureBoxes($(this));
                if($(this).prop("id")==='features-first'){
                    createDesplegableInfo($(this), 350);
                }
                else{
                    createDesplegableInfo($(this), 900);
                }
                //playVideo(videoIndex);
                showText();
                hiddenFeatures = true;
            }
        }
    });

    /**
     * EVENTOS DOBLE CLICK EN FEATURES
     */
    features.off('dblclick').on('dblclick', function() {
        asingarUrl($(this).prop("id"));
        window.open(url, '_self');
    });

    /**
     * EVENTOS CLICK EN LINK A PAGINAS PROYECTO
     */

    linkContainerParent.off('click').on('click', function() {
        transitionInfoContent(linkContainerParent, textContainerParent);
        let currentElementId = $(this).parent().siblings(".features").prop("id");
        setTimeout(() => {
            asingarUrl(currentElementId);
            window.open(url, '_self');
        }, 600);
    })


    /**
     * Ocultar los cuadros de caracteristicas
     * @param currentElement
     */
    function hideFeatureBoxes(currentElement){
        setTimeout(() => {
            if(currentElement.prop("id") !== "features-forth"){
                currentElement.parent().css({"left":"0"});
                features.not(currentElement).parent().css("display", "none")
            }
        }, 300); //.3s is the transition time of features. So when the feature trhansition ends we display them to none.
    }

    /**
     * Mostrar el cuadro de caracteristicas
     * @param currentElement
     */
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
            }
            features.not(currentElement).parent().css("display", "flex");
            features.css("opacity", "0.7"); //NOT WORKING BUGGED
        }, 1000); //.8s is the transition time of the info dropdown
    }

    /**
     * Crear el desplegable de informacion
     * @param currentElement
     * @param delay
     */
    function createDesplegableInfo(currentElement, delay){
        setTimeout(function(){
            currentElement.siblings().css("width", "60vw");
        }, delay);
    }

    /**
     * Borrar las funciones al hacer hover
     * @param currentElement
     * @param delay
     */
    function removeFeaturesHoverClass(currentElement, delay){
        setTimeout(function(){
            currentElement.removeClass("features-click-class");
            hiddenFeatures = false;
        }, delay); //.8s is the transition time of the info dropdown
    }

    /**
     * Cargar la pagina principal
     */
    function load() {
        innerLoader.width("100%");
        let width = 0;
        let id = setInterval(frame, 10);
        function frame() {
            outerLoader.find("p").html(Math.round(width) + "%");
            if (width === 100) {
                clearInterval(id);
            } else { //getting the width on %
                width = innerLoader.width() / innerLoader.parent().width() * 100;
            }
        }
    }

    /**
     * Reproducir el video
     * @param videoIndex
     */
    function playVideo(videoIndex) {
        video[videoIndex].play();
        video[videoIndex].style.opacity = "1";
    }

    /**
     * Parar el video
     * @param videoIndex
     * @param delay
     */
    function stopVideo(videoIndex, delay) {
        setTimeout(function(){
            video[videoIndex].style.height = "30vh";
            video[videoIndex].pause();
            video[videoIndex].style.opacity = "0";
        }, delay);
    }

    /**
     * Mostar el texto
     */
    function showText(){
        setTimeout(function(){
            textContainerParent.css({"position" : "static", "opacity" : "1"});
            linkContainerParent.css("opacity" , "1");
        }, 1500)
    }

    /**
     * Ocultar el texto
     */
    function hideText(){
        //textContainerParent.css("width", textContainerParent.width(), "important");
        textContainerParent.css("opacity", "0");
        linkContainerParent.css("opacity" , "0");
        setTimeout(() => textContainerParent.css("position" , "absolute"), 400);
    }

    /**
     * Funcion para asignar las URL
     * @param currentElement
     */
    function asingarUrl(currentElement){
        switch (currentElement) {
            case "features-first": url = 'subwayMap.htm';
                break;
            case "features-second": url = 'grafica.html';
                break;
            case "features-third": url = 'sandbox.html';
                break;
            case "features-forth": url = 'aboutUs.html';
                break;
        }
    }

    /**
     * Transicion para el contenido de informacion
     * @param currentElementLink
     * @param currentElementText
     */
    function transitionInfoContent(currentElementLink, currentElementText){
        currentElementLink.css({"transform" : "translateX(400%)", "opacity" : "0"});
        currentElementText.css({"transform" : "translateX(100%)", "opacity" : "0"});
    }
};
