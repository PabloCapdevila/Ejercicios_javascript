let precio = Number(prompt("Introduce el precio del artículo:"));

let iva = precio * 0.21;

let total = precio + iva;

alert("IVA: " + iva.toFixed(2) + " €\nPrecio total: " + total.toFixed(2) + " €");