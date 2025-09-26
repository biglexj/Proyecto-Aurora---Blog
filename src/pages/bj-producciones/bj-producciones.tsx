import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import logo from '/Marca/@biglexpe/biglexpe.svg';
import frames from './animationFrames';

interface Video {
  id: string;
  title: string;
  tags: string[];
}

interface VideosByGenre {
  [genre: string]: Video[];
}

const BJProducciones: React.FC = () => {
  const [videos, setVideos] = useState<VideosByGenre>({});
  const [animationFrame, setAnimationFrame] = useState<number>(0);
  const totalFrames = frames.length;

  useEffect(() => {
    const genres = [
      'cumbia-sureña',
      'cumbia-sanjuanera',
      'cumbia',
      'huayno',
      'huayno-norteño',
      'huayno-sureño',
      'caporal'
      ///'pop',
      //'rap',
      //'j-pop',
      //'metal',
      //'mas'
    ];

    const fetchAllVideos = async () => {
      const videosByGenre: VideosByGenre = {};
      for (const genre of genres) {
        try {
          const response = await fetch(`/data/bj-producciones/${genre}.json`);
          videosByGenre[genre] = await response.json();
        } catch (error) {
          console.error(`Error loading videos for genre ${genre}:`, error);
        }
      }
      setVideos(videosByGenre);
    };

    fetchAllVideos();
  }, []);

  // Manejamos el clic del video con useCallback para mejor rendimiento
  const handleVideoClick = useCallback((videoId: string, event: React.MouseEvent<HTMLImageElement>) => {
    const imageContainer = event.target as HTMLElement;
    
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

  // Manejamos la animación del logo usando los frames importados
  useEffect(() => {
    let intervalo: number | undefined;
    const animation = document.getElementById("logo-animated") as HTMLImageElement;
    if (!animation) return;

    const animar = () => {
      setAnimationFrame(prev => (prev + 1) % totalFrames);
    };

    const iniciarAnimacion = () => {
      clearInterval(intervalo);
      setAnimationFrame(0);
      intervalo = window.setInterval(animar, 1000 / 20);
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
  
            <section className="h-auto md:h-125 mt-6 max-w-7xl mx-auto p-4 md:p-6 bg-pink-panther-300 rounded-2xl shadow-md">
              <div className="flex flex-col md:flex-row items-center justify-between h-full">
                <div className="p-8 w-full md:w-3/5 order-1 md:order-1">
                  <h1 className="text-3xl md:text-5xl mb-4 md:mb-6 font-bold text-center text-gray-800">
                    🎤 Donde la música toma control de tu voz 🎶
                  </h1>
                  <p className="mb-6 md:mb-8 text-center font-medium text-dark text-lg md:text-xl">
                    Bienvenidos al rincón musical de Biglex J Producciones, donde encontrarás karaokes únicos para cantar tus canciones favoritas. 🎵
                  </p>
                  
                  <div className="flex justify-center mb-6 md:mb-0">
                    <a href="https://www.youtube.com/@biglexpe" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="text-lg md:text-xl bg-pink-panther-500 text-white px-4 md:px-6 py-2 rounded-xl font-semibold hover:bg-pink-panther-600 transition">
                      Suscríbete
                    </a>
                  </div>
                </div>
                
                <div className="w-full md:w-2/5 flex justify-center order-2 md:order-2 mb-6 md:mb-0">
                  <div className="relative inline-block">
                    <img 
                      src={frames[animationFrame]} 
                      alt="Animación" 
                      id='logo-animated'
                      className="w-48 sm:w-56 md:w-64 lg:w-72 rounded-4xl shadow-lg hover:scale-105 transition-transform mx-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-panther-300/20 rounded-4xl pointer-events-none"></div>
                  </div>
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
                        <h3 className="text-sm md:text-base font-semibold mt-2 text-gray-800 line-clamp-2">{video.title}</h3>
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
