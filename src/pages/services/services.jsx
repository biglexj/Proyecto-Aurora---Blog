import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/assets/Marca/@biglexj/Logo.jpg';
import VideoEditing from './components/VideoEditing';
import GraphicDesign from './components/GraphicDesign';
import KaraokeTracks from './components/KaraokeTracks';

const Services = () => {
  return (
    <main className='min-h-screen text-primary-white'>
      <header className="rounded-b-2xl h-18 max-w-7xl bg-green-creativity-300 container mx-auto flex items-center justify-between px-4">
        <div className="h-18 container mx-auto flex items-center justify-between px-4">
          <div className="logo flex items-center">
            <img src={logo} alt="Logo" id="logo-bar" className="rounded-full h-12 w-auto transition-transform duration-300 hover:rotate-360" />
          </div>
          <h1 id='title' className="text-2xl font-bold">Biglex J Producciones</h1>
          <nav className="flex space-x-4">
            <Link to="/" className="rounded-2xl bg-green-creativity-400 px-4 py-2 font-semibold text-dark hover:bg-pink-panther-400 hover:text-white">Inicio</Link>
            <Link to="/biglex-dev" className="rounded-2xl bg-green-creativity-400 px-4 py-2 font-semibold text-dark hover:bg-pink-panther-400 hover:text-white">Desarrollo</Link>
            <Link to="/bj-producciones" className="rounded-2xl bg-green-creativity-400 px-4 py-2 font-semibold text-dark hover:bg-pink-panther-400 hover:text-white">BJ Producciones</Link>
          </nav>
        </div>
      </header>
      <section className="h-125 mt-6 flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto p-6 bg-pink-panther-300 rounded-2xl shadow-md gap-x-4">
        <div className="w-3/5 text-center md:text-left flex-col">
          <h2 className="text-5xl mb-6 font-bold text-center text-gray-800">
            Edición, Diseño y Pistas en un Solo Lugar
          </h2>
          <p className="mb-10 text-center font-medium text-dark text-xl">
          Biglex J servicios Ofrecemos edición de video y fotografía, diseño gráfico profesional y desarrollo web para proyectos únicos y personalizados. Transformamos tus ideas en realidad y llevamos tu marca al siguiente nivel. ¡Destaca con estilo y creatividad!
          </p> 
          <div className="flex justify-center">
            <a href="https://www.youtube.com/@biglexj" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xl bg-pink-panther-500 text-white px-6 py-2 rounded-xl font-semibold hover:bg-pink-panther-600 transition">
              Suscríbete
            </a>
          </div>
        </div>

        <div className="w-2/5 flex justify-center">
            <img src="/assets/Marca/biglexdev/Logo 1.0.jpg" alt="Perfil" className="w-56 md:w-80 rounded-4xl shadow-lg hover:scale-105 transition-transform" />
          </div>
      </section>

      <section className="container-s">
        <VideoEditing />
        <GraphicDesign />
        <KaraokeTracks />
      </section>
    </main>
  );
};

export default Services;