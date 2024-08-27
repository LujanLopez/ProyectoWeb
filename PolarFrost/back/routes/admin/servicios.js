var express = require('express');
var router = express.Router();
var serviciosModel = require('../../models/serviciosModel')

/* GET home page. */
router.get('/', async function (req, res, next) {

  var servicios = await serviciosModel.getServicios();

  res.render('admin/servicios', { layout: 'admin/layout', persona: req.session.nombre, servicios });
});

router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  });
});

router.post('/agregar', async (req, res, next) => {
  try {
    if (req.body.nombre_del_servicio != "" && req.body.descripcion != "" && req.body.precio != "") {
      await serviciosModel.insertServicios(req.body);
      res.redirect('admin/servicios')
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        Message: 'Todos los campos son requeridos'
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se cargo el servicio'
    });
  }
});

router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;
  console.log(id)
  await serviciosModel.deleteServiciosById(id);
  res.redirect('/admin/servicios');
});

router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id;
  console.log(req.params.id);
  var servicios = await serviciosModel.getServiciosById(id);

  res.render('admin/modificar', {
    layout: 'admin/layout',
    servicios
  })
});

router.post('/modificar', async (req, res, next) => {
  try {
    var obj = {
      nombre_servicio: req.body.nombre_servicio,
      descripcion: req.body.descripcion,
      precio: req.body.precio
    }
    console.log(obj)
    console.log(req.body.id)

    await serviciosModel.modificarServiciosById(obj, req.body.id);
    res.redirect('/admin/servicios');

  } catch (error) {
    console.error(error);
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se pudo modificar el servicio',
    });
  }
});




module.exports = router;