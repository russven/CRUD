// Importar librerías necesarias para la conexión a PostgreSQL
import { Pool } from 'pg';

// Crear un pool de conexiones con las credenciales de PostgreSQL
const pool = new Pool({
  user: 'rus', // Usuario de la base de datos
  host: 'dpg-ctehoq5ds78s73df13e0-a', // Servidor de la base de datos
  database: 'mydatab_t5fn', // Nombre de la base de datos
  password: 'WehtjaO9XOOAQCxMx8TjZTH5zJ9Grysm', // Contraseña del usuario
  port: 5432, // Puerto por defecto de PostgreSQL
});

// Exportar la conexión para ser utilizada en otros módulos
export default pool;
