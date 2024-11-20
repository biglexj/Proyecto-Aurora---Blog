//const API_KEY = 'AIzaSyDsq3L6w2KSivTcwRicK88wzHIKjwaaYis';
const CHANNEL_ID = "UCBcDgxG2xaoOUEOBlNbc87A" //biglexpe
//const CHANNEL_ID = "UCoj-c4Iv3EGrdV9sj5G4QSw" //biglexbro
//const CHANNEL_ID = 'UC2CZ812lM70cjF8vukJ85ew'; //biglexj
//const CHANNEL_ID = "UCfnZ7DrHm6ALN150xMpc0Og" //biglexdev
const YOUTUBE_API_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=5`;

fetch(YOUTUBE_API_URL)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data); // Verifica qué devuelve la API
    if (!data.items) {
      console.error('No videos found in response');
      return;
    }
    const videosContainer = document.getElementById('youtube-videos');
    data.items.forEach(item => {
      const videoId = item.id.videoId;
      const videoTitle = item.snippet.title;

      const videoElement = `
        <div>
          <h3>${videoTitle}</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/${videoId}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>`;
      videosContainer.innerHTML += videoElement;
    });
  })
  .catch(error => console.error('Error fetching videos:', error));
