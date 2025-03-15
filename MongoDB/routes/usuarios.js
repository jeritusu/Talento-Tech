const express = require('express');
const Usuario = require('../models/Usuario');
const router = express.Router();

// Crear un usuario (POST)
router.post('/', async (req, res) => {
    try {
        const usuario = new Usuario(req.body); // Crear un nuevo usuario con los datos del body
        await usuario.save(); // Guardar el usuario en la base de datos
        res.status(201).send(usuario); // Responder con el usuario creado
    } catch (err) {
        res.status(400).send({ error: err.message }); // Manejar errores de validación o duplicados
    }
});

module.exports = router;


// Obtener todos los usuarios (GET)
router.get('/', async (req, res) => {
    try {
        const usuarios = await Usuario.find(); // Buscar todos los usuarios
        res.send(usuarios); // Responder con la lista de usuarios
    } catch (err) {
        res.status(500).send({ error: 'Error al obtener los usuarios' }); // Manejar errores del servidor
    }
});


// Obtener un usuario por ID (GET)
router.get('/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id); // Buscar usuario por ID
        if (!usuario) {
            return res.status(404).send({ error: 'Usuario no encontrado' }); // Si no existe, devolver 404
        }
        res.send(usuario); // Responder con el usuario encontrado
    } catch (err) {
        res.status(500).send({ error: 'Error al obtener el usuario' }); // Manejar errores del servidor
    }
});


// Actualizar un usuario por ID (PUT)
router.put('/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, {
            new: true, // Devolver el usuario actualizado
            runValidators: true // Validar los datos antes de actualizar
        });
        if (!usuario) {
            return res.status(404).send({ error: 'Usuario no encontrado' }); // Si no existe, devolver 404
        }
        res.send(usuario); // Responder con el usuario actualizado
    } catch (err) {
        res.status(400).send({ error: err.message }); // Manejar errores de validación o duplicados
    }
});

// Eliminar un usuario por ID (DELETE)
router.delete('/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndDelete(req.params.id); // Buscar y eliminar usuario por ID
        if (!usuario) {
            return res.status(404).send({ error: 'Usuario no encontrado' }); // Si no existe, devolver 404
        }
        res.send({ message: 'Usuario eliminado correctamente' }); // Responder con un mensaje de éxito
    } catch (err) {
        res.status(500).send({ error: 'Error al eliminar el usuario' }); // Manejar errores del servidor
    }
});

module.exports = router;
