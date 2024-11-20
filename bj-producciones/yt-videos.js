fetch('yt-videos.json')
  .then(response => {
    if (!response.ok) throw new Error(`Error al cargar el archivo JSON: ${response.status}`);
    return response.json();
  })
  .then(videos => {
    // Recorremos todos los videos del JSON
    videos.forEach(video => {
      video.tags.forEach(tag => {
        const videosContainer = document.querySelector(`.videos.${tag}`);
        if (videosContainer) {
          const videoElement = document.createElement('div');
          videoElement.classList.add('video-content');
          videoElement.innerHTML = `
            <div class="title-wrapper"><h2 class="title-video">${video.title}</h2></div>
            <div class="video-box">
              <iframe
                src="https://www.youtube.com/embed/${video.id}"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
              ></iframe>
            </div>
          `;

          // Añade el nuevo video al contenedor correspondiente
          videosContainer.appendChild(videoElement);
        }
      });
    });
  })
  .catch(error => console.error('Error al cargar videos:', error));
