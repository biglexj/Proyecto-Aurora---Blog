import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/Marca/@biglexj/biglexj.svg';
import CreteWeb from './components/CreteWeb';
import VideoEditing from './components/VideoEditing';
import GraphicDesign from './components/GraphicDesign';
import KaraokeTracks from './components/KaraokeTracks';

const Services = () => {
  return (
    <main className='min-h-screen text-primary-white'>
      <header className="rounded-b-2xl max-w-7xl mx-auto bg-green-creativity-300 text-[#333333] p-0">
        <div className="h-auto py-3 container mx-auto flex flex-col md:flex-row md:h-18 items-center justify-between px-4">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="logo flex items-center mr-3">
              <img src={logo} alt="Logo" id="logo-bar" className="bg-white rounded-full h-10 w-auto md:h-12 transition-transform duration-300 hover:rotate-360" />
            </div>
            <h1 id='title' className="text-xl md:text-2xl font-bold">Biglex J Servicios</h1>
          </div>
          <nav className="flex flex-wrap justify-center gap-2 md:space-x-4">
            <Link to="/" className="rounded-2xl bg-green-creativity-400 px-3 py-1 md:px-4 md:py-2 font-semibold text-dark hover:bg-pink-panther-400 hover:text-white text-sm md:text-base">Inicio</Link>
            <Link to="/biglex-dev" className="rounded-2xl bg-green-creativity-400 px-3 py-1 md:px-4 md:py-2 font-semibold text-dark hover:bg-pink-panther-400 hover:text-white text-sm md:text-base">Desarrollo</Link>
            <Link to="/bj-producciones" className="rounded-2xl bg-green-creativity-400 px-3 py-1 md:px-4 md:py-2 font-semibold text-dark hover:bg-pink-panther-400 hover:text-white text-sm md:text-base">BJ Producciones</Link>
          </nav>
        </div>
      </header>
      
      <section className="h-auto md:h-125 mt-6 max-w-7xl mx-auto p-4 md:p-6 bg-pink-panther-300 rounded-2xl shadow-md">
        <div className="flex flex-col md:flex-row items-center justify-between h-full">
          <div className="p-8 w-full md:w-3/5 order-2 md:order-1">
            <h2 className="text-3xl md:text-5xl mb-4 md:mb-6 font-bold text-center text-gray-800">
              Edición, Diseño y Pistas en un Solo Lugar
            </h2>
            <p className="mb-6 md:mb-10 text-center font-medium text-dark text-lg md:text-xl">
            Biglex J servicios Ofrecemos edición de video y fotografía, diseño gráfico profesional y desarrollo web para proyectos únicos y personalizados. Transformamos tus ideas en realidad y llevamos tu marca al siguiente nivel. ¡Destaca con estilo y creatividad!
            </p> 
            <div className="flex justify-center">
              <a href="https://www.youtube.com/@biglexj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg md:text-xl bg-pink-panther-500 text-white px-4 md:px-6 py-2 rounded-xl font-semibold hover:bg-pink-panther-600 transition">
                Suscríbete
              </a>
            </div>
          </div>

          <div className="w-full md:w-2/5 flex justify-center order-1 md:order-2 mb-6 md:mb-0">
            <img src="/Marca/@biglexj/biglexj.svg" alt="Perfil" className="bg-white w-48 sm:w-56 md:w-64 lg:w-72 rounded-4xl shadow-lg hover:scale-105 transition-transform mx-auto" />
          </div>
        </div>
      </section>

      <section className="container-s max-w-7xl mx-auto">
        <CreteWeb />
        <VideoEditing />
        <GraphicDesign />
        <KaraokeTracks />
      </section>
    </main>
  );
};

export default Services;