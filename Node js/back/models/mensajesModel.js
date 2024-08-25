var pool = require('./bd'); 

console.log('mensajesModel cargado correctamente');

async function getMensajes() {
    var query = 'SELECT * FROM mensajes';
    var rows = await pool.query(query);
    return rows;
}

async function insertMensaje(obj) {
    try {
        var query = 'INSERT INTO mensajes SET ?';
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { getMensajes, insertMensaje };
