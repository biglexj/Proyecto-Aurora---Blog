import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '/Marca/@biglexj/biglexj.svg';

const BiglexJProducciones = () => {
  const [channelData, setChannelData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch channel data from the JSON file
    fetch('/data/channel-pages-yt.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Find the channel with ID 'biglexdev'
        const channel = data.find(item => item.channelId === 'biglexpe');
        if (channel) {
          setChannelData(channel);
        } else {
          throw new Error('Channel not found');
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching channel data:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl">Loading channel data...</p>
      </div>
    );
  }

  if (error || !channelData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-500">Error: {error || 'Channel not found'}</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="flex items-center justify-between px-4 h-14">
          <div className="flex items-center">
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
      
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-center mb-6">{channelData.title}</h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <img 
              src={channelData.channel.icon} 
              alt={channelData.channel.name} 
              className="w-32 h-32 rounded-full"
            />
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold">{channelData.channel.name}</h2>
              <p className="text-gray-600">{channelData.channel.subscribers} suscriptores</p>
              <p className="mt-2">{channelData.description}</p>
              <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
                {channelData.channel.content.map((tag, index) => (
                  <span 
                    key={index} 
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link 
              to="/"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BiglexJProducciones;