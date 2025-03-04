function changeBackgroundByTime() {
    const hour = new Date().getHours();
    const body = document.body;

    // Remover clases previas
    body.classList.remove("morning", "afternoon", "evening", "night");

    // Determinar el periodo del día y asignar clase
    if (hour >= 6 && hour < 12) {
        body.classList.add("morning");
    } else if (hour >= 12 && hour < 18) {
        body.classList.add("afternoon");
    } else if (hour >= 18 && hour < 21) {
        body.classList.add("evening");
    } else {
        body.classList.add("night");
    }
}

// Cambiar el fondo al cargar la página
changeBackgroundByTime();

// Opcional: Actualizar cada hora
setInterval(changeBackgroundByTime, 60 * 60 * 1000);