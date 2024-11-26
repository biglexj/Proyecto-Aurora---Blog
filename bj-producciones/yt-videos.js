fetch('yt-videos.json')
  .then(response => {
    if (!response.ok) throw new Error(`Error al cargar el archivo JSON: ${response.status}`);
    return response.json();
  })
  .then(videos => {
    // Renderiza las miniaturas
    videos.forEach(video => {
      video.tags.forEach(tag => {
        const videosContainer = document.querySelector(`.videos.${tag}`);
        if (videosContainer) {
          const videoElement = document.createElement('div');
          videoElement.classList.add('video-content');
          videoElement.innerHTML = `
            <div class="title-wrapper">
              <h2 class="title-video">${video.title}</h2>
            </div>
            <div class="video-box">
              <img
                src="https://img.youtube.com/vi/${video.id}/hqdefault.jpg"
                alt="${video.title}"
                class="video-thumbnail"
                data-video-id="${video.id}"
              />
            </div>
          `;

          // Añade el nuevo video al contenedor correspondiente
          videosContainer.appendChild(videoElement);
        }
      });
    });

    // Agrega eventos para cargar el video al hacer clic en la miniatura
    document.addEventListener('click', event => {
      if (event.target && event.target.classList.contains('video-thumbnail')) {
        const videoId = event.target.getAttribute('data-video-id');
        const videoBox = event.target.parentElement;

        // Reemplaza la miniatura con el iframe y un loader
        videoBox.innerHTML = `
          <div class="loader"></div>
          <iframe
            src="https://www.youtube.com/embed/${videoId}?autoplay=1"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        `;

        // Selecciona el iframe y el loader
        const iframe = videoBox.querySelector('iframe');
        const loader = videoBox.querySelector('.loader');

        // Añade un evento para cuando el iframe haya cargado
        iframe.addEventListener('load', () => {
          loader.style.display = 'none'; // Oculta el loader
          iframe.classList.add('loaded'); // Añade la clase para la transición
        });
      }
    });
  })
  .catch(error => console.error('Error al cargar videos:', error));