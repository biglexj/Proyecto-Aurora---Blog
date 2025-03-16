import React from 'react';
import { useNavigate } from 'react-router-dom';

const Terms = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-green-creativity-400 py-8 px-4 md:py-10">
      <div className="max-w-6xl mx-auto bg-pink-panther-200 p-6 md:p-12 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-black mb-8">
          Términos y Condiciones del Sitio Web
        </h1>

        <div className="space-y-6 text-gray-700 px-4 md:px-8 lg:px-16">
          <section>
            <h2 className="text-2xl text-left font-bold text-coral-brand-700 mb-4">1. Información General</h2>
            <p className='ps-4 md:ps-10 text-left'>
              El usuario accede al presente sitio web ("Sitio Web") bajo las siguientes condiciones, las cuales debe leer atentamente antes de utilizar cualquier información proporcionada en el mismo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-left font-bold text-coral-brand-700 mb-4">2. Condiciones de Uso</h2>
            <ul className="list-inside space-y-2 ps-4 md:ps-10 text-left">
              <li>- El usuario se compromete a utilizar el Sitio Web de manera adecuada y respetuosa.</li>
              <li>- No se permite el uso del Sitio Web para fines ilícitos o contrarios a la ley.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl text-left font-bold text-coral-brand-700 mb-4">3. Propiedad de los Contenidos</h2>
            <ul className="list-inside space-y-2 ps-4 md:ps-10 text-left">
              <li>- Todos los contenidos, textos, imágenes, videos y datos presentados en el Sitio Web son propiedad exclusiva de Biglex J, salvo indicación expresa en contrario.</li>
              <li>- No se autoriza la reproducción, transcripción o distribución de los mismos sin autorización previa y escrita.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl text-left font-bold text-coral-brand-700 mb-4">4. Exclusiones y Desventuras</h2>
            <ul className="list-inside space-y-2 ps-4 md:ps-10 text-left">
              <li>- El Sitio Web se proporciona "tal como está" y sin garantías de ningún tipo, incluyendo errores, omisiones u interferencias externas.</li>
              <li>- Biglex J no se hace responsable de daños indirectos, pérdida de datos o problemas técnicos debido al uso del Sitio Web.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl text-left font-bold text-coral-brand-700 mb-4">5. Política de Privacidad</h2>
            <p className='ps-4 md:ps-10 text-left'>
              La Política de Privacidad del Sitio Web está disponible en la sección correspondiente y debe ser readecuada periódicamente. El usuario declina responsabilidad al acceder al Sitio Web y aceptar los términos establecidos en dicha política.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-left font-bold text-coral-brand-700 mb-4">6. Cambios a los Términos</h2>
            <p className='ps-4 md:ps-10 text-left'>
              Biglex J se reserva el derecho de actualizar, modificar o eliminar si son necesarios. Los cambios serán publicados en el Sitio Web y son considerados aceptados por el usuario si continúa usando el sitio después de los cambios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-left font-bold text-coral-brand-700 mb-4">7. Limitación de Responsabilidad</h2>
            <p className='ps-4 md:ps-10 text-left'>
              Biglex J y/o cualquier proveedor del Sitio Web no se hace responsable de ningún daño, pérdida o consecuencia resultante del uso del Sitio Web o de la información proporcionada en él.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-left font-bold text-coral-brand-700 mb-4">8. Contacto</h2>
            <p className='ps-4 md:ps-10 text-left'>
              Si tienes preguntas sobre los términos o necesitas más información, puedes contactar a GitHub y ponerte en contacto en el Sitio Web, sección soporte.
            </p>
          </section>

          {/* Botón Regresar */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => navigate(-1)}
              className="bg-coral-brand-500 text-white px-6 py-2 rounded-xl hover:bg-coral-brand-600 transition-colors duration-300"
            >
              <span className="mr-2">←</span> Regresar
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Terms;
