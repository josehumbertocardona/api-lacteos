const express = require('express');
const cors = require('cors');
//const rutacliente = require('./vista/ClienteRutas');
const conexion = require('./modelo/bd/Conexion');
//const rutatrabajador = require('./modelo/admin/RutaCrearTrabajador');
const rutaadmin = require('./vista/admin/RutaAdmin');
const app = express();
const PORT = process.env.PORT || 3333;

// Midleware
app.use(cors({
    origin: '*', // Cambiar ['http://tu.com', 'http://yo.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
    credentials: true // Habilita el envío de credenciales si es necesario
  }));

  // Middleware para parseo de solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Rutas 
app.use('/', rutaadmin);
app.use('/clientes', rutaadmin);
app.get('/',(req, res) => {
    res.send('¡Hola desde mi servidor Node.js!');
});
// Iniciar el servidor
app.listen(3333, ()  => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });