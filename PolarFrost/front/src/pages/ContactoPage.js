import { useState } from "react";
import axios from 'axios';

const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    };

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        try {
            const response = await axios.post('http://localhost:3000/api/contacto', formData);
            setMsg(response.data.error ? 'Error al enviar el mensaje' : 'Mensaje enviado');
            if (!response.data.error) {
                setFormData(initialForm);
            }
        } catch (error) {
            setMsg('Error al enviar el mensaje');
        } finally {
            setSending(false);
        }
    };

    return (
        <main className="holder contacto">
            <div className="formulario">
                <h2>Contacto Rápido</h2>
                <form action="/contacto" method="post" onSubmit={handleSubmit}>
                    <p>
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                        />
                    </p>
                    <p>
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </p>
                    <p>
                        <label htmlFor="telefono">Teléfono</label>
                        <input
                            type="text"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                        />
                    </p>
                    <p>
                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea
                            name="mensaje"
                            value={formData.mensaje}
                            onChange={handleChange}
                        ></textarea>
                    </p>
                    <p className="acciones">
                        <input type="submit" value={sending ? "Enviando..." : "Enviar"} disabled={sending} />
                    </p>
                </form>
                {msg && <p>{msg}</p>}
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
};

export default ContactoPage;

