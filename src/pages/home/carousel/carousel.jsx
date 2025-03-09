import React, { useState, useEffect } from 'react';
import projectsData from './data.json';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalProjects = projectsData.length;
  const itemsPerView = 3;
  const totalGroups = Math.ceil(totalProjects / itemsPerView);

  const getVisibleProjects = () => {
    const start = currentIndex * itemsPerView;
    const end = start + itemsPerView;
    const visibleItems = [...projectsData.slice(start, end)];
    
    // Rellenar con elementos del principio si es necesario
    if (visibleItems.length < itemsPerView) {
      const remaining = itemsPerView - visibleItems.length;
      visibleItems.push(...projectsData.slice(0, remaining));
    }
    
    return visibleItems;
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalGroups - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalGroups - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 15000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="h-125 mt-6 flex flex-col max-w-7xl mx-auto p-6 bg-violet-brand-300 rounded-2xl shadow-md">
      <h1 className="text-4xl font-bold text-center mb-8">Proyectos en los que estoy trabajando</h1>
      <div className="relative flex items-center">
        <button onClick={prevSlide} className="carousel-nav-btn prev absolute left-0 z-10 bg-violet-brand-500 text-white p-4 rounded-l-xl hover:bg-violet-brand-600 transition-colors">
          &lt;
        </button>
        <div className="flex-1 overflow-hidden px-12">
          <div className="flex transition-transform duration-500 ease-in-out">
            <div className="flex gap-4 w-full">
              {getVisibleProjects().map((project, index) => (
                <div key={`${currentIndex}-${index}`} className="flex-none w-[calc(33.333%-1rem)] bg-white p-4 rounded-lg shadow-md">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <h2 className="text-xl font-bold mt-2 text-gray-800">{project.title}</h2>
                  <p className="text-gray-600 mb-2">{project.description}</p>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-brand-500 hover:underline"
                  >
                    Ver más
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button onClick={nextSlide} className="carousel-nav-btn next absolute right-0 z-10 bg-violet-brand-500 text-white p-4 rounded-r-xl hover:bg-violet-brand-600 transition-colors">
          &gt;
        </button>
      </div>
      <div className="carousel-dots flex justify-center space-x-2 mt-4">
        {Array.from({ length: totalGroups }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex 
                ? 'bg-white' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;