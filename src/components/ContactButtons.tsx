import React from 'react';

const ContactButtons: React.FC = () => {
  return (
    <div className="contact w-80">
      <h2 className="contact text-3xl font-bold text-center mb-4">Para comunicarte</h2>
      <div className='flex justify-around'>
        <a href="https://t.me/biglexrv" target="_blank" rel="noopener noreferrer" className="telegram text-2xl font-semibold p-3 rounded-2xl bg-blue-brand-500 mt-3">
          Telegram
        </a>
        <a href="https://wa.me/message/YV7YWT342AQXI1?src=qr" target="_blank" rel="noopener noreferrer" className="whatsapp text-2xl font-semibold p-3 rounded-2xl bg-green-brand-500 mt-3">
          Whatsapp
        </a>
      </div>
    </div>
  );
};

export default ContactButtons;