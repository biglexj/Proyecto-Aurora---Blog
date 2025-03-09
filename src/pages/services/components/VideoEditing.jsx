import React from 'react';
import ContactButtons from './ContactButtons';

const VideoEditing = () => {
  return (
    <main className="video-container max-w-7xl mx-auto p-0 mt-6">
      <section className='p-10  bg-coral-brand-200 mt-6 rounded-2xl'>
         <div className="text-pink-panther-600 text-4xl font-kefa font-bold text-center">Edición de Video</div>
          <div className="text-lg font-semibold text-center mt-3">
            <h2>Tu idea, una realidad</h2>
            <p>(Usamos DaVinci Resolve como editor)</p>
          </div>
        <div className='flex justify-center'>
          <div className="flex justify-center items-center w-10 h-10 mt-3 rounded-full bg-pink-panther-500 text-white">&#9658;</div>
        </div>

        <div className='p-10 flex items-center justify-between max-w-7xl mx-auto'>
          <div>
            <div className="content-flex">
              <div className="content">
                <div className="content-video">
                  <div>
                    <p className='text-3xl'>🎥 <strong className='text-3xl'>Edición personalizada</strong></p>
                    <ul className='text-xl font-medium'>
                      <li className='ml-6'><i className='text-pink-panther-500'>&#9658;</i> Resúmenes de eventos: Recortes dinámicos y ajustes rápidos.</li>
                      <li className='ml-6'><i className='text-pink-panther-500'>&#9658;</i> Edición de transmisiones en vivo</li>
                      <li className='ml-6'><i className='text-pink-panther-500'>&#9658;</i> Montajes rápidos: Perfectos para contenido viral.</li>
                    </ul>
                  </div>
                  <div className='mt-5'>
                    <p className='text-3xl'>🔀 <strong className='text-3xl'>Videos verticales para redes sociales</strong></p>
                    <ul className='text-xl font-medium'>
                      <li className='ml-6'><i className='text-pink-panther-500'>&#9658;</i> Ediciones para Reels, TikTok y YouTube Shorts</li>
                      <li className='ml-6'><i className='text-pink-panther-500'>&#9658;</i> Animaciones personalizadas y transiciones impactantes.</li>
                      <li className='ml-6'><i className='text-pink-panther-500'>&#9658;</i> Optimización para formato vertical.</li>
                      <li className='ml-11 italic'>(Precios a consultar según complejidad)</li>
                    </ul>
                  </div>
                  <div className='mt-5'>
                    <p className='text-3xl'>🎞 <strong className='text-3xl'>Servicios adicionales destacado</strong></p>
                    <ul className='text-xl font-medium'>
                      <li className='ml-6'><i className='text-pink-panther-500'>&#9658;</i> Edición con efectos especiales: Desde transiciones hasta tracking avanzado</li>
                      <li className='ml-6'><i className='text-pink-panther-500'>&#9658;</i> Subtítulos personalizados: Perfectos para contenido en redes sociales.</li>
                      <li className='ml-6'><i className='text-pink-panther-500'>&#9658;</i> Audio mejorado: Sincronización y limpieza de pistas.</li>
                      <li className='ml-11 italic'>(Incluye consulta previa para definir el estilo y objetivos del proyecto)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
          <ContactButtons />
          </div>
        </div>
        <div className="text-center mt-5">© 2025 Biglex J Producciones</div>
      </section>
    </main>
  );
};

export default VideoEditing;