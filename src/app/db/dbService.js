const connection = require('./dbConfig');

const dbService = {
  getUsers: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM usuarios', (error, results) => {
        if (error) {
          console.error('Error al obtener usuarios:', error);
          return reject(error);
        }
        resolve(results);
      });
    });
  },

  agregarPedido: (usuarioId, productoId, cantidad) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'INSERT INTO pedidos (usuario_id, producto_id, cantidad) VALUES (?, ?, ?)',
        [usuarioId, productoId, cantidad],
        (error, results) => {
          if (error) {
            console.error('Error al agregar pedido:', error);
            return reject(error);
          }
          resolve(true);
        }
      );
    });
  },
  agregarPagoTarjeta: (usuarioId, monto, vencimientoTarjeta, codigoSeguridad) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'INSERT INTO pagos_tarjeta (usuario_id, monto, vencimiento_tarjeta, codigo_seguridad) VALUES (?, ?, ?, ?)',
        [usuarioId, monto, vencimientoTarjeta, codigoSeguridad],
        (error, results) => {
          if (error) {
            console.error('Error al agregar pago con tarjeta:', error);
            return reject(error);
          }
          resolve(true);
        }
      );
    });
  },

  
};

module.exports = dbService;

