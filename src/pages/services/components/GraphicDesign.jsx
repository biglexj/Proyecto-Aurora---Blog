import React from 'react';
import ContactButtons from '@components/ContactButtons';

const GraphicDesign = () => {
  return (
    <main className="graphic-container max-w-7xl mx-auto p-0 mt-6">
      <section className='p-4 md:p-10 bg-green-200 mt-6 rounded-2xl'>
        <div className="text-pink-panther-600 text-3xl md:text-4xl font-kefa font-bold text-center">Diseño Gráfico</div>
        <div className="text-base md:text-lg font-semibold text-center mt-3">
          <h2>Has que cada producto o servicio tenga su estilo</h2>
          <p>(Usamos la suite de Affinity: Photo, Designer y Publisher)</p>
        </div>
        <div className='flex justify-center'>
          <div className="flex justify-center items-center w-10 h-10 mt-3 rounded-full bg-pink-panther-500 text-white">&#9658;</div>
        </div>

        <div className='px-4 sm:px-8 md:px-16 lg:px-24 mt-5 flex flex-col max-w-7xl mx-auto'>
          <div className="content-flex">
            <div>
              <p className='text-2xl text-left md:text-3xl'>🖼 <strong className='text-2xl md:text-3xl'>Edición y retoque fotográfico (Affinity Photo)</strong></p>
              <ul className='text-lg mt-2 text-left md:text-xl font-medium'>
                <li className='ml-8'><i className='text-pink-panther-500'>&#9658;</i> Corrección de color y luz</li>
                <li className='ml-8'><i className='text-pink-panther-500'>&#9658;</i> Retoque avanzado: piel, detalles y fondo</li>
                <li className='ml-8'><i className='text-pink-panther-500'>&#9658;</i> Restauración de fotos antiguas</li>
                <li className='ml-8'><i className='text-pink-panther-500'>&#9658;</i> Montajes fotográficos creativos</li>
              </ul>
            </div>

            <div>
              <p className='text-2xl text-left md:text-3xl mt-5'>📐 <strong className='text-2xl md:text-3xl'>Diseño vectorial (Affinity Designer)</strong></p>
              <ul className='text-lg mt-2 text-left md:text-xl font-medium'>
                <li className='ml-8'><i className='text-pink-panther-500'>&#9658;</i> Logos personalizados</li>
                <li className='ml-8'><i className='text-pink-panther-500'>&#9658;</i> Ilustraciones vectoriales</li>
                <li className='ml-8'><i className='text-pink-panther-500'>&#9658;</i> Diseño de íconos para apps o páginas web</li>
                <li className='ml-8'><i className='text-pink-panther-500'>&#9658;</i> Carteles y banners publicitarios</li>
                <li className='ml-8'><i className='text-pink-panther-500'>&#9658;</i> Diseños para impresión (stickers, camisetas)</li>
              </ul>
            </div>

            <div>
              <p className='text-2xl text-left md:text-3xl mt-5'>📚 <strong className='text-2xl md:text-3xl'>Diseño editorial (Affinity Publisher)</strong></p>
              <ul className='text-lg mt-2 text-left md:text-xl font-medium'>
                <li className='ml-8'><i className='text-pink-panther-500'>&#9658;</i> Folletos publicitarios</li>
                <li className='ml-8'><i className='text-pink-panther-500'>&#9658;</i> Revistas o catálogos</li>
                <li className='ml-8'><i className='text-pink-panther-500'>&#9658;</i> Libros y eBooks</li>
                <li className='ml-13'>Portada</li>
                <li className='ml-13'>Maquetación interna</li>
                <li className='ml-8'><i className='text-pink-panther-500'>&#9658;</i> Currículum o portafolios profesionales</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <ContactButtons />
          </div>
        </div>
        <div className="text-center mt-5">© 2025 Diseño Gráfico</div>
      </section>
    </main>
  );
};

export default GraphicDesign;