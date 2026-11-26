document.addEventListener("DOMContentLoaded", () => {
    const lista = document.getElementById("listaAnimales");

    document.getElementById("Anadir").addEventListener("click", () => {
        const nuevoLi = document.createElement("li");
        nuevoLi.textContent = "tigre";
        lista.appendChild(nuevoLi);
    });

    document.getElementById("Insertar").addEventListener("click", () => {
        const nuevoLi = document.createElement("li");
        nuevoLi.textContent = "cebra";
        if (lista.children.length > 0) {
            lista.insertBefore(nuevoLi, lista.children[0]);
        } else {
            lista.appendChild(nuevoLi);
        }
    });

    document.getElementById("Reemplazar").addEventListener("click", () => {
        if (lista.children.length > 0) {
            const nuevoLi = document.createElement("li");
            nuevoLi.textContent = "guepardo";
            lista.replaceChild(nuevoLi, lista.children[0]);
        }
    });

    document.getElementById("Borrar").addEventListener("click", () => {
        if (lista.children.length > 0) {
            lista.removeChild(lista.lastElementChild);
        }
    });

    document.getElementById("Clonar").addEventListener("click", () => {
        const clon = lista.cloneNode(true);
        clon.id = "listaelemen-clon";
        document.body.appendChild(clon);
    });


    document.getElementById("SublistaDOM").addEventListener("click", () => {
        if (lista.children.length > 0) {
            const leonLi = lista.children[0];
            
            const sublista = document.createElement("ul");
            const subItem1 = document.createElement("li");
            subItem1.textContent = "salvaje";

            sublista.appendChild(subItem1);
            leonLi.appendChild(sublista);
        }
    });


    document.getElementById("SublistaInner").addEventListener("click", () => {
        if (lista.children.length > 0) {
            const leonLi = lista.children[0];
            
            leonLi.innerHTML += `
                <ul>
                    <li>leopardo</li>
                    <li>tigre_2</li>
                </ul>
            `;
        }
    });
});