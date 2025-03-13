import React from 'react';
import channelsData from '/src/pages/home/popipoo/channel-yt.json';
import './popipoo.css';

const Popipoo = () => {
  const totalChannels = channelsData.length;

  const handleClick = (e) => {
    const slider = e.currentTarget.closest('.slider');
    slider.classList.toggle('paused');
  };
  
  return (
    <section className="h-260 p-10 mt-6 max-w-7xl mx-auto rounded-2xl shadow-md">
      <h2 className="text-4xl font-kefa font-bold text-center mb-8">Mis Canales</h2>

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
              <div className="bg-white p-6 rounded-lg shadow-md w-full">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={channel.channel.icon} 
                    alt={channel.channel.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="text-2xl font-bold">{channel.channel.name}</h3>
                    <p className="text-gray-600">{channel.channel.subscribers} suscriptores</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{channel.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {channel.channel.content.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="bg-yellow-lemon-100 text-yellow-lemon-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={channel.channel.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-lemon-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-lemon-600 transition-colors"
                >
                  Visitar Canal
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popipoo;