let cadena = prompt("Introduce una cadena:");
let palabras = cadena.split(" ");

document.write("La longitud de la cadena es " + cadena.length + " caracteres<br>");

document.write("La cadena en mayúsculas es " + cadena.toUpperCase() + "<br>");

document.write("La cadena en minúsculas es " + cadena.toLowerCase() + "<br><br>");


document.write("CADENA NORMAL<br>");
for (let palabra of palabras)
    document.write(palabra + "<br>");

document.write("<br>CADENA AL REVÉS<br>");
for (let i = palabras.length - 1; i >= 0; i--)
    document.write(palabras[i] + "<br>");