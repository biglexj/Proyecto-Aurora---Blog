import React from "react";
import { Link } from "react-router-dom";
import logo from "/assets/Marca/@biglexj/Logo.jpg";
import SocialLinks from '../Social-Links/SocialLinks';
import Carousel from "./carousel/carousel"
import Popipoo from "./popipoo/popipoo"

const Home = () => {
  return (
    <main className="min-h-screen text-primary-white">
      <div className="max-w-7xl mx-auto min-h-screen p-0">
        <header className="rounded-b-2xl max-w-7xl mx-auto bg-green-creativity-300 text-[#333333] p-0">
          <div className="h-18 container mx-auto flex items-center justify-between px-4">
            {/* Logo */}
            <div className="logo flex items-center">
              <img src={logo} alt="Logo" id="logo-bar" className="rounded-full h-12 w-auto transition-transform duration-300 hover:rotate-360" />
            </div>

            {/* Título */}
            <h1 id='title' className="text-2xl font-bold">Biglex J Company</h1>

            {/* Navegación */}
            <nav className="flex space-x-4">
              <Link to="/" className="rounded-2xl bg-green-creativity-400 px-4 py-2 font-semibold text-dark hover:bg-pink-panther-400 hover:text-white">Inicio</Link>
              <Link to="/bj-producciones" className="rounded-2xl bg-green-creativity-400 px-4 py-2 font-semibold text-dark hover:bg-pink-panther-400 hover:text-white">
                BJ Producciones
              </Link>
              <Link to="/biglex-dev" className="rounded-2xl bg-green-creativity-400 px-4 py-2 font-semibold text-dark hover:bg-pink-panther-400 hover:text-white">
                Desarrollo
              </Link>
              <Link to="/services" className="rounded-2xl bg-green-creativity-400 px-4 py-2 font-semibold text-dark hover:bg-pink-panther-400 hover:text-white">
                Servicios
              </Link>
            </nav>
          </div>
        </header>

        <section className="h-125 mt-6 flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto p-6 bg-pink-panther-300 rounded-2xl shadow-md gap-x-4">
          {/* Contenido de la izquierda */}
          <div className="p-4 w-3/5 text-center md:text-left flex-col">
            <h2 className="text-5xl mb-6 font-bold text-center text-gray-800">¿Quiénes somos?</h2>
            <p className="mb-10 text-center font-medium text-dark text-xl">
              Biglex J Company se integra solo de una persona "Biglex J". Esta es mi web desarrollada con el objetivo de darme a conocer.
            </p>

            {/* Botones*/}
            <div className="flex justify-center">
              <Link to="/register" className="mr-8 text-xl bg-pink-panther-500 text-white px-6 py-2 rounded-xl font-semibold hover:bg-pink-panther-600 transition">
                Registrarse
              </Link>
              <Link to="/login" className="ml-8 text-xl bg-green-creativity-500 text-white px-6 py-2 rounded-xl font-semibold hover:bg-green-creativity-600 transition">
                Iniciar Sesión
              </Link>
            </div>
          </div>

          {/* Imagen del Banner */}
          <div className="w-2/5 flex justify-center">
            <img src="/assets/img/Lumi N0va 2.png" alt="Perfil" id="banner-img-1" className="w-56 md:w-80 rounded-4xl shadow-lg hover:scale-105 transition-transform" />
          </div>
        </section>

        {/* Sección de Proyectos con Carrusel */}
        <Carousel/>
        {/* Sección de Desarrollo Web */}

        <Popipoo/>

        <section className="h-125 mt-6 flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto p-6 bg-coral-brand-300 rounded-2xl shadow-md gap-x-4">
          <div className="w-2/5 flex justify-center">
            <img src="/assets/img/yotsuba_nakano.png" alt="Perfil" className="w-56 md:w-60 rounded-4xl hover:scale-105 transition-transform"/>
          </div>
          <div className="p-4 w-3/5 text-center">
            <h2 className="text-4xl mb-6 font-bold">Desarrollo Web & Diseño Creativo</h2>
            <p className="text-xl text-gray-700 mb-6">
              Transformando ideas en experiencias digitales. Especializado en desarrollo frontend, diseño de interfaces intuitivas y soluciones web innovadoras que combinan funcionalidad y estética.
            </p>
            <Link to="/template" 
                  className="inline-block px-6 py-2 bg-coral-brand-500 text-white rounded-xl font-semibold hover:bg-coral-brand-600 transition">
                  Ver Template
              </Link>
          </div>
        </section>

        {/* Sección de Multimedia */}
        <section className="h-125 mt-6 flex flex-col-reverse md:flex-row-reverse items-center justify-between max-w-7xl mx-auto p-6 bg-violet-brand-900 rounded-2xl shadow-md gap-x-4">
          <div className="w-2/5 flex justify-center">
            <img src="/assets/img/el-chambeador.jpg" alt="IMG" className="w-56 md:w-80 rounded-4xl shadow-lg hover:scale-105 transition-transform"/>
          </div>
          <div className="p-4 w-3/5 text-center">
            <h2 className="text-4xl text-white mb-6 font-bold">Multimedia & Producción Creativa</h2>
            <p className="text-xl text-white">
              Creando contenido visual impactante. Dominio de herramientas de diseño y edición para dar vida a proyectos que cuentan historias, desde el desarrollo de interfaces hasta la edición de video profesional.
            </p>
          </div>
        </section>

        <SocialLinks />
        
        {/* Sección de Servicios */}
        <footer className="mt-6 p-8 bg-blue-brand-200 rounded-t-2xl">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
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