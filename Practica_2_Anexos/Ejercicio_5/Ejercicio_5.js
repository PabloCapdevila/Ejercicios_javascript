window.onload = function() {

    alert("Bienvenido a la página.");

    setTimeout(function() {
        window.open(
            "https://www.google.com",
            "_blank"
        );
    }, 20000);
};