// app.js

const mongoose = require('mongoose');
const conectar = require('./conexion');
const { crearUsuario, obtenerUsuarios } = require('./index');

async function iniciar() {
    await conectar();

    // Crear un nuevo usuario
    await crearUsuario();

    // Obtener todos los usuarios
    await obtenerUsuarios();


    // Cerrar la conexión con MongoDB
    await mongoose.disconnect();
}

iniciar();