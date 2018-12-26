

var uri = "/getDirs";
var peti = new XMLHttpRequest();

peti.open("GET", uri, true);
peti.onreadystatechange = function() {
    if(peti.readyState === 4)
        if(peti.status === 200)
            miFuncion(peti.responseText);
};
peti.send(null);

function miFuncion(response) {
    var lista = document.getElementById("dirs");
    JSON.parse(response).dirs.forEach(function(item) {
        var a = document.createElement("a");
        a.href = "../" + item + "/index.html";
        a.innerText = item;
        var li = document.createElement("li");
        li.appendChild(a);
        lista.appendChild(li);
    })
}