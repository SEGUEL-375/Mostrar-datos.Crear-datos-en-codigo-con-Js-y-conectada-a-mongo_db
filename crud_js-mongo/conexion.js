// conexion.js

const mongoose = require('mongoose');

async function conectar() {
    try {
        await mongoose.connect('mongodb://localhost:27017/db_js_mongo', { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Conexión exitosa a MongoDB.');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
    }
}

module.exports = conectar;