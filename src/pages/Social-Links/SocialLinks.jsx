import React from 'react';
import youtube from '/logos/YouTube/youtube.svg';
import tiktok from '/logos/TikTok/tiktok.svg';
import facebook from '/logos/Facebook/facebook.svg';
import instagram from '/logos/Instagram/instagram.svg';

const SocialLinks = () => {
  return (
    <footer className="bg-green-creativity-500 mt-6 py-6 md:py-8 rounded-2xl">
      <h3 className="text-2xl md:text-4xl text-center mb-6 md:mb-8">Sígueme en mis redes sociales</h3>
      <div className="flex justify-center items-center">
        <a 
          href="https://www.youtube.com/@biglexj" 
          className="mx-2.5" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img 
            src={youtube} 
            alt="YouTube" 
            className="w-10 h-10 md:w-12 md:h-12 rounded-full"
          />
        </a>
        <a 
          href="https://www.tiktok.com/@biglexj" 
          className="mx-2.5" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img 
            src={tiktok} 
            alt="TikTok" 
            className="w-10 h-10 md:w-12 md:h-12 rounded-full"
          />
        </a>
        <a 
          href="https://www.facebook.com/biglexj" 
          className="mx-2.5" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img 
            src={facebook} 
            alt="Facebook" 
            className="w-10 h-10 md:w-12 md:h-12 rounded-full"
          />
        </a>
        <a 
          href="https://www.instagram.com/biglexj" 
          className="mx-2.5" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img 
            src={instagram} 
            alt="Instagram" 
            className="w-10 h-10 md:w-12 md:h-12 rounded-full"
          />
        </a>
      </div>
    </footer>
  );
};

export default SocialLinks;