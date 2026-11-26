function abrir() {

    let ventana = window.open("", "", "width=500,height=500");

    ventana.document.write(`
        <html>
            <body>
                <button onclick="window.close()">Cerrar</button>
            </body>
        </html>
    `);
}