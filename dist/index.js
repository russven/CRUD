"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importar librerías y módulos necesarios
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path")); // Importar módulo path para manejar rutas
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
// Crear una instancia de la aplicación Express
const app = (0, express_1.default)();
// Definir el puerto, compatible con Render
const PORT = process.env.PORT || 3000;
// Middleware para manejar CORS y parsear el cuerpo de las solicitudes
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
// Configurar la carpeta de archivos estáticos
const publicPath = path_1.default.join(__dirname, 'public');
app.use(express_1.default.static(publicPath));
// Usar las rutas de usuarios
app.use('/api', userRoutes_1.default);
// Ruta principal para servir el archivo index.html
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(publicPath, 'index.html'), (err) => {
        if (err) {
            res.status(500).send('Error al cargar index.html');
        }
    });
});
// Ruta de fallback para cualquier otra petición (manejo de 404)
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(publicPath, 'index.html'), (err) => {
        if (err) {
            res.status(500).send('Error al cargar la página solicitada');
        }
    });
});
// Iniciar el servidor en el puerto configurado
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
