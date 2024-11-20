document.addEventListener("DOMContentLoaded", function () {
  const rutaBase = "../assets/Animacion/frame-";
  const totalFrames = 60; // Número total de frames
  let currentFrame = 1;

  const animation = document.getElementById("logo-animated");

  // Función para animar y detenerse en el último frame
  function animar() {
    if (currentFrame <= totalFrames) {
      animation.src = `${rutaBase}${currentFrame}.png`; // Cambia el src al frame actual
      currentFrame++;
    } else {
      clearInterval(intervalo); // Detén la animación al llegar al último frame
    }
  }

  // Inicia la animación
  const intervalo = setInterval(animar, 1000 / 20); // 20 FPS
});