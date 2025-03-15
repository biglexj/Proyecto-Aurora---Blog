import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import logo from '/Marca/@biglexpe/biglexpe.svg';

const BJProducciones = () => {
  const [videos, setVideos] = useState({});
  const [animationFrame, setAnimationFrame] = useState(1);
  const totalFrames = 60; // Total number of frames

  // Fetch videos data from public directory
  useEffect(() => {
    fetch('/data/yt-videos.json')
      .then(response => response.json())
      .then(videosData => {
        const videosByGenre = {};
        videosData.forEach(video => {
          const primaryTag = video.tags[0];
          if (!videosByGenre[primaryTag]) {
            videosByGenre[primaryTag] = [];
          }
          videosByGenre[primaryTag].push(video);
        });
        setVideos(videosByGenre);
      })
      .catch(error => console.error('Error loading videos:', error));
  }, []);

  // Manejamos el clic del video con useCallback para mejor rendimiento
  const handleVideoClick = useCallback((videoId, event) => {
    const imageContainer = event.target;
    
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '');
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.className = 'w-full h-auto rounded';
    
    const loader = document.createElement('div');
    loader.className = 'loader';
    
    imageContainer.replaceWith(iframe);
    
    iframe.onload = () => {
      loader.style.display = 'none';
    };
  }, []);

  // Manejamos la animación del logo
  useEffect(() => {
    let intervalo;
    const animation = document.getElementById("logo-animated");
    if (!animation) return;

    const animar = () => {
      setAnimationFrame(prev => {
        const nextFrame = prev < totalFrames ? prev + 1 : 1;
        animation.src = `/animate-logo/frame-${nextFrame}.png`;
        return nextFrame;
      });
    };

    const iniciarAnimacion = () => {
      clearInterval(intervalo);
      setAnimationFrame(1);
      animation.src = `/animate-logo/frame-1.png`;
      intervalo = setInterval(animar, 1000 / 20);
    };

    animation.addEventListener('click', iniciarAnimacion);
    iniciarAnimacion();

    return () => {
      clearInterval(intervalo);
      animation.removeEventListener('click', iniciarAnimacion);
    };
  }, [totalFrames]);

  return (
    <main className='min-h-screen text-primary-white'>
        <div className="max-w-7xl mx-auto min-h-screen p-0">
            <header className="rounded-b-2xl rounded-br-2xl max-w-7xl mx-auto bg-green-creativity-300 text-[#333333] p-0">
              <div className="h-auto py-3 container mx-auto flex flex-col md:flex-row md:h-18 items-center justify-between px-4">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="logo flex items-center mr-3">
                    <img src={logo} alt="Logo" id="logo-bar" className="bg-white rounded-full h-10 w-auto md:h-12 transition-transform duration-300 hover:rotate-360" />
                  </div>
                  <h1 id='title' className="text-xl md:text-2xl font-bold">Biglex J Producciones</h1>
                </div>
                <nav className="flex flex-wrap justify-center gap-2 md:space-x-4">
                  <Link to="/" className="rounded-2xl bg-green-creativity-400 px-3 py-1 md:px-4 md:py-2 font-semibold text-dark hover:bg-pink-panther-400 hover:text-white text-sm md:text-base">Inicio</Link>
                  <Link to="/biglex-dev" className="rounded-2xl bg-green-creativity-400 px-3 py-1 md:px-4 md:py-2 font-semibold text-dark hover:bg-pink-panther-400 hover:text-white text-sm md:text-base">Desarrollo</Link>
                  <Link to="/services" className="rounded-2xl bg-green-creativity-400 px-3 py-1 md:px-4 md:py-2 font-semibold text-dark hover:bg-pink-panther-400 hover:text-white text-sm md:text-base">Servicios</Link>
                </nav>
              </div>
            </header>
  
            <section className="h-auto mt-6 max-w-7xl mx-auto p-4 md:p-6 bg-pink-panther-300 rounded-2xl shadow-md">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="content cbjp1 w-full md:w-4/5 lg:w-3/4 mx-auto mb-6">
                  <h1 className="text-3xl md:text-5xl mb-4 md:mb-6 font-bold text-center text-gray-800">
                    🎤 Donde la música toma control de tu voz 🎶
                  </h1>
                  <p className="mb-6 md:mb-8 text-center font-medium text-dark text-lg md:text-xl">
                    Bienvenidos al rincón musical de Biglex J Producciones, donde encontrarás karaokes únicos para cantar tus canciones favoritas. 🎵
                  </p>
                </div>
                
                <div className="w-full flex justify-center mb-6 md:mb-8">
                  <div className="relative inline-block">
                    <img 
                      src={`/animate-logo/frame-${animationFrame}.png`} 
                      alt="Animación" 
                      id='logo-animated'
                      className="w-48 sm:w-56 md:w-64 lg:w-80 rounded-4xl shadow-lg hover:scale-105 transition-transform mx-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-panther-300/20 rounded-4xl pointer-events-none"></div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <a href="https://www.youtube.com/@biglexpe" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-lg md:text-xl bg-pink-panther-500 text-white px-4 md:px-6 py-2 rounded-xl font-semibold hover:bg-pink-panther-600 transition">
                    Suscríbete
                  </a>
                </div>
              </div>
            </section>
  
            <div className="mt-6 grid grid-cols-1 gap-6">
              {Object.keys(videos).sort((a, b) => {
                if (a === 'mas') return 1;
                if (b === 'mas') return -1;
                return a.localeCompare(b);
              }).map((genero) => (
                <div key={genero} className="box bg-violet-brand-300 rounded-2xl p-4 md:p-6 shadow-md">
                  <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 md:mb-8 text-gray-800">
                    {genero === 'mas' ? 'Más Géneros' : genero.replace(/-/g, ' ').toUpperCase()}
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
                    {videos[genero].map((video) => (
                      <div key={video.id} className="video-content bg-white rounded-lg p-2 md:p-4 shadow">
                        <img
                          src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                          alt={video.title}
                          className="w-full h-auto object-cover rounded cursor-pointer hover:scale-105 transition-transform"
                          onClick={(e) => handleVideoClick(video.id, e)}
                        />
                        <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-800 mt-2 text-center line-clamp-2">{video.title}</h3>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
        </div>
    </main>
    );
  };

  export default BJProducciones;
