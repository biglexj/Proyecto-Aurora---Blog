import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '/Marca/@biglexj/biglexj.svg';

const VideoCard = ({ title, channel, views, timestamp, thumbnail, duration }) => (
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

const TemplatePerfil = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [channels, setChannels] = useState([]);
  const [channelData, setChannelData] = useState({
    name: "Biglex J",
    handle: "@biglexj",
    subscribers: "574 suscriptores",
    videos: "67 videos",
    description: "¡🌟 👋 Bienvenido/a, donde la creatividad y el descubrimiento se unen con el anime! 🌸 ✨",
    links: "biglexj.net.pe y 6 vínculos más",
    banner: "/assets/channel-banner.jpg",
    avatar: "/Marca/@biglexj/biglexj.jpg"
  });
  
  // Navigation tabs for channel page
  const channelTabs = [
    "Principal", "Videos", "Shorts", "En vivo", "Podcasts", "Playlists", "Publicaciones"
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
            <button className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center">
              B
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
            
            {/* Other sidebar items */}
            {/* ... existing sidebar code ... */}
            
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
            <div className="mt-4 md:mt-0 md:ml-auto flex space-x-2">
              <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
                Personalizar canal
              </button>
              <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
                Administrar videos
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
              <button className="px-4 py-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Featured Video */}
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-2/3">
                <div className="relative">
                  <img 
                    src="/assets/featured-video.jpg" 
                    alt="Featured Video" 
                    className="w-full rounded-xl object-cover aspect-video"
                  />
                  <span className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 rounded">
                    10:47
                  </span>
                </div>
                <h2 className="text-lg font-medium mt-2">¿Qué es amor? - Especial, 14 de febrero</h2>
                <p className="text-gray-500 text-sm">414 vistas • hace 1 mes</p>
              </div>
              <div className="md:w-1/3">
                <h3 className="font-medium mb-4">Bienvenidos a https://www.youtube.com/@biglexj explora al mundo de la creatividad y el descubrimiento; desde animes, diseño gráfico, música, VTuber, IA, videojuegos y más. Desde tutoriales hasta gameplays emocionantes, únete a nuestra comunidad para inspirarte y disfrutar de contenido variado.</h3>
                <p className="text-sm">Únete a nuestra comunidad y déjate inspirar 🌸 🎮 🎵...</p>
                <button className="text-blue-600 text-sm font-medium mt-1">MÁS INFORMACIÓN</button>
              </div>
            </div>
          </div>
          
          {/* Para ti section */}
          <div className="p-6">
            <h2 className="text-xl font-medium mb-4">Para ti</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <VideoCard 
                title="Biglex J presenta: 'Night Dancer' de Imase - Cover"
                views="1.2K views"
                timestamp="2 weeks ago"
                thumbnail="/assets/thumbnail-1.jpg"
                duration="3:59"
              />
              <VideoCard 
                title="Hu Tao Voice AI"
                views="3.4K views"
                timestamp="1 month ago"
                thumbnail="/assets/thumbnail-2.jpg"
                duration="4:02"
              />
              <VideoCard 
                title="Sueño machacón jiji 🎹 😊 😛"
                views="856 views"
                timestamp="3 weeks ago"
                thumbnail="/assets/thumbnail-3.jpg"
                duration="4:18"
              />
              <VideoCard 
                title="Honey PIE - Meme - Hayasaka"
                views="2.1K views"
                timestamp="2 months ago"
                thumbnail="/assets/thumbnail-4.jpg"
                duration="0:45"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TemplatePerfil;