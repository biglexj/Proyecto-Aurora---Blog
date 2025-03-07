import './App.css'

import React from "react";
import logo from "./assets/Marca/Logo.jpg"; // Importamos la imagen correctamente

const Header = () => {
  return (
    <div className="bg-green-creativity-400 min-h-screen text-primary-white">
        <div className="max-w-7xl mx-auto min-h-screen p-0">
          <header className="rounded-b-2xl rounded-br-2xl max-w-7xl mx-auto bg-green-creativity-300 text-[#333333] p-0">
            <div className="h-18 container mx-auto flex items-center justify-between px-4">
              {/* Logo */}
              <div className="logo flex items-center">
                <img src={logo} alt="Logo" id="logo-bar" className="rounded-full h-12 w-auto transition-transform duration-300 hover:rotate-360" />
              </div>

              {/* Título */}
              <h1 className="text-2xl font-bold">Biglex J Company</h1>

              {/* Navegación */}
              <nav className="flex space-x-4">
                <a href="index.html" className="rounded-2xl bg-green-creativity-400 px-4 py-2 font-semibold text-dark hover:bg-pink-panther-400 hover:text-white">Inicio</a>
                <a href="bj-producciones/bj-producciones.html" className="rounded-2xl bg-green-creativity-400 px-4 py-2 font-semibold text-dark hover:bg-pink-panther-400 hover:text-white">
                  BJ Producciones
                </a>
                <a href="biglexdev/biglexdev.html" className="rounded-2xl bg-green-creativity-400 px-4 py-2 font-semibold text-dark hover:bg-pink-panther-400 hover:text-white">
                  Desarrollo
                </a>
                <a href="services/services.html" className="rounded-2xl bg-green-creativity-400 px-4 py-2 font-semibold text-dark hover:bg-pink-panther-400 hover:text-white">
                  Servicios
                </a>
              </nav>
            </div>
        </header>

        <section className="h-125 mt-6 flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto p-6 bg-pink-panther-300 rounded-2xl shadow-md gap-x-4">
          {/* Contenido de la izquierda */}
          <div className="w-3/5 text-center md:text-left flex-col">
            <h2 className="text-5xl mb-6 font-bold text-center text-gray-800">¿Quiénes somos?</h2>
            <p className="mb-10 text-center font-medium text-dark text-xl">
              Biglex J Company se integra solo de una persona "Biglex J". Esta es mi web desarrollada con el objetivo de darme a conocer.
            </p>

            {/* Botones*/}
            <div className="flex justify-center">
              <a href="login/register.html" className="mr-8 text-xl bg-pink-panther-500 text-white px-6 py-2 rounded-xl font-semibold hover:bg-pink-panther-600 transition">
                Registrarse
              </a>
              <a href="login/login.html" className="ml-8 text-xl bg-green-creativity-500 text-white px-6 py-2 rounded-xl font-semibold hover:bg-green-creativity-600 transition">
                Iniciar Sesión
              </a>
            </div>
          </div>

          {/* Imagen del Banner */}
          <div className="w-2/5 flex justify-center">
            <img src="src/assets/img/Lumi N0va 2.png" alt="Perfil" id="banner-img-1" className="w-56 md:w-80 rounded-4xl shadow-lg hover:scale-105 transition-transform" />
          </div>
        </section>

        {/* Sección de Proyectos con Carrusel */}
        <section className="h-125 mt-6 flex flex-col max-w-7xl mx-auto p-6 bg-violet-brand-300 rounded-2xl shadow-md">
          <h1 className="text-4xl font-bold text-center mb-8">Proyectos en los que estoy trabajando</h1>
          <div className="relative flex items-center">
            <button className="carousel-nav-btn prev absolute left-0 z-10 bg-violet-brand-500 text-white p-4 rounded-l-xl">&lt;</button>
            <div className="flex space-x-4 overflow-x-auto scroll-smooth px-12">
              {/* Ejemplo de una tarjeta de proyecto - repetir según necesidad */}
              <div className="flex-none w-64 bg-white p-4 rounded-lg shadow-md">
                <img src="link" alt="Imagen" className="w-full h-48 object-cover rounded-lg"/>
                <h2 className="text-xl font-bold mt-2">Title</h2>
                <a href="link" className="text-blue-brand-500 hover:underline">description de json</a>
              </div>
              {/* Más tarjetas aquí */}
            </div>
            <button className="carousel-nav-btn next absolute right-0 z-10 bg-violet-brand-500 text-white p-4 rounded-r-xl">&gt;</button>
          </div>
          <div className="carousel-dots flex justify-center space-x-2 mt-4">
            {/* Dots se generarán dinámicamente */}
          </div>
        </section>

        {/* Sección de Desarrollo Web */}
        <section className="h-125 mt-6 flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto p-6 bg-coral-brand-300 rounded-2xl shadow-md gap-x-4">
          <div className="w-2/5 flex justify-center">
            <img src="src/assets/img/yotsuba_nakano.png" alt="Perfil" className="w-56 md:w-60 rounded-4xl hover:scale-105 transition-transform"/>
          </div>
          <div className="w-3/5 text-center">
            <h2 className="text-4xl mb-6 font-bold">Desarrollo Web & Diseño Creativo</h2>
            <p className="text-xl text-gray-700">
              Transformando ideas en experiencias digitales. Especializado en desarrollo frontend, diseño de interfaces intuitivas y soluciones web innovadoras que combinan funcionalidad y estética.
            </p>
          </div>
        </section>

        {/* Sección de Multimedia */}
        <section className="h-125 mt-6 flex flex-col-reverse md:flex-row-reverse items-center justify-between max-w-7xl mx-auto p-6 bg-green-brand-300 rounded-2xl shadow-md gap-x-4">
          <div className="w-2/5 flex justify-center">
            <img src="src/assets/img/el-chambeador.jpg" alt="IMG" className="w-56 md:w-80 rounded-4xl shadow-lg hover:scale-105 transition-transform"/>
          </div>
          <div className="w-3/5 text-center">
            <h2 className="text-4xl mb-6 font-bold">Multimedia & Producción Creativa</h2>
            <p className="text-xl text-gray-700">
              Creando contenido visual impactante. Dominio de herramientas de diseño y edición para dar vida a proyectos que cuentan historias, desde el desarrollo de interfaces hasta la edición de video profesional.
            </p>
          </div>
        </section>

        <footer className="mt-6 p-8 bg-blue-brand-200 rounded-t-2xl">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Términos y Condiciones */}
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Términos y Condiciones</h2>
              <a href="terminos y condiciones/terminos_y_condiciones.html" 
                 className="inline-block px-6 py-2 bg-blue-brand-500 text-white rounded-xl hover:bg-blue-brand-600 transition">
                Más detalles
              </a>
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
    </div>
  );
};

export default Header;
