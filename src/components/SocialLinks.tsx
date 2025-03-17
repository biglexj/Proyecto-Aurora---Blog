import React from 'react';
// Usar importaciones con type assertion
const youtube = '/logos/YouTube/youtube.svg';
const tiktok = '/logos/TikTok/tiktokwhite.svg';
const facebook = '/logos/Facebook/facebook.svg';
const instagram = '/logos/Instagram/instagram.svg';
const discord = '/logos/Discord/discordwhite.svg';

const SocialLinks: React.FC = () => {
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
            className="bg-white p-1.5 w-10 h-10 md:w-12 md:h-12 rounded-full"
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
            className="bg-black p-1.5 w-10 h-10 md:w-12 md:h-12 rounded-full"
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

        <a
          href="https://discord.gg/f5crHcpHKW"
          className="mx-2.5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={discord}
            alt="Discord"
            className="bg-[#5865F2] p-1.5 w-10 h-10 md:w-12 md:h-12 rounded-full"
          />
        </a>

      </div>
    </footer>
  );
};

export default SocialLinks;