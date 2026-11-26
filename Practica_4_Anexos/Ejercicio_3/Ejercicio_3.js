const padre = document.getElementById("Padre");

const hijo = document.getElementById ("Hijo");

padre.addEventListener("click", function (){
    alert("Has hecho click en el padre");
});

hijo.addEventListener("click", function (event){
    event.stopPropagation();
    alert("Has hecho click en el hijo");
});