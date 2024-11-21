document.addEventListener("DOMContentLoaded", function() {
    fetch("social-links/social-links.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al cargar el footer");
            }
            return response.text();
        })
        .then(data => {
            const container = document.getElementById("social-links-container");
            container.innerHTML = data;

            // Corrige las rutas de las imágenes
            const images = container.querySelectorAll("img");
            images.forEach(img => {
                if (img.src.includes("assets/logos")) {
                    img.src = img.src.replace("../assets/logos", "assets/logos");
                }
            });
        })
        .catch(error => {
            console.error("No se pudo cargar el footer:", error);
        });
});
