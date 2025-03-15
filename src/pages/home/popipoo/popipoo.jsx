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
      <h2 className="text-2xl md:text-4xl font-kefa font-bold text-center mb-4 md:mb-8">Mis Canales</h2>

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
              <div className="bg-white p-3 md:p-6 rounded-lg shadow-md w-full">
                <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-4 mb-3 md:mb-4">
                  <img 
                    src={channel.channel.icon} 
                    alt={channel.channel.name}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full"
                  />
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg md:text-xl font-bold">{channel.channel.name}</h3>
                    <p className="text-sm md:text-base text-gray-600">{channel.channel.subscribers} suscriptores</p>
                  </div>
                </div>
                
                <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4 line-clamp-3">{channel.description}</p>
                
                <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                  {channel.channel.content.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="bg-pink-panther-400 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="text-center sm:text-left">
                  <a 
                    href={channel.channel.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-pink-panther-500 text-white px-4 md:px-6 py-1 md:py-2 rounded-lg hover:bg-pink-panther-600 transition-colors text-sm md:text-base"
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