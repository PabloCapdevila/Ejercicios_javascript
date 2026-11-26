function redimensionar() {

    if (navigator.userAgent.includes("MSIE")) {
        window.resizeTo(500, 500);
    } else {
        alert("No permitido con este navegador");
    }

}
