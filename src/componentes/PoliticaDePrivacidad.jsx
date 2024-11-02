import React from 'react';

function PoliticaDePrivacidad() {
  return (
    <div className="p-6 ml-64">
      <h1 className="text-3xl font-bold mb-4">Políticas de privacidad</h1>

      <h2 className="text-2xl font-semibold mt-6">Uso y protección de datos personales</h2>
      <p>
        Para tu tranquilidad, te contamos el uso que les damos a tus datos personales cuando los ingresás a nuestros sitios,
        canales digitales o formularios, y cómo los protegemos.
      </p>

      <h3 className="text-xl font-semibold mt-4">Cómo recolectamos tus datos</h3>
      <p>
        Guardamos la información que ingresás en nuestros formularios, solicitudes, reclamos o consultas a través de
        Horizon Banking. Qué datos recopilamos:
      </p>
      <ul className="list-disc list-inside ml-4">
        <li>Nombre</li>
        <li>Domicilio.</li>
        <li>Mail.</li>
        <li>Nacionalidad.</li>
        <li>Edad.</li>
        <li>Género según el DNI.</li>
        <li>Datos demográficos, biométricos e identificatorios.</li>
        <li>Número de celular.</li>
      </ul>
      <p className="mt-2">
        No te vamos a pedir datos que revelen tu origen racial y étnico, opiniones políticas, convicciones
        religiosas e información referente a tu salud o vida sexual.
      </p>

      <h3 className="text-xl font-semibold mt-4">Usamos tu información para</h3>
      <ul className="list-disc list-inside ml-4">
        <li>Registrarte en nuestros sistemas y poder contactarte.</li>
        <li>Verificar que cumplas con las exigencias legales.</li>
        <li>Crear y mantener un registro de tus operaciones.</li>
        <li>Dar soporte a tus consultas y reclamos.</li>
        <li>Ofrecerte nuestros servicios financieros, productos y beneficios.</li>
        <li>
          Mejorar nuestra oferta de servicios y funcionalidades a través del estudio y análisis de tus intereses y
          comportamientos.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-4">Qué son las cookies</h3>
      <p>
        Podremos recopilar y procesar información sobre tu visita a nuestro portal por medio del uso de Cookies.
        Con el uso de estas tecnologías podemos conocer los intereses y el comportamiento de quienes visitan o son
        usuarios de nuestro portal y, de esa forma, darles un mejor servicio. Ayudándonos a comprender las
        interacciones de los usuarios con el contenido del portal.
        <br />
        Las cookies no guardan datos personales ni privados, pero si no querés que las usemos, podés desactivarlas
        desde tu navegador.
        <br />
        Tené en cuenta que, si desactivás las cookies es posible que no puedas hacer uso de todas las funcionalidades
        que ofrece nuestro portal.
      </p>

      <h3 className="text-xl font-semibold mt-4">Cómo protegemos tus datos</h3>
      <ul className="list-disc list-inside ml-4">
        <li>Combinamos tecnologías para asegurar la confidencialidad e integridad de las operaciones online.</li>
        <li>
          Implementamos medidas de seguridad administrativas, técnicas y físicas para proteger tus datos personales
          ante la destrucción, pérdida, alteración, acceso, comunicación o uso accidental, ilegal o no autorizado.
        </li>
        <li>
          Garantizamos que nuestros procesos internos de las bases de datos cumplan con las obligaciones de seguridad
          y confidencialidad impuestas por la Ley de Protección de Datos Personales N° 25.326.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-4">
        Somos los responsables de cómo se usan tus datos personales
      </h3>
      <ul className="list-disc list-inside ml-4">
        <li>
          Asumimos el carácter de Responsable Registrado, porque cumplimos con todos los requisitos legales que exige
          la Ley de Protección de Datos Personales N° 25.326.
        </li>
        <li>
          No compartiremos tu información con ninguna empresa u organización sin tu consentimiento, excepto si nos lo
          pide la ley, o para cumplir con obligaciones legales.
        </li>
        <li>
          Con tu consentimiento podemos compartir tus datos a entidades asociadas y filiales, o a proveedores que
          prestan servicios en nuestro nombre. Ellos no están autorizados a compartir tus datos.
        </li>
      </ul>
    </div>
  );
}

export default PoliticaDePrivacidad;
