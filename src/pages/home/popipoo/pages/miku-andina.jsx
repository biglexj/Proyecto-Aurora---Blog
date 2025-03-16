import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '/Marca/@biglexj/biglexj.svg';
import Marca from '/Marca/@miku-andina/miku-andina.jpg';

const VideoCard = ({ title, views, timestamp, thumbnail, duration }) => (
  <div className="flex flex-col mb-4">
    <div className="relative">
      <img 
        src={thumbnail || "/assets/placeholder-thumbnail.jpg"} 
        alt={title} 
        className="w-full rounded-xl object-cover aspect-video"
      />
      <span className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 rounded">
        {duration || "10:30"}
      </span>
    </div>
    <div className="flex mt-2">
      <div>
        <h3 className="font-medium text-sm line-clamp-2">{title || "Video Title Goes Here - This is a placeholder for the video title"}</h3>
        <p className="text-gray-500 text-xs mt-1">
          {views || "100K views"} • {timestamp || "3 days ago"}
        </p>
      </div>
    </div>
  </div>
);

const MikuAndina = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [channels, setChannels] = useState([]);
  const [channelData] = useState({
    name: "Miku Andina",
    handle: "@miku-andina",
    subscribers: "1.2K suscriptores",
    videos: "42 videos",
    description: "¡Bienvenidos al canal oficial de Miku Andina! Aquí encontrarás covers, música original y contenido relacionado con Hatsune Miku con un toque andino.",
    links: "mikuandina.net.pe",
    banner: "/assets/miku-andina-banner.jpg",
    avatar: "/assets/miku-andina-avatar.jpg"
  });
  
  // Navigation tabs for channel page
  const channelTabs = [
    "Principal", "Videos", "Shorts", "En vivo", "Playlists", "Comunidad", "Canales", "Más información"
  ];
  
  // Fetch channel data
  useEffect(() => {
    fetch('/data/channel-yt.json')
      .then(response => response.json())
      .then(data => setChannels(data))
      .catch(error => console.error('Error fetching channels:', error));
  }, []);
  
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="flex items-center justify-between px-4 h-14">
          <div className="flex items-center">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-full hover:bg-gray-200 mr-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Logo" className="h-8 mr-1" />
              <span className="font-bold text-xl">BiglexTube</span>
            </Link>
          </div>
          
          <div className="flex-grow max-w-2xl mx-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Buscar" 
                className="w-full py-2 pl-4 pr-10 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
              />
              <button className="absolute right-0 top-0 h-full px-4 flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="flex items-center">
            <button className="p-2 rounded-full hover:bg-gray-200 mr-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <button className="w-8 h-8 rounded-full text-white flex items-center justify-center">
            <img src={Marca} alt="Logo" className="h-8 mr-1" />
            </button>
          </div>
        </div>
      </header>
      
      <div className="flex">
        {/* Sidebar */}
        <aside className={`fixed left-0 top-14 h-full bg-white z-10 transition-all duration-300 ${sidebarOpen ? 'w-56' : 'w-20'} overflow-y-auto`}>
          <div className="py-2">
            <Link to="/" className="flex items-center px-4 py-2 hover:bg-gray-100">
              <svg className="w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              {sidebarOpen && <span>Principal</span>}
            </Link>
            
            <Link to="/shorts" className="flex items-center px-4 py-2 hover:bg-gray-100">
              <svg className="w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
              </svg>
              {sidebarOpen && <span>Shorts</span>}
            </Link>
            
            <Link to="/subscriptions" className="flex items-center px-4 py-2 hover:bg-gray-100">
              <svg className="w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              {sidebarOpen && <span>Suscripciones</span>}
            </Link>
            
            {/* Channel subscriptions */}
            {sidebarOpen && channels.length > 0 && (
              <>
                <div className="px-4 pt-2 pb-1 text-xs text-gray-500">CANALES</div>
                {channels.map((channel, index) => (
                  <a 
                    key={index} 
                    href={channel.channel.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 hover:bg-gray-100"
                  >
                    <img 
                      src={channel.channel.icon} 
                      alt={channel.channel.name} 
                      className="w-6 h-6 rounded-full mr-4"
                    />
                    {sidebarOpen && <span>{channel.channel.name}</span>}
                  </a>
                ))}
              </>
            )}
          </div>
        </aside>
        
        {/* Main content */}
        <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-56' : 'ml-20'}`}>
          {/* Channel Banner */}
          <div className="relative w-full">
            <img 
              src={channelData.banner} 
              alt="Channel Banner" 
              className="w-full h-48 md:h-60 object-cover"
            />
          </div>
          
          {/* Channel Info */}
          <div className="px-6 py-4 flex flex-col md:flex-row items-start md:items-center">
            <img 
              src={channelData.avatar} 
              alt={channelData.name} 
              className="w-20 h-20 rounded-full mr-6"
            />
            <div className="mt-4 md:mt-0">
              <h1 className="text-2xl font-bold">{channelData.name}</h1>
              <p className="text-gray-600 text-sm">
                {channelData.handle} • {channelData.subscribers} • {channelData.videos}
              </p>
              <p className="text-gray-600 text-sm mt-1">{channelData.description}</p>
              <p className="text-gray-600 text-sm mt-1">{channelData.links}</p>
            </div>
            <div className="mt-4 md:mt-0 md:ml-auto">
              <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700">
                Suscribirse
              </button>
            </div>
          </div>
          
          {/* Channel Navigation */}
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto px-6">
              {channelTabs.map((tab, index) => (
                <button 
                  key={index} 
                  className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${index === 0 ? 'border-b-2 border-black' : ''}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          
          {/* Featured Video */}
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-2/3">
                <div className="relative">
                  <img 
                    src="/assets/miku-andina-featured.jpg" 
                    alt="Featured Video" 
                    className="w-full rounded-xl object-cover aspect-video"
                  />
                  <span className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 rounded">
                    3:45
                  </span>
                </div>
                <h2 className="text-lg font-medium mt-2">Hatsune Miku - Huayno Miku (Cover Andino)</h2>
                <p className="text-gray-500 text-sm">24K vistas • hace 2 meses</p>
              </div>
              <div className="md:w-1/3">
                <h3 className="font-medium mb-4">Bienvenidos al canal oficial de Miku Andina</h3>
                <p className="text-sm">Fusionamos la tecnología de Vocaloid con los ritmos tradicionales andinos para crear una experiencia musical única. Suscríbete para no perderte nuestros nuevos covers y canciones originales.</p>
                <button className="text-blue-600 text-sm font-medium mt-1">MÁS INFORMACIÓN</button>
              </div>
            </div>
          </div>
          
          {/* Videos populares section */}
          <div className="p-6">
            <h2 className="text-xl font-medium mb-4">Videos populares</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <VideoCard 
                title="Hatsune Miku - El Cóndor Pasa (Cover Andino)"
                views="45K views"
                timestamp="5 months ago"
                thumbnail="/assets/miku-video-1.jpg"
                duration="4:12"
              />
              <VideoCard 
                title="Miku Andina - Carnaval de Tinta (Original)"
                views="32K views"
                timestamp="3 months ago"
                thumbnail="/assets/miku-video-2.jpg"
                duration="3:58"
              />
              <VideoCard 
                title="Hatsune Miku - Ojos Azules (Cover)"
                views="28K views"
                timestamp="4 months ago"
                thumbnail="/assets/miku-video-3.jpg"
                duration="3:24"
              />
              <VideoCard 
                title="Miku Andina - Festival de Colores (Live Performance)"
                views="19K views"
                timestamp="1 month ago"
                thumbnail="/assets/miku-video-4.jpg"
                duration="5:32"
              />
            </div>
          </div>
          
          {/* Últimos videos section */}
          <div className="p-6">
            <h2 className="text-xl font-medium mb-4">Últimos videos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <VideoCard 
                title="Hatsune Miku - Wayra (Original Song)"
                views="12K views"
                timestamp="2 weeks ago"
                thumbnail="/assets/miku-video-5.jpg"
                duration="3:47"
              />
              <VideoCard 
                title="Miku Andina - Tutorial: Cómo crear música con Vocaloid"
                views="8.5K views"
                timestamp="3 weeks ago"
                thumbnail="/assets/miku-video-6.jpg"
                duration="15:22"
              />
              <VideoCard 
                title="Hatsune Miku - Huaylas Digital (Cover)"
                views="7.2K views"
                timestamp="1 month ago"
                thumbnail="/assets/miku-video-7.jpg"
                duration="4:05"
              />
              <VideoCard 
                title="Miku Andina - Detrás de escenas: Creación de 'Carnaval de Tinta'"
                views="5.8K views"
                timestamp="1 month ago"
                thumbnail="/assets/miku-video-8.jpg"
                duration="8:47"
              />
            </div>
          </div>
          
          {/* Playlists section */}
          <div className="p-6">
            <h2 className="text-xl font-medium mb-4">Playlists</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="relative">
                <div className="relative">
                  <img 
                    src="/assets/miku-playlist-1.jpg" 
                    alt="Covers Andinos" 
                    className="w-full rounded-xl object-cover aspect-video"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl mb-2">▶️</div>
                      <div className="font-medium">Ver playlist completa</div>
                    </div>
                  </div>
                </div>
                <h3 className="font-medium text-sm mt-2">Covers Andinos - Colección Completa</h3>
                <p className="text-gray-500 text-xs">15 videos</p>
              </div>
              
              <div className="relative">
                <div className="relative">
                  <img 
                    src="/assets/miku-playlist-2.jpg" 
                    alt="Canciones Originales" 
                    className="w-full rounded-xl object-cover aspect-video"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl mb-2">▶️</div>
                      <div className="font-medium">Ver playlist completa</div>
                    </div>
                  </div>
                </div>
                <h3 className="font-medium text-sm mt-2">Canciones Originales - Miku Andina</h3>
                <p className="text-gray-500 text-xs">8 videos</p>
              </div>
              
              <div className="relative">
                <div className="relative">
                  <img 
                    src="/assets/miku-playlist-3.jpg" 
                    alt="Tutoriales" 
                    className="w-full rounded-xl object-cover aspect-video"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl mb-2">▶️</div>
                      <div className="font-medium">Ver playlist completa</div>
                    </div>
                  </div>
                </div>
                <h3 className="font-medium text-sm mt-2">Tutoriales de Vocaloid y Producción Musical</h3>
                <p className="text-gray-500 text-xs">12 videos</p>
              </div>
              
              <div className="relative">
                <div className="relative">
                  <img 
                    src="/assets/miku-playlist-4.jpg" 
                    alt="Presentaciones en vivo" 
                    className="w-full rounded-xl object-cover aspect-video"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl mb-2">▶️</div>
                      <div className="font-medium">Ver playlist completa</div>
                    </div>
                  </div>
                </div>
                <h3 className="font-medium text-sm mt-2">Presentaciones en Vivo - Miku Andina</h3>
                <p className="text-gray-500 text-xs">7 videos</p>
              </div>
            </div>
          </div>
          
          {/* Community section */}
          <div className="p-6">
            <h2 className="text-xl font-medium mb-4">Comunidad</h2>
            <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
              <div className="flex items-center mb-3">
                <img 
                  src={channelData.avatar} 
                  alt={channelData.name} 
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-medium">{channelData.name}</p>
                  <p className="text-gray-500 text-xs">Hace 3 días</p>
                </div>
              </div>
              <p className="mb-3">¡Hola a todos! Estamos trabajando en un nuevo cover que combina el estilo huayno con una canción popular de Miku. ¿Qué canción les gustaría escuchar en versión andina?</p>
              <img 
                src="/assets/miku-community-post.jpg" 
                alt="Community Post" 
                className="w-full rounded-xl mb-3"
              />
              <div className="flex items-center text-gray-600 text-sm">
                <button className="flex items-center mr-4">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                  1.2K
                </button>
                <button className="flex items-center mr-4">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                  </svg>
                  24
                </button>
                <button className="flex items-center">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  345 comentarios
                </button>
              </div>
            </div>
          </div>
          
          {/* About section */}
          <div className="p-6">
            <h2 className="text-xl font-medium mb-4">Acerca de</h2>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="mb-4">{channelData.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium mb-2">Estadísticas</h3>
                  <p className="text-gray-600 mb-1">Se unió el 15 de marzo de 2020</p>
                  <p className="text-gray-600 mb-1">245,678 vistas</p>
                  <p className="text-gray-600 mb-1">{channelData.subscribers}</p>
                  <p className="text-gray-600">{channelData.videos}</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Enlaces</h3>
                  <a href="#" className="text-blue-600 block mb-1">Website: mikuandina.net.pe</a>
                  <a href="#" className="text-blue-600 block mb-1">Instagram: @mikuandina</a>
                  <a href="#" className="text-blue-600 block mb-1">Twitter: @mikuandina</a>
                  <a href="#" className="text-blue-600 block">Facebook: Miku Andina Oficial</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MikuAndina;