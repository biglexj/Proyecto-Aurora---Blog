import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '/Marca/@biglexj/biglexj.svg';

const VideoCard = ({ title, channel, views, timestamp, thumbnail }) => (
  <div className="flex flex-col mb-4">
    <div className="relative">
      <img 
        src={thumbnail || "/assets/placeholder-thumbnail.jpg"} 
        alt={title} 
        className="w-full rounded-xl object-cover aspect-video"
      />
      <span className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 rounded">
        10:30
      </span>
    </div>
    <div className="flex mt-2">
      <div className="w-9 h-9 rounded-full bg-gray-300 flex-shrink-0 mr-2"></div>
      <div>
        <h3 className="font-medium text-sm line-clamp-2">{title || "Video Title Goes Here - This is a placeholder for the video title"}</h3>
        <p className="text-gray-500 text-xs mt-1">{channel || "Channel Name"}</p>
        <p className="text-gray-500 text-xs">
          {views || "100K views"} • {timestamp || "3 days ago"}
        </p>
      </div>
    </div>
  </div>
);

const Template = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [channels, setChannels] = useState([]);
  
  // Sample categories for the top navigation
  const categories = [
    "Todos", "Música", "Mixes", "Hatsune Miku", "Pop japonés", 
    "Jim Parsons", "En tiempo real", "GNU/Linux", "Penny", "Script", 
    "Podcasts", "Código fuente", "Inteligencia artificial", "Cumbias"
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
        
        {/* Categories */}
        <div className="overflow-x-auto whitespace-nowrap px-4 py-2 border-b border-gray-200">
          {categories.map((category, index) => (
            <button 
              key={index} 
              className="px-3 py-1 mr-2 text-sm bg-gray-200 hover:bg-gray-300 rounded-full"
            >
              {category}
            </button>
          ))}
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
            
            {sidebarOpen && <hr className="my-2 border-gray-200" />}
            
            <Link to="/library" className="flex items-center px-4 py-2 hover:bg-gray-100">
              <svg className="w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
              </svg>
              {sidebarOpen && <span>Biblioteca</span>}
            </Link>
            <Link to="/history" className="flex items-center px-4 py-2 hover:bg-gray-100">
              <svg className="w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {sidebarOpen && <span>Historial</span>}
            </Link>
          </div>
        </aside>
        
        {/* Main content */}
        <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-56' : 'ml-20'}`}>
          <div className="p-4">
            {/* Video grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array(12).fill().map((_, i) => (
                <VideoCard 
                  key={i}
                  title={`Video ${i+1} - Este es un título de ejemplo para mostrar cómo se vería en la interfaz`}
                  channel={`Canal ${i+1}`}
                  views={`${Math.floor(Math.random() * 900) + 100}K views`}
                  timestamp={`${Math.floor(Math.random() * 30) + 1} days ago`}
                  thumbnail={`/assets/thumbnail-${(i % 5) + 1}.jpg`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Template;