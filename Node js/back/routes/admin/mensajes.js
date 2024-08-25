var express = require('express');
var router = express.Router();
var mensajesModel = require('../../models/mensajesModel'); // Verifica que la ruta sea correcta

router.get('/', async (req, res, next) => {
    try {
        var mensajes = await mensajesModel.getMensajes();
        res.render('mensajes', { mensajes: mensajes });
    } catch (error) {
        next(error);
    }
});

router.post('/enviar', async (req, res, next) => {
    try {
        var mensaje = {
            nombre: req.body.nombre,
            email: req.body.email,
            telefono: req.body.telefono,
            mensaje: req.body.mensaje
        };
        await mensajesModel.insertMensaje(mensaje);
        res.redirect('/admin/mensajes');
    } catch (error) {
        next(error);
    }
});

module.exports = router;
