const express = require('express');
const CRutas = require('../../controlador/clientes/CrearClienteControlador');
const LCRutas = require('../../controlador/clientes/LoginClienteControlador');
const router = express.Router();

router.post('/usuario/crear', CRutas.crearCliente); // RF02
router.post('/cliente/login', LCRutas.validarCredencial); // RF03
module.exports = router; 