window.onload = function () {
    color();
};
 

function color() {
    var lista = document.getElementById("colores");
    var parrafo = document.getElementById("parrafo");
 
    var opcion = lista.options[lista.selectedIndex].value;
    var color;
    
    switch (opcion) {
        case "verde":
            color = "green";
            break;
        case "azul":
            color = "blue";
            break;
        case "rojo":
            color = "red";
            break;
    }


    parrafo.style.color = color;
}
