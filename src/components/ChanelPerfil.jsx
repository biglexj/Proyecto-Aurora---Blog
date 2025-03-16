import React, { useState, useEffect } from 'react';
import youtube from '/logos/YouTube/youtube.svg';

const ChanelPerfil = () => {
  const [channelsData, setChannelsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/channel-pages-yt.json')
      .then(response => response.json())
      .then(data => {
        setChannelsData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading channel data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-4">Loading channels...</div>;
  }

  return (
    <div className=" mt-6 py-6 md:py-8 rounded-2xl">
      <div className="flex justify-center items-center flex-wrap gap-4">
        {channelsData.map((channel) => (
          <a 
            key={channel.channelId}
            href={channel.channel.link}
            className="mx-2.5 transition-transform hover:scale-110 flex flex-col items-center" 
            target="_blank" 
            rel="noopener noreferrer"
            title={channel.channel.name}
          >
            <div className="relative">
              <img 
                src={channel.channel.icon} 
                alt={channel.channel.name} 
                className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-white"
              />
              <div className="absolute -bottom-1 -right-1 bg-white p-0.5 rounded-full">
                <img 
                  src={youtube} 
                  alt="YouTube" 
                  className="w-5 h-5 md:w-6 md:h-6"
                />
              </div>
            </div>
            <span className="text-dark text-xs md:text-sm mt-1 max-w-[80px] text-center truncate">
              {channel.channel.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ChanelPerfil;