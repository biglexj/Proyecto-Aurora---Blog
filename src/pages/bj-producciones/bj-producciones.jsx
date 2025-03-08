import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Marca/Logo.jpg';
import videosData from './yt-videos.json';
import frames from './animationFrames';


const BJProducciones = () => {
  const [videos, setVideos] = useState({});

  // Organizamos los videos por género una sola vez al montar el componente
  useEffect(() => {
    const videosByGenre = {};
    videosData.forEach(video => {
      const primaryTag = video.tags[0]; // Utiliza solo el primer tag
      if (!videosByGenre[primaryTag]) {
        videosByGenre[primaryTag] = [];
      }
      videosByGenre[primaryTag].push(video);
    });
    setVideos(videosByGenre);
  }, []);

  // Manejamos el clic del video con useCallback para mejor rendimiento
  const handleVideoClick = useCallback((videoId, event) => {
    const videoBox = event.target.parentElement;
    
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '');
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    
    const loader = document.createElement('div');
    loader.className = 'loader';
    
    videoBox.innerHTML = '';
    videoBox.appendChild(loader);
    videoBox.appendChild(iframe);
    
    iframe.onload = () => {
      loader.style.display = 'none';
    };
  }, []);

  // Manejamos la animación del logo
  useEffect(() => {
    const totalFrames = frames.length;
    let currentFrame = 0;
    let intervalo;

    const animation = document.getElementById("logo-animated");
    if (!animation) return;

    const animar = () => {
      if (currentFrame < totalFrames) {
        animation.src = frames[currentFrame];
        currentFrame++;
      } else {
        clearInterval(intervalo);
      }
    };

    const iniciarAnimacion = () => {
      currentFrame = 0;
      clearInterval(intervalo);
      intervalo = setInterval(animar, 1000 / 20);
    };

    animation.addEventListener('click', iniciarAnimacion);
    iniciarAnimacion();

    return () => {
      clearInterval(intervalo);
      animation.removeEventListener('click', iniciarAnimacion);
    };
  }, []);


  return (
    <main className='bg-green-creativity-400 min-h-screen text-primary-white'>
      <div className="max-w-7xl mx-auto min-h-screen p-0">
        <div className="max-w-7xl mx-auto min-h-screen p-0">
          <header className="rounded-b-2xl rounded-br-2xl max-w-7xl mx-auto bg-green-creativity-300 text-[#333333] p-0">
            <div className="h-18 container mx-auto flex items-center justify-between px-4">
              <div className="logo flex items-center">
                <img src={logo} alt="Logo" id="logo-bar" className="rounded-full h-12 w-auto transition-transform duration-300 hover:rotate-360" />
              </div>
              <h1 id='title' className="text-2xl font-bold">Biglex J Producciones</h1>
              <nav className="flex space-x-4">
                <Link to="/" className="rounded-2xl bg-green-creativity-400 px-4 py-2 font-semibold text-dark hover:bg-pink-panther-400 hover:text-white">Inicio</Link>
                <Link to="/biglex-dev" className="rounded-2xl bg-green-creativity-400 px-4 py-2 font-semibold text-dark hover:bg-pink-panther-400 hover:text-white">Desarrollo</Link>
                <Link to="/services" className="rounded-2xl bg-green-creativity-400 px-4 py-2 font-semibold text-dark hover:bg-pink-panther-400 hover:text-white">Servicios</Link>
              </nav>
            </div>
          </header>

          <section className="h-125 mt-6 flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto p-6 bg-pink-panther-300 rounded-2xl shadow-md gap-x-4">
            <div className="content cbjp1 w-3/5">
              <h1 className="text-5xl mb-6 font-bold text-center text-gray-800">
                🎤 Donde la música toma control de tu voz 🎶
              </h1>
              <p className="mb-10 text-center font-medium text-dark text-xl">
                Bienvenidos al rincón musical de Biglex J Producciones, donde encontrarás karaokes únicos para cantar tus canciones favoritas. 🎵
              </p>
              <div className="flex justify-center">
                <a href="https://www.youtube.com/@biglexpe" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-xl bg-pink-panther-500 text-white px-6 py-2 rounded-xl font-semibold hover:bg-pink-panther-600 transition">
                  Suscríbete
                </a>
              </div>
            </div>
            <div className="w-2/5 flex justify-center">
              <img src={frames[0]} alt="Animación" id='logo-animated'
                className="w-56 md:w-80 rounded-4xl shadow-lg hover:scale-105 transition-transform"
              />
            </div>
          </section>

          <div className="mt-6 grid grid-cols-1 gap-6"> {/* Ajusta el diseño de los videos */}
            {Object.keys(videos).sort((a, b) => {
              if (a === 'mas') return 1;
              if (b === 'mas') return -1;
              return a.localeCompare(b);
            }).map((genero) => ( // Ordena los géneros alfabéticamente, con "Más Géneros" al final
              <div key={genero} className="box bg-violet-brand-300 rounded-2xl p-6 shadow-md">
                <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
                  {genero === 'mas' ? 'Más Géneros' : genero.replace(/-/g, ' ').toUpperCase()}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> {/* Cambia a una cuadrícula de 4 columnas */}
                  {videos[genero].map((video) => (
                    <div key={video.id} className="video-content bg-white rounded-lg p-4 shadow">
                      <img
                        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                        alt={video.title}
                        className="w-full h-auto object-cover rounded cursor-pointer hover:scale-105 transition-transform"
                        onClick={(e) => handleVideoClick(video.id, e)}
                      />
                      <h3 className="text-lg font-semibold text-gray-800 mt-2 text-center">{video.title}</h3> {/* Mueve el título debajo */}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default BJProducciones;
