const express = require('express');
const TRutas = require('../../controlador/admin/CrearTrabajadorControlador');

const router = express.Router();

router.post('/seguridad/crearTrabajador', TRutas.crearTrabajador);

module.exports = router; 