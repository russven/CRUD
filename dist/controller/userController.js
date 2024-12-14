"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.createUser = exports.updateUser = exports.getUsers = void 0;
const db_1 = __importDefault(require("../database/db"));
// Obtener todos los usuarios
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db_1.default.query('SELECT * FROM users'); // Consultar todos los usuarios
        res.json(result.rows); // Enviar los usuarios como respuesta
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
});
exports.getUsers = getUsers;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
        // Actualiza el usuario en la base de datos
        const result = yield db_1.default.query('UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *', [name, email, id]);
        const updatedUser = result.rows[0]; // Obtiene el usuario actualizado
        // Devuelve el usuario actualizado en la respuesta
        res.json(updatedUser);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
});
exports.updateUser = updateUser;
// Crear un nuevo usuario
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = req.body; // Obtener datos del cuerpo de la solicitud
    try {
        yield db_1.default.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]); // Insertar un usuario
        res.json({ message: 'Usuario creado' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
});
exports.createUser = createUser;
// Eliminar un usuario
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // Obtener el ID del usuario de los parámetros
    try {
        yield db_1.default.query('DELETE FROM users WHERE id = $1', [id]); // Eliminar un usuario por ID
        res.json({ message: 'Usuario eliminado' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
});
exports.deleteUser = deleteUser;
