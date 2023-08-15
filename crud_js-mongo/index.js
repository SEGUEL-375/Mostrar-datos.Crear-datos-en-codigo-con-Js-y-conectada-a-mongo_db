// index.js
const mongoose = require('mongoose');

// Definir el esquema del modelo
const usuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true },
    edad: { type: Number, required: true },

});

// Crear el modelo a partir del esquema
const Usuario = mongoose.model('lista_de_datos_de_los_usuarios', usuarioSchema);

// Crear un usuarios
async function crearUsuario() {
    try {
        const nuevoUsuario = new Usuario({
            nombre: 'Samuel Seguel',
            email: 'samuelseguel1@gmail.com',
            edad: 22

        });


        await nuevoUsuario.save();
        console.log('Usuario uno creado exitosamente.');
    } catch (error) {
        console.error('Error al crear el usuario:', error);
    }


    try {
        const nuevoUsuariotwo = new Usuario({
            nombre: 'Simon Seguel',
            email: 'simonseguel@gmail.com',
            edad: 19
        });
        await nuevoUsuariotwo.save();
        console.log('Usuario dos creado exitosamente.');
    } catch (error) {
        console.error('Error al crear el usuario dos:', error);
    }

}


// Obtener todos los usuarios

async function obtenerUsuarios() {
    try {
        const usuarios = await Usuario.find();

        // Utilizar un conjunto para eliminar duplicados por email y edad
        const conjuntoUsuarios = new Set();

        // Filtrar usuarios por email y edad
        usuarios.forEach(usuario => {
            const { nombre, email, edad } = usuario;
            conjuntoUsuarios.add(`${nombre}-${email}-${edad}`);
        });

        // Convertir el conjunto en un arreglo de objetos
        const usuariosUnicos = Array.from(conjuntoUsuarios).map(usuario => {
            const [nombre, email, edad] = usuario.split('-');
            return { nombre, email, edad: parseInt(edad) };
        });

        console.log('Lista de usuarios:', usuariosUnicos);
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
    }
}

module.exports = { crearUsuario, obtenerUsuarios };