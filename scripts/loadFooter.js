document.addEventListener("DOMContentLoaded", function () {
    fetch("social-links/social-links.html") // Esto busca en la carpeta social-links
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al cargar el footer");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("social-links-container").innerHTML = data;
        })
        .catch(error => {
            console.error("No se pudo cargar el footer:", error);
        });
});
