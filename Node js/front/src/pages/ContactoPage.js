const ContactoPage = (props) => {
    return(
        <main className="holder contacto">
            <div className="formulario">
                <h2>Contacto Rápido</h2>
                <form action="" method="">
                    <p>
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label htmlFor="email">Email</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label htmlFor="telefono">Teléfono</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea></textarea>
                    </p>
                    <p className="acciones">
                        <input type="submit" value="Enviar" />
                    </p>
                </form>
            </div>
            <div className="datos">
                <h2>Otras vías de comunicación</h2>
                <p>También puede contactarse con nosotros usando los siguientes medios:</p>
                <ul>
                    <li>Teléfono: 43242388</li>
                    <li>Email: contacto@polarfrost.com.ar</li>
                    <li>Facebook:</li>
                    <li>Twitter:</li>
                    <li>Skype:</li>
                </ul>
            </div>
        </main>
    );
}

export default ContactoPage;
