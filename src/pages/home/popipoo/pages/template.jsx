import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '/Marca/@biglexj/biglexj.svg';

const Section1 = () => (
  <div className="relative h-screen w-full">
    <img 
      src="/assets/" 
      alt="Banner" 
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-50">
      <div className="max-w-7xl mx-auto h-full flex flex-col justify-center items-center text-white p-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">
          Nombre del Canal
        </h1>
        <p className="text-xl md:text-2xl text-center max-w-3xl">
          Descripción del canal y su contenido. Aquí puedes describir el tipo de contenido que produces y lo que pueden encontrar tus seguidores.
        </p>
      </div>
    </div>
  </div>
);

const Section2 = () => (
  <div className="bg-coral-brand-300 p-8 rounded-2xl shadow-md">
    <h2 className="text-4xl font-bold text-center mb-8">Videos Recientes</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="aspect-video bg-gray-200">
          {/* YouTube video embed placeholder */}
        </div>
        <div className="p-4">
          <h3 className="font-bold text-xl mb-2">Título del Video</h3>
          <p className="text-gray-600">Descripción breve del video</p>
        </div>
      </div>
    </div>
  </div>
);

const Section3 = () => (
  <div className="bg-violet-brand-900 p-8 rounded-2xl shadow-md text-white">
    <h2 className="text-4xl font-bold text-center mb-8">Comunidad</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-violet-brand-800 rounded-xl p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-violet-brand-700 mr-4"></div>
          <div>
            <h3 className="font-bold">Título del Post</h3>
            <p className="text-sm text-gray-300">Fecha de publicación</p>
          </div>
        </div>
        <p className="text-gray-100">
          Contenido del post de la comunidad. Aquí pueden ir actualizaciones,
          anuncios o interacciones con la comunidad.
        </p>
      </div>
    </div>
  </div>
);

const Template = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = [Section1, Section2, Section3];

  useEffect(() => {
    const handleScroll = (event) => {
      if (event.deltaY > 0 && currentSection < sections.length - 1) {
        setCurrentSection(prev => prev + 1);
      } else if (event.deltaY < 0 && currentSection > 0) {
        setCurrentSection(prev => prev - 1);
      }
    };

    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, [currentSection, sections.length]);

  return (
    <main className="min-h-screen text-primary-white">
      <div className="max-w-7xl mx-auto min-h-screen p-0">
        <header className="rounded-b-2xl max-w-7xl mx-auto bg-green-creativity-300 text-[#333333] p-0">
          <div className="h-16 container mx-auto flex items-center justify-between px-4 py-2">
            <div className="logo flex items-center">
              <img src={logo} alt="Logo" className="h-10 w-10 rounded-full transition-transform duration-300 hover:rotate-360" />
            </div>
            <h1 className="text-2xl font-bold">Biglex J</h1>
            <nav className="flex space-x-4">
              <Link to="/" className="rounded-2xl bg-green-creativity-400 px-4 py-2 font-semibold text-dark hover:bg-pink-panther-400 hover:text-white">
                Inicio
              </Link>
            </nav>
          </div>
        </header>

        <div className="relative transition-transform duration-700 ease-in-out" 
             style={{ transform: `translateY(-${currentSection * 100}vh)` }}>
          {sections.map((Section, index) => (
            <section key={index} className="h-screen w-full flex items-center justify-center p-6">
              <div className="max-w-7xl w-full mx-auto">
                <Section />
              </div>
            </section>
          ))}
        </div>

        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSection(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSection 
                  ? 'bg-pink-panther-500' 
                  : 'bg-gray-300 hover:bg-pink-panther-300'
              }`}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Template;