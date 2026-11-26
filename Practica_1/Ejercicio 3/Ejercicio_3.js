let meses = prompt("Dime un mes:");
mes = meses.toLowerCase();
let estacion;

if (mes == "diciembre" || mes == "enero" || mes == "febrero")
    estacion = "Invierno";
else if (mes == "marzo" || mes == "abril" || mes == "mayo")
    estacion = "Primavera";
else if (mes == "junio" || mes == "julio" || mes == "agosto")
    estacion = "Verano";
else if (mes == "septiembre" || mes == "octubre" || mes == "noviembre")
    estacion = "Otoño";
else
    estacion = "no valido"

alert("Estamos en " + estacion);