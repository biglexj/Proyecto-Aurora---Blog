import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Marca/Logo.jpg';

const Developer = () => {
    
    return(
        <main className='bg-green-creativity-400 min-h-screen text-primary-white'>
            <div className="max-w-7xl mx-auto min-h-screen p-0">
            <div className="h-18 container mx-auto flex items-center justify-between px-4">
              <div className="logo flex items-center">
                <img src={logo} alt="Logo" id="logo-bar" className="rounded-full h-12 w-auto transition-transform duration-300 hover:rotate-360" />
              </div>
              <h1 id='title' className="text-2xl font-bold">Biglex J Producciones</h1>
              <nav className="flex space-x-4">
                <Link to="/" className="rounded-2xl bg-green-creativity-400 px-4 py-2 font-semibold text-dark hover:bg-pink-panther-400 hover:text-white">Inicio</Link>
                <Link to="/bj-producciones" className="rounded-2xl bg-green-creativity-400 px-4 py-2 font-semibold text-dark hover:bg-pink-panther-400 hover:text-white">BJ Producciones</Link>
                <Link to="/services" className="rounded-2xl bg-green-creativity-400 px-4 py-2 font-semibold text-dark hover:bg-pink-panther-400 hover:text-white">Servicios</Link>
              </nav>
            </div>
            </div>
        </main>
    );
};

export default Developer;