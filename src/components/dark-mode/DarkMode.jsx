import { useEffect } from 'react';

const DarkMode = () => {
  const handleMouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const element = document.elementFromPoint(x, y);
    
    // Obtener el color del elemento
    const computedStyle = window.getComputedStyle(element);
    const backgroundColor = computedStyle.backgroundColor || 'rgb(255, 255, 255)';
    
    const cursor = document.createElement('div');
    cursor.className = 'cursor-effect';
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
    
    // Convertir el color a una versión más clara para el gradiente
    cursor.style.background = `radial-gradient(circle, ${backgroundColor.replace('rgb', 'rgba').replace(')', ', 0.2)')} 0%, rgba(255,255,255,0) 70%)`;
    
    document.body.appendChild(cursor);
    
    setTimeout(() => {
      cursor.remove();
    }, 500);
  };

  const changeBackgroundByTime = () => {
    const hour = new Date().getHours();
    const body = document.body;

    body.classList.remove("bg-green-creativity-400", "bg-green-creativity-600");

    if (hour >= 6 && hour < 18) {
      body.classList.add("bg-green-creativity-400");
    } else {
      body.classList.add("bg-green-creativity-600");
    }
  };

  useEffect(() => {
    changeBackgroundByTime();
    const interval = setInterval(changeBackgroundByTime, 60 * 60 * 1000);
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearInterval(interval);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null;
};

export default DarkMode;