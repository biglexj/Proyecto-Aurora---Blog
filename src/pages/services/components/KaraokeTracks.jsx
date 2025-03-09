import React from 'react';
import ContactButtons from './ContactButtons';

const KaraokeTracks = () => {
  return (
    <main className="karaoke-container max-w-7xl mx-auto p-0 mt-6">
      <section className='p-10 bg-pink-panther-200 mt-6 rounded-2xl'>
        <div className="text-pink-panther-600 text-4xl font-kefa font-bold text-center">Karaokes y Pistas</div>
        <div className="text-lg font-semibold text-center mt-3">
          <h2>En Biglex J Producciones te ofrecemos la mejor calidad</h2>
        </div>
        <div className='flex justify-center'>
          <div className="flex justify-center items-center w-10 h-10 mt-3 rounded-full bg-pink-panther-500 text-white">&#9658;</div>
        </div>

        <div className='p-10 flex items-center justify-between max-w-7xl mx-auto'>
          <div>
            <div className="content-flex">
              <div className="content">
                <div className="content-karaoke">
                  <div>
                    <p className='text-3xl'>🎶 <strong className='text-3xl'>Pistas con letras sincronizadas (SRT o LRC)</strong></p>
                    <ul className='text-xl font-medium'>
                      <li className='ml-6'><i className='text-pink-panther-500'>&#9658;</i> Menor a 10 canciones: S/ 2.99 por pista</li>
                      <li className='ml-6'><i className='text-pink-panther-500'>&#9658;</i> Entre 10 y 20 canciones: S/ 1.99 por pista</li>
                      <li className='ml-6'><i className='text-pink-panther-500'>&#9658;</i> Más de 20 canciones: S/ 1.49 por pista</li>
                    </ul>
                  </div>

                  <div className='mt-5'>
                    <p className='text-3xl'>🎤 <strong className='text-3xl'>Karaokes con letras sincronizadas (SRT o LRC)</strong></p>
                    <ul className='text-xl font-medium'>
                      <li className='ml-6'><i className='text-pink-panther-500'>&#9658;</i> Por karaoke: S/ 4.99</li>
                    </ul>
                  </div>

                  <div className='mt-5'>
                    <p className='text-3xl'>🔀 <strong className='text-3xl'>Mix de pistas</strong></p>
                    <ul className='text-xl font-medium'>
                      <li className='ml-6'><i className='text-pink-panther-500'>&#9658;</i> De 4 a 7 pistas: S/ 4.99</li>
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

export default KaraokeTracks;