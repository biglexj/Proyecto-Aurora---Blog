import React from "react";
import { Link } from "react-router-dom";
import logo from "/assets/Marca/@biglexj/Logo.jpg";

const Register = () => {
  return (
    <main className="min-h-screen text-primary-white">
      <div className="max-w-7xl mx-auto min-h-screen p-0">
        <div className="flex justify-center items-center min-h-screen">
        <div className="bg-pink-panther-300 w-115 p-6 rounded-3xl flex flex-col items-center">
            {/* Logo y Nombre */}
            <div className="flex items-center mt-8 mb-4 w-80">
            <img src={logo} alt="Logo" className="h-13 rounded-full" />
            <p className="font-kefa ml-2 text-2xl text-dark font-semibold">Company</p>
            </div>

            {/* Formulario */}
            <form action="/" className="flex flex-col w-80">
            <label htmlFor="name" className="text-dark text-lg mb-1">
                Nombre(s)
            </label>
            <input
                type="text"
                id="name"
                placeholder="Ejemplo: Biglex"
                className="p-2 w-80 rounded-lg border-none bg-white focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            <label htmlFor="last-name" className="text-dark text-lg mt-3 mb-1">
                Apellidos
            </label>
            <input
                type="text"
                id="last-name"
                placeholder="Ejemplo: Martínez"
                className="p-2 w-80 rounded-lg border-none bg-white focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            <label htmlFor="username" className="text-dark text-lg mt-3 mb-1">
                Usuario
            </label>
            <input
                type="text"
                id="username"
                placeholder="@biglexj"
                className="p-2 w-80 rounded-lg border-none bg-white focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            <label htmlFor="email" className="text-dark text-lg mt-3 mb-1">
                Correo Electrónico
            </label>
            <input
                type="email"
                id="email"
                placeholder="usuario@example.com"
                className="p-2 w-80 rounded-lg border-none bg-white focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            <label htmlFor="password" className="text-dark text-lg mt-3 mb-1">
                Contraseña
            </label>
            <input
                type="password"
                id="password"
                placeholder="**********"
                className="p-2 w-80 rounded-lg border-none bg-white focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            <input
                type="submit"
                value="Registrar"
                className="mt-4 p-2 w-80 rounded-md bg-green-600 text-white cursor-pointer hover:bg-green-700 transition"
            />
            <a href="/" className="mt-2 text-center text-dark hover:text-black">
                ¿Olvidaste tu contraseña?
            </a>
            </form>

            {/* Botones adicionales */}
            <Link to="/login" className="mt-4 w-80 text-center p-2 border border-gray-900 rounded-md hover:bg-gray-200 transition">
            Iniciar Sesión
            </Link>
            <Link to="/" className="mt-6 mb-8 text-dark hover:text-white">
            Inicio
            </Link>
        </div>
        </div>
        </div>
    </main>
  );
};

export default Register;
