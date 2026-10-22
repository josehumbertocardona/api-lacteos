const dbService = require('../bd/Conexion');
const bcrypt = require('bcrypt');

class CrearTrabajadorModelo{
// funcion para crear nuevos admin
  static async crearTrabajador(tipoD, numerod, nom, dir, tel, email, contras) {
    const query = 'INSERT INTO trabajadores (tipoDocumento, numeroDocumento, nombre, direccion, telefono, correo, contrasena) VALUES (?, ?, ?, ?, ?, ?, ?)';

    try {
      // Generar el hash de la contraseña con bcrypt
      const salto = 10; // Nivel de seguridad de encriptación
      const contra = await bcrypt.hash(contras, salto);
      const rol = "Trabajador";

      return await dbService.query(query, [tipoD, numerod, nom, dir, tel, email, contras]);
    } catch (err) {
      throw new Error(`Error al crear su nueva cuenta Admin: ${err.message}`);
    }
  }//cerrar crear Admin
}

module.exports = CrearTrabajadorModelo;