"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importar Router de Express y los controladores
const express_1 = require("express");
const userController_1 = require("../controller/userController"); // Asegúrate de importar updateUser
// Crear un nuevo router
const router = (0, express_1.Router)();
// Definir rutas del CRUD
router.get('/users', userController_1.getUsers); // Ruta para obtener usuarios
router.post('/users', userController_1.createUser); // Ruta para crear un usuario
router.put('/users/:id', userController_1.updateUser); // Ruta para actualizar un usuario (agregada aquí)
router.delete('/users/:id', userController_1.deleteUser); // Ruta para eliminar un usuario
// Exportar las rutas
exports.default = router;
