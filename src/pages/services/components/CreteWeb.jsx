import React from 'react';
import ContactButtons from '@components/ContactButtons';

const CreateWeb = () => {
  return (
    <main className="web-container max-w-7xl mx-auto p-0 mt-6">
      <section className='p-4 md:p-10 bg-blue-200 mt-6 rounded-2xl'>
        <div className="text-pink-panther-600 text-3xl md:text-4xl font-kefa font-bold text-center">Desarrollo Web</div>
        <div className="text-base md:text-xl font-semibold text-center mt-3">
          <h2>Tu presencia digital con estilo y funcionalidad</h2>
          <p>(Utilizamos Vite y Tailwind CSS 4)</p>
        </div>
        <div className='flex justify-center'>
          <div className="flex justify-center items-center w-10 h-10 mt-3 rounded-full bg-pink-panther-500 text-white">&#9658;</div>
        </div>

        <div className='px-4 sm:px-8 md:px-16 lg:px-24 mt-5 flex flex-col max-w-7xl mx-auto'>
          <div className="content-flex">
            <div>
              <p className='text-2xl text-left md:text-3xl'>🌐 <strong className='text-2xl md:text-3xl'>Sitios web estáticos</strong></p>
              <ul className='text-lg mt-2 text-left md:text-xl font-medium'>
                <li className='ml-8'><i className='text-pink-panther-500'>&#9658;</i> Landing pages de alto impacto</li>
                <li className='ml-8'><i className='text-pink-panther-500'>&#9658;</i> Portafolios profesionales</li>
                <li className='ml-8'><i className='text-pink-panther-500'>&#9658;</i> Sitios corporativos</li>
                <li className='ml-8'><i className='text-pink-panther-500'>&#9658;</i> Blogs personales</li>
              </ul>
            </div>

            <div>
              <p className='text-2xl text-left md:text-3xl mt-5'>⚡ <strong className='text-2xl md:text-3xl'>Tecnologías modernas</strong></p>
              <ul className='text-lg mt-2 text-left md:text-xl font-medium'>
                <li className='ml-8'><i className='text-pink-panther-500'>&#9658;</i> Desarrollo con Vite para rendimiento óptimo</li>
                <li className='ml-8'><i className='text-pink-panther-500'>&#9658;</i> Diseño responsivo con Tailwind CSS</li>
                <li className='ml-8'><i className='text-pink-panther-500'>&#9658;</i> Animaciones y transiciones personalizadas</li>
                <li className='ml-8'><i className='text-pink-panther-500'>&#9658;</i> Optimización SEO básica incluida</li>
              </ul>
            </div>

            <div>
              <p className='text-2xl text-left md:text-3xl mt-5'>🛠️ <strong className='text-2xl md:text-3xl'>Servicios incluidos</strong></p>
              <ul className='text-lg mt-2 text-left md:text-xl font-medium'>
                <li className='ml-8'><i className='text-pink-panther-500'>&#9658;</i> Diseño personalizado según tu marca</li>
                <li className='ml-8'><i className='text-pink-panther-500'>&#9658;</i> Implementación de formularios de contacto</li>
                <li className='ml-8'><i className='text-pink-panther-500'>&#9658;</i> Integración con redes sociales</li>
                <li className='ml-8'><i className='text-pink-panther-500'>&#9658;</i> Despliegue en plataformas como Netlify o Vercel</li>
                <li className='ml-11 italic'>(Precios desde S/ 499 según complejidad y funcionalidades)</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <ContactButtons />
          </div>
        </div>
        <div className="text-center mt-5">© 2025 Biglex J Desarrollo Web</div>
      </section>
    </main>
  );
};

export default CreateWeb;