import React from "react";
import hombreArreglandoHeladera from '../ImagenesPolarfrost/hombre arreglando heladera.jpg';



const HomePage = (props) => {
    return (
      <main className="holder">
         <br />
  <img src={hombreArreglandoHeladera} alt="Hombre arreglando heladera" className="imagen-animada" />    
      <section className="service-section">    
          <div className="left-block">
            <h2>Servicio Técnico de Heladeras</h2>
            <p>Somos especialistas en la reparación y mantenimiento de heladeras de todas las marcas. Nos destacamos en el
              servicio técnico de heladeras reconocidas como Whirlpool, Electrolux, Kohinoor, Columbia, Patrick, Mabe,
              General Electric, entre muchas otras. Además, brindamos asistencia a domicilio en diversos barrios de
              Capital Federal y Gran Buenos Aires.
            </p>
            <p>Proporcionamos servicio de heladeras en el hogar, abarcando tanto modelos de línea convencional como no
              frost, ya sean sistemas electrónicos o heladeras análogas tradicionales.
            </p>
          </div>
          <div className="right-block">
            <h2>Nuestros Servicios de Heladeras</h2>
            <p>Ofrecemos una amplia gama de servicios para mantener tu heladera en perfecto estado:</p>
            <ul>
              <li>Reparación de heladeras de todas las marcas</li>
              <li>Mantenimiento preventivo y correctivo</li>
              <li>Recarga de gas</li>
              <li>Cambio de compresores</li>
              <li>Solución de problemas eléctricos</li>
              <li>Asesoramiento técnico especializado</li>
            </ul>
          </div>
          <div class="coverage-section">
            <h2 class="intro-text">En nuestro servicio de heladeras y aire acondicionados, nos comprometemos a brindar un
                servicio de alta calidad y una amplia cobertura para asegurarnos de que todos nuestros clientes reciban
                la atención que merecen. Es por eso que llegamos a todas las zonas de Capital Federal, Zona Norte y Zona
                Oeste de la Provincia de Buenos Aires, garantizando un servicio eficiente y confiable.</h2>

            <div class="coverage-areas">
                <div class="coverage-area">
                    <h3>CAPITAL FEDERAL</h3>
                    <p>Agronomía - Almagro - Balvanera - Barracas - Barrio Norte - Belgrano - Boedo - Caballito - Centro
                        - Chacarita - Coghlan - Colegiales - Congreso - Constitución - Flores - Floresta - La Boca -
                        Liniers - Mataderos - Nuñez - Once - Palermo - Parque Centenario - Parque Chacabuco - Parque
                        Chas - Parque Patricios - Paternal - Pompeya - Puerto Madero - Recoleta - Retiro - Saavedra -
                        San Cristóbal - San Telmo - Tribunales - Versalles - Villa Crespo - Villa Devoto - Villa Lugano
                        - Villa Luro - Villa Ortuzar - Villa Pueyrredón - Villa Soldati - Villa Urquiza - Villa Del
                        Parque</p>
                </div>
                <div class="coverage-area">
                    <h3>GBA - ZONA NORTE</h3>
                    <p>Acassuso - Beccar - Bella Vista - Benavidez - Boulogne - Carapachay - Caseros - Ciudad Jardín -
                        Del Viso - Don Torcuato - El Talar - Florida - Garin - General Pacheco - Gran Bourg - Jose Leon
                        Suarez - Ingeniero Maschwitz - La Lucila - Martinez - Munro - Olivos - Pilar - Saenz Peña - San
                        Andrés - San Fernando - San Isidro - San Martin - San Miguel - Santos Lugares - Tigre -
                        Tortuguitas - Vicente López - Victoria - Villa Adelina - Villa Ballester - Villa Bosch - Villa
                        Martelli</p>
                </div>
                <div class="coverage-area">
                    <h3>GBA - ZONA OESTE</h3>
                    <p>3 de Febrero - Aldo Bonzi - Castelar - Ciudad Evita - Ciudadela - El Palomar - Francisco Alvarez
                        - Gonzalez Catan - Haedo - Hurlingham - Isidro Casanova - Ituzaingo - Jose Ingenieros - La
                        Tablada - Laferrere - Lomas del Mirador - Malvinas Argentinas - Merlo - Monte Grande - Moreno -
                        Morón - Parque Leloir - Paso del Rey - Rafael Castillo - Ramos Mejía - San Antonio de Padua -
                        San Justo - Tapiales - Tristan Suarez - Villa Celina - Villa Insuperable - Villa Madero - Villa
                        Sarmiento</p>
                </div>
            </div>
        </div>
        </section>
      </main>
    );
  }
  
  export default HomePage;
  