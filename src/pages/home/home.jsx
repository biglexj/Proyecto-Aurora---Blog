import React from "react";
import { Link } from "react-router-dom";
import logo from "/Marca/@biglexj/biglexj.svg";
import SocialLinks from '../Social-Links/SocialLinks';
import Carousel from "./carousel/carousel"
import Popipoo from "./popipoo/popipoo"

const Home = () => {
  return (
    <main className="min-h-screen text-primary-white">
      <div className="max-w-7xl mx-auto min-h-screen p-0">
        <header className="rounded-b-2xl max-w-7xl mx-auto bg-green-creativity-300 text-[#333333] p-0">
          <div className="h-auto py-3 container mx-auto flex flex-col md:flex-row md:h-18 items-center justify-between px-4">
            {/* Logo y Título */}
            <div className="flex items-center mb-4 md:mb-0">
              <div className="logo flex items-center mr-3">
                <img src={logo} alt="Logo" id="logo-bar" className="bg-white rounded-full h-10 w-auto md:h-12 transition-transform duration-300 hover:rotate-360" />
              </div>
              <h1 id='title' className="text-xl md:text-2xl font-bold">Biglex J Company</h1>
            </div>

            {/* Navegación */}
            <nav className="flex flex-wrap justify-center gap-2 md:space-x-4">
              <Link to="/" className="rounded-2xl bg-green-creativity-400 px-3 py-1 md:px-4 md:py-2 font-semibold text-dark hover:bg-pink-panther-400 hover:text-white text-sm md:text-base">Inicio</Link>
              <Link to="/bj-producciones" className="rounded-2xl bg-green-creativity-400 px-3 py-1 md:px-4 md:py-2 font-semibold text-dark hover:bg-pink-panther-400 hover:text-white text-sm md:text-base">
                BJ Producciones
              </Link>
              <Link to="/biglex-dev" className="rounded-2xl bg-green-creativity-400 px-3 py-1 md:px-4 md:py-2 font-semibold text-dark hover:bg-pink-panther-400 hover:text-white text-sm md:text-base">
                Desarrollo
              </Link>
              <Link to="/services" className="rounded-2xl bg-green-creativity-400 px-3 py-1 md:px-4 md:py-2 font-semibold text-dark hover:bg-pink-panther-400 hover:text-white text-sm md:text-base">
                Servicios
              </Link>
            </nav>
          </div>
        </header>

        <section className="h-auto md:h-125 mt-6 max-w-7xl mx-auto p-4 md:p-6 bg-pink-panther-300 rounded-2xl shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between h-full">
            {/* Contenido de la izquierda */}
            <div className="p-8 w-full md:w-3/5 order-1 md:order-1">
              <h2 className="text-3xl md:text-5xl mb-4 md:mb-6 font-bold text-center text-gray-800">¿Quiénes somos?</h2>
              <p className="mb-6 md:mb-10 text-center font-medium text-dark text-lg md:text-xl">
                Biglex J Company se integra solo de una persona "Biglex J". Esta es mi web desarrollada con el objetivo de darme a conocer.
              </p>

              {/* Botones*/}
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/register" className="text-center text-lg md:text-xl bg-pink-panther-500 text-white px-4 md:px-6 py-2 rounded-xl font-semibold hover:bg-pink-panther-600 transition w-full sm:w-auto">
                  Registrarse
                </Link>
                <Link to="/login" className="text-center text-lg md:text-xl bg-green-creativity-500 text-white px-4 md:px-6 py-2 rounded-xl font-semibold hover:bg-green-creativity-600 transition w-full sm:w-auto">
                  Iniciar Sesión
                </Link>
              </div>
            </div>

            {/* Imagen del Banner */}
            <div className="w-full md:w-2/5 flex justify-center order-2 md:order-2 mb-6 md:mb-0">
              <img src="/img/Lumi_N0va.png" alt="Perfil" id="banner-img-1" className="w-48 sm:w-56 md:w-64 lg:w-72 rounded-4xl shadow-lg hover:scale-105 transition-transform mx-auto" />
            </div>
          </div>
        </section>

        {/* Sección de Proyectos con Carrusel */}
        <Carousel/>
        {/* Sección de Desarrollo Web */}

        <Popipoo/>

        <section className="h-auto mt-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto p-4 md:p-6 bg-coral-brand-300 rounded-2xl shadow-md gap-4 md:gap-x-4">
          <div className="w-full md:w-2/5 flex justify-center mb-4 md:mb-0">
            <img src="/img/yotsuba_nakano.png" alt="Perfil" className="w-48 md:w-56 lg:w-60 rounded-4xl hover:scale-105 transition-transform"/>
          </div>
          <div className="p-2 md:p-4 w-full md:w-3/5 text-center">
            <h2 className="text-3xl md:text-4xl mb-4 md:mb-6 font-bold">Desarrollo Web & Diseño Creativo</h2>
            <p className="text-lg md:text-xl text-gray-700 mb-4 md:mb-6">
              Transformando ideas en experiencias digitales. Especializado en desarrollo frontend, diseño de interfaces intuitivas y soluciones web innovadoras que combinan funcionalidad y estética.
            </p>
            <Link to="/template" 
                  className="inline-block px-4 md:px-6 py-2 bg-coral-brand-500 text-white rounded-xl font-semibold hover:bg-coral-brand-600 transition">
                  Ver Template
              </Link>
          </div>
        </section>

        {/* Sección de Multimedia */}
        <section className="h-auto mt-6 flex flex-col md:flex-row-reverse items-center justify-between max-w-7xl mx-auto p-4 md:p-6 bg-violet-brand-900 rounded-2xl shadow-md gap-4 md:gap-x-4">
          <div className="w-full md:w-2/5 flex justify-center mb-4 md:mb-0">
            <img src="/img/el-chambeador.jpg" alt="IMG" className="w-48 md:w-56 lg:w-80 rounded-4xl shadow-lg hover:scale-105 transition-transform"/>
          </div>
          <div className="p-2 md:p-4 w-full md:w-3/5 text-center">
            <h2 className="text-3xl md:text-4xl text-white mb-4 md:mb-6 font-bold">Multimedia & Producción Creativa</h2>
            <p className="text-lg md:text-xl text-white">
              Creando contenido visual impactante. Dominio de herramientas de diseño y edición para dar vida a proyectos que cuentan historias, desde el desarrollo de interfaces hasta la edición de video profesional.
            </p>
          </div>
        </section>

        <SocialLinks />
        
        {/* Sección de Servicios */}
        <footer className="mt-6 p-4 md:p-8 bg-blue-brand-200 rounded-t-2xl">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Términos y Condiciones */}
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Términos y Condiciones</h2>
              <Link 
                to="/terminos-y-condiciones"
                className="inline-block px-6 py-2 bg-blue-brand-500 text-white rounded-xl hover:bg-blue-brand-600 transition"
              >
                Más detalles
              </Link>
            </div>

            {/* Soporte Técnico */}
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Soporte Técnico</h2>
              <p className="mb-4">Para cualquier ayuda</p>
              <div className="space-x-4">
                <a href="https://github.com/biglexj/" target="_blank" 
                   className="inline-block px-6 py-2 bg-gray-800 text-white rounded-xl hover:bg-gray-900 transition">
                   GitHub
                </a>
                <a href="mailto:biglex.rv@gmail.com" target="_blank"
                   className="inline-block px-6 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition">
                   Gmail
                </a>
              </div>
            </div>

            {/* Contacto */}
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Contacto</h2>
              <p className="mb-4">Para cualquier contrato</p>
              <div className="space-x-4">
                <a href="https://t.me/biglexrv" target="_blank"
                   className="inline-block px-6 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition">
                   Telegram
                </a>
                <a href="https://wa.me/message/YV7YWT342AQXI1?src=qr"
                   className="inline-block px-6 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition">
                   WhatsApp
                </a>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </main>
  );
};

export default Home;