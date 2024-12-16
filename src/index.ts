// Importar librerías y módulos necesarios
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path'; // Importar módulo path para manejar rutas
import userRoutes from './routes/userRoutes';

// Crear una instancia de la aplicación Express
const app = express();

// Definir el puerto, compatible con Render
const PORT = process.env.PORT || 3000;

// Middleware para manejar CORS y parsear el cuerpo de las solicitudes
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Configurar la carpeta de archivos estáticos
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

// Usar las rutas de usuarios
app.use('/api', userRoutes);

// Ruta principal para servir el archivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'), (err) => {
    if (err) {
      res.status(500).send('Error al cargar index.html');
    }
  });
});

// Ruta de fallback para cualquier otra petición (manejo de 404)
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'), (err) => {
    if (err) {
      res.status(500).send('Error al cargar la página solicitada');
    }
  });
});

// Iniciar el servidor en el puerto configurado
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
