var express = require('express');
var router = express.Router();
var serviciosModel = require('./../models/serviciosModel');
var nodemailer = require('nodemailer');

router.get('/servicios', async function (req, res, next) {
    try {
        let servicios = await serviciosModel.getServicios();
        res.json(servicios);
    } catch (error) {
        next(error);
    }
});

router.post('/contacto', async (req, res) => {
    const mail = {
        to: 'lujan.micaela.lopez@gmail.com',
        subject: 'Contacto web',
        html: `${req.body.nombre} se contactó a través de la web y quiere más información a este correo: ${req.body.email} <br> Además hizo el siguiente comentario: ${req.body.mensaje} <br> Su tel es: ${req.body.telefono}`
    };

    const servicio = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    await servicio.sendMail(mail);

    res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
    });
});

module.exports = router;
