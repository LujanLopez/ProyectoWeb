import React from 'react';
import fotoreparandoaire from '../ImagenesPolarfrost/Foto reparando aire.jpg'
import reparacionaireacondionado from '../ImagenesPolarfrost/reparaciones-de-aire-acondicionado.jpg'
import mantenimientoaireacondionado from '../ImagenesPolarfrost/mantenimiento-del-aire-acondicionado-2.jpg'
import cargaaireacondionado from '../ImagenesPolarfrost/carga-de-aire-acondicionado.jpg'
import limpiezadefiltros from '../ImagenesPolarfrost/limpieza de filtros.jpg'
import solucionproblemaselectronicos from '../ImagenesPolarfrost/solucion-problemas-electronicos.jpg'
import asesoramientotecnico from '../ImagenesPolarfrost/asesoramiento-tecnico.jpg'
import logo3 from '../ImagenesPolarfrost/POLAR SOMBRA.png'


const AiresPage = () => {
  return (
    <div className="holder">
      <br />
      <div className="ac-image-container">
        <img src={fotoreparandoaire} alt="foto reparando aire" className="imagen-animada" />
      </div>
      <section className="ac-service-section">
        <div className="ac-central-block">
          <h2>Servicio Técnico de Aire Acondicionado</h2>
          <p>Somos especialistas en la reparación y mantenimiento de aires acondicionados de todas las marcas.
            Nos destacamos en el servicio técnico de aires reconocidos como Samsung, LG, Daikin, Carrier,
            Fujitsu, entre muchas otras. Además, brindamos asistencia a domicilio en diversos barrios de
            Capital Federal y Gran Buenos Aires.</p>
          <p>Proporcionamos servicio de aire acondicionado en el hogar, abarcando tanto modelos split como
            sistemas centrales, ya sean sistemas electrónicos o convencionales.</p>
        </div>
        <div className="ac-services-grid">
          <img src={reparacionaireacondionado} alt="reparacion aire acondionado"  />
          <div className="ac-service-block">
            <h2>Reparación de aires acondicionados</h2>
            <p>Nuestros técnicos están capacitados para diagnosticar y reparar cualquier problema en tu aire
              acondicionado, asegurando un funcionamiento óptimo y prolongando la vida útil del equipo.
            </p>
          </div>
        </div>
        <div className="ac-services-grid">
          <img src={mantenimientoaireacondionado} alt="mantenimiento aire acondionado" />
          <div className="ac-service-block">
            <h2>Mantenimiento preventivo y correctivo</h2>
            <p>Ofrecemos planes de mantenimiento preventivo para evitar averías y mantenimientos correctivos
              para solucionar problemas existentes, garantizando un rendimiento eficiente y prolongado.
            </p>
          </div>
        </div>
        <div className="ac-services-grid">
          <img src={cargaaireacondionado} alt="carga aire acondionado" />
          <div className="ac-service-block">
            <h2>Recarga de gas refrigerante</h2>
            <p>Realizamos la recarga de gas refrigerante con productos de alta calidad, asegurando que tu
              aire acondicionado funcione de manera eficiente y eficaz.</p>
          </div>
        </div>
        <div className="ac-services-grid">
          <img src={limpiezadefiltros} alt="limpieza de filtros" />
          <div className="ac-service-block">
            <h2>Limpieza de filtros y ductos</h2>
            <p>Una correcta limpieza de filtros y ductos es esencial para mantener la calidad del aire y la
              eficiencia del equipo. Ofrecemos un servicio completo de limpieza y desinfección.</p>
          </div>
        </div>
        <div className="ac-services-grid">
          <img src={solucionproblemaselectronicos} alt="solucion de problemas electronicos" />
          <div className="ac-service-block">
            <h2>Solución de problemas eléctricos</h2>
            <p>Diagnóstico y reparación de problemas eléctricos que puedan afectar el rendimiento de tu aire
              acondicionado, garantizando la seguridad y el funcionamiento adecuado del sistema.</p>
          </div>
        </div>
        <div className="ac-services-grid">
          <img src={asesoramientotecnico} alt="asesoramiento tecnico" />
          <div className="ac-service-block">
            <h2>Asesoramiento técnico especializado</h2>
            <p>Nuestros expertos te brindan asesoramiento personalizado sobre el uso, mantenimiento y
              mejoras para tu sistema de aire acondicionado, ayudándote a tomar decisiones informadas.</p>
          </div>
        </div>
      </section>
    
      <div className="container">
        <div className="call-now-box">
          <img src={logo3} alt="Logo" className="logo" />
          <h2>¡LLAME AHORA!</h2>
          <a href="https://api.whatsapp.com/send?phone=5491130915107" target="_blank" rel="noopener noreferrer" className="whatsapp-button">WhatsApp</a>
          <p>Estamos para ayudarlo. ¡Llámenos y solucionaremos su problema!</p>
        </div>
      </div>
    </div>
  );
};

export default AiresPage;