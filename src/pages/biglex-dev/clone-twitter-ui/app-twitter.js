// Función para obtener la fecha y hora en el formato deseado
function getFormattedDate(date) {
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const day = date.getDate();
    const month = date.toLocaleString('en-us', { month: 'short' });
    const year = date.getFullYear();
  
    // Formateamos las horas y minutos con ceros iniciales si es necesario
    const formattedHour = hour.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
  
    // Construimos la cadena con el formato deseado
    return `${formattedHour}:${formattedMinutes} · ${day} ${month}. ${year}`;
  }
  
    // Obtenemos la fecha y hora actual
    const currentDate = new Date();
  
    // Obtenemos el elemento donde queremos mostrar la fecha y hora
    const tweetDateElement = document.getElementById("tweet-date");
  
    // Formateamos la fecha y hora y la mostramos en el elemento
    tweetDateElement.textContent = `${getFormattedDate(currentDate)}`;
  
  
    // Función para capturar y guardar "tweet-container" como una imagen
  function captureAndSave() {
    const tweetContainer = document.querySelector('.tweet-container');
  
        // Verifica si se encontró el elemento con la clase "tweet-container"
    if (tweetContainer) {
            // Utilizamos html2canvas para convertir el contenido del elemento en una imagen
        html2canvas(tweetContainer).then(function(canvas) {
                // Creamos un enlace para descargar la imagen
        const link = document.createElement('a');
            link.download = 'tweet.png';
  
            // Convertimos el canvas a una URL de datos (data URL) y la asignamos al enlace
            link.href = canvas.toDataURL('image/png');
  
            // Hacemos clic en el enlace para iniciar la descarga de la imagen
            link.click();
        });
    } else {
        console.log('La clase "tweet-container" no fue encontrada.');
    }
  }