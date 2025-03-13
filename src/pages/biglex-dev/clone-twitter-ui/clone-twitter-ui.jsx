import React, { useEffect, useState } from 'react';
import html2canvas from 'html2canvas';
import logo from '/src/assets/Marca/@biglexj/Logo.jpg';

const CloneTwitterUI = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [name, setName] = useState('Biglex J');
  const [username, setUsername] = useState('@biglexdev');
  const [message, setMessage] = useState('Desarrollando ideas, creando soluciones 💻✨');
  const [hashtags, setHashtags] = useState('#Developer #WebDev #JavaScript');

  useEffect(() => {
    const date = new Date();
    setCurrentDate(getFormattedDate(date));
  }, []);

  const getFormattedDate = (date) => {
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const day = date.getDate();
    const month = date.toLocaleString('en-us', { month: 'short' });
    const year = date.getFullYear();

    const formattedHour = hour.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');

    return `${formattedHour}:${formattedMinutes} · ${day} ${month}. ${year}`;
  };

  const captureAndSave = () => {
    const tweetContainer = document.querySelector('.tweet-container');
    if (tweetContainer) {
      const editableElements = tweetContainer.querySelectorAll('input, textarea');
      // Temporarily disable contentEditable for clean capture
      editableElements.forEach(el => {
        el.style.border = 'none';
        el.style.background = 'transparent';
      });

      html2canvas(tweetContainer).then((canvas) => {
        const link = document.createElement('a');
        link.download = 'tweet.png';
        link.href = canvas.toDataURL('image/png');
        link.click();

        // Restore editable styles
        editableElements.forEach(el => {
          el.style.border = '';
          el.style.background = '';
        });
      });
    }
  };
  return (
    <main className="w-full">
      <div className="flex flex-col items-center p-5 md:p-10 rounded-2xl">
        <div className="tweet-container bg-black text-[#ced0d1] p-4 md:p-6 rounded-2xl w-full max-w-[650px] text-base h-auto">
          <div className="flex items-start">
            <img 
              src={logo} 
              alt="Logo" 
              className="w-10 h-10 rounded-full mr-3" 
            />
            <div className="flex-1">
              <div className="flex flex-col">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="font-bold bg-transparent border-none focus:outline-none focus:ring-0 text-white w-fit"
                  placeholder="Name"
                />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="text-gray-500 text-sm bg-transparent border-none focus:outline-none focus:ring-0 w-fit"
                  placeholder="@username"
                />
              </div>

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-transparent border-none focus:outline-none focus:ring-0 mt-1 text-[15px] leading-normal whitespace-pre-wrap"
                style={{ resize: 'none', overflow: 'hidden' }}
                rows={message.split('\n').length}
                placeholder="What's happening?"
              />
              <input
                type="text"
                value={hashtags}
                onChange={(e) => setHashtags(e.target.value)}
                className="w-full bg-transparent border-none focus:outline-none focus:ring-0 text-[#1d9bf0] text-[15px] whitespace-pre-wrap break-words"
                placeholder="#hashtags"
              />
              <div className="text-sm text-gray-500 mt-2">
                {currentDate}
              </div>

              <hr className="border-t border-gray-800 my-3" />

              <div className="flex items-center justify-between pr-8">
                <svg className="w-5 h-5 fill-[#71767b] hover:fill-[#1d9bf0] cursor-pointer transition-colors" viewBox="0 0 24 24">
                  <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"/>
                </svg>

                <svg className="w-5 h-5 fill-[#71767b] hover:fill-[#00ba7c] cursor-pointer transition-colors" viewBox="0 0 24 24">
                  <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"/>
                </svg>

                <svg className="w-5 h-5 fill-[#71767b] hover:fill-[#f91880] cursor-pointer transition-colors" viewBox="0 0 24 24">
                  <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"/>
                </svg>

                <button 
                  onClick={captureAndSave}
                  className="w-5 h-5 fill-[#71767b] hover:fill-[#1d9bf0] cursor-pointer transition-colors"
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CloneTwitterUI;