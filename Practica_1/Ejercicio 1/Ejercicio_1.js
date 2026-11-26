let suma = 0, mayores = 0;

for (let i = 1; i <= 5; i++) {
    let n = Number(prompt("Introduce un número:"));
    suma += n;
    if (n > 100) mayores++;
}

alert("La suma es: " + suma + "\nMayores de 100: " + mayores);