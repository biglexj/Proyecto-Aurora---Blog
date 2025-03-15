import React, { useState, useEffect } from 'react';
import './popipoo.css';

const Popipoo = () => {
  const [channelsData, setChannelsData] = useState([]);
  const totalChannels = channelsData.length;

  useEffect(() => {
    fetch('/data/channel-yt.json')
      .then(response => response.json())
      .then(data => setChannelsData(data))
      .catch(error => console.error('Error loading channels:', error));
  }, []);

  const handleClick = (e) => {
    const slider = e.currentTarget.closest('.slider');
    slider.classList.toggle('paused');
  };
  
  return (
    <section className="h-auto p-4 md:p-10 mt-6 max-w-7xl mx-auto rounded-2xl shadow-md bg-green-creativity-300">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-kefa font-bold text-center mb-4 md:mb-8">Mis Canales</h2>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3 md:mb-5">Explora Mis Canales de YouTube</h2>
      <p className="text-base md:text-lg lg:text-xl text-center max-w-3xl mx-auto">
          Descubre contenido variado en mis diferentes canales. Haz clic en las tarjetas para pausar la rotación y explorar cada canal.
      </p>

      <div className="banner max-w-7xl mx-auto rounded-2xl">      
        <div className="slider">
          {channelsData.map((channel, index) => (
            <div 
              key={channel.video}
              className="item"
              onClick={handleClick}
              style={{
                '--position': index + 1,
                '--quantity': totalChannels
              }}
            >
              <div className="bg-white p-3 md:p-6 lg:p-7 rounded-lg shadow-md w-full">
                <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-4 lg:gap-5 mb-3 md:mb-4 lg:mb-5">
                  <img 
                    src={channel.channel.icon} 
                    alt={channel.channel.name}
                    className="w-12 h-12 md:w-16 md:h-16 lg:w-18 lg:h-18 rounded-full"
                  />
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold">{channel.channel.name}</h3>
                    <p className="text-sm md:text-base lg:text-lg text-gray-600">{channel.channel.subscribers} suscriptores</p>
                  </div>
                </div>
                
                <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-3 md:mb-4 lg:mb-5 line-clamp-3">{channel.description}</p>
                
                <div className="flex flex-wrap justify-center gap-1 md:gap-2 lg:gap-3">
                  {channel.channel.content.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="bg-pink-panther-400 text-white px-2 md:px-3 lg:px-4 py-1 rounded-full text-xs md:text-sm lg:text-base"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="text-center">
                  <a 
                    href={channel.channel.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl sm:text-xs md:text-xl lg:text-2xl font-bold mt-3 sm:mt-1 md:mt-2 lg:mt-3 px-3 py-1 sm:px-2 sm:py-1 md:px-4 md:py-2 lg:px-6 inline-block bg-pink-panther-500 text-white rounded-lg hover:bg-pink-panther-600 transition-colors"
                  >
                    Visitar Canal
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popipoo;