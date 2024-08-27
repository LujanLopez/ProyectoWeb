import React from 'react';
import garantiaimagen from '../ImagenesPolarfrost/garantia.jpg'

const GarantiaPage = (props) => {
    return (
        <div className="holder">
            <div className="garanti-section">
                <img src={garantiaimagen} alt="Garantia imagen 2" className="imagen-animada" />
                <div className="garanti-content">
                    <h2>Garantía por el Service de Heladeras y Aire Acondicionados</h2>
                    <p>En nuestro servicio de heladeras y aire acondicionados, nos esforzamos por generar confianza en
                        nuestros clientes ya que creemos que es la mejor forma de cuidarlos.</p>
                    <p>Por eso, otorgamos una garantía escrita para todos nuestros servicios. Queremos asegurarnos de que
                        nuestros clientes estén 100% satisfechos. </p>
                </div>
            </div>
        </div>
    );
}

export default GarantiaPage;
