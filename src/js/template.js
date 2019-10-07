
window.onload = function () {
    var template = document.getElementById("plantillaMenu");
    console.log(template)
    let clone = template.content.cloneNode(true);
    console.log(document.body);
    document.body.appendChild(clone);
}