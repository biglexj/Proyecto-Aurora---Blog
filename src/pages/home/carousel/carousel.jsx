import React, { useState, useEffect, useCallback } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectsData, setProjectsData] = useState([]);
  const [itemsPerView, setItemsPerView] = useState(3);
  
  useEffect(() => {
    fetch('/data/carousel.json')
      .then(response => response.json())
      .then(data => setProjectsData(data))
      .catch(error => console.error('Error loading projects:', error));
  }, []);

  // Ajustar elementos por vista según el ancho de la pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize(); // Ejecutar al inicio
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalProjects = projectsData.length;
  const totalGroups = Math.ceil(totalProjects / itemsPerView);

  const getVisibleProjects = useCallback(() => {
    const start = currentIndex * itemsPerView;
    const end = start + itemsPerView;
    const visibleItems = [...projectsData.slice(start, end)];
    
    if (visibleItems.length < itemsPerView) {
      const remaining = itemsPerView - visibleItems.length;
      visibleItems.push(...projectsData.slice(0, remaining));
    }
    
    return visibleItems;
  }, [currentIndex, itemsPerView, projectsData]);

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
    <section className="h-auto mt-6 flex flex-col max-w-7xl mx-auto p-4 md:p-6 bg-violet-brand-300 rounded-2xl shadow-md">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-4 md:mb-8">Proyectos en los que estoy trabajando</h1>
      <div className="relative flex items-center">
        <button 
          onClick={prevSlide} 
          className="carousel-nav-btn prev absolute left-0 z-10 bg-violet-brand-500 text-white p-2 md:p-4 rounded-l-xl hover:bg-violet-brand-600 transition-colors"
          aria-label="Anterior proyecto"
        >
          &lt;
        </button>
        <div className="flex-1 overflow-hidden px-8 md:px-12">
          <div className="flex transition-transform duration-500 ease-in-out">
            <div className="flex gap-2 md:gap-4 w-full">
              {getVisibleProjects().map((project, index) => (
                <div 
                  key={`${currentIndex}-${index}`} 
                  className={`flex-none bg-white p-3 md:p-4 rounded-lg shadow-md ${
                    itemsPerView === 1 
                      ? 'w-full' 
                      : itemsPerView === 2 
                        ? 'w-[calc(50%-0.5rem)]' 
                        : 'w-[calc(33.333%-1rem)]'
                  }`}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-32 md:h-48 object-cover rounded-lg"
                  />
                  <h2 className="text-lg md:text-xl font-bold mt-2 text-gray-800 line-clamp-1">{project.title}</h2>
                  <p className="text-sm md:text-base text-gray-600 mb-2 line-clamp-2">{project.description}</p>
                  <div className="flex justify-center">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white text-center hover:underline text-sm md:text-base pt-1 pb-1 md:pt-2 md:pb-2 px-3 md:px-4 rounded-lg bg-pink-panther-500 hover:bg-pink-panther-600 transition-colors"
                    >
                      Ver
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button 
          onClick={nextSlide} 
          className="carousel-nav-btn next absolute right-0 z-10 bg-violet-brand-500 text-white p-2 md:p-4 rounded-r-xl hover:bg-violet-brand-600 transition-colors"
          aria-label="Siguiente proyecto"
        >
          &gt;
        </button>
      </div>
      <div className="carousel-dots flex justify-center space-x-2 mt-4">
        {Array.from({ length: totalGroups }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
              index === currentIndex 
                ? 'bg-white' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Ir a grupo ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;