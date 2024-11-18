const rutaBase = "../assets/Animacion/frame ";
  const totalFrames = 60; // Número total de frames
  let currentFrame = 1; // Frame inicial (comienza en 1)
  const animation = document.getElementById('logo-sencondary'); // Selección del elemento
  
  // Función para cambiar los frames
  function animar() {
    currentFrame = (currentFrame % totalFrames) + 1; // Avanza al siguiente frame, vuelve a 1 después del último
    animation.src = `${rutaBase}${currentFrame}.png`; // Cambia el atributo src

    
    setInterval(animar, 100);