import { Pool } from 'pg';

const pool = new Pool({
  connectionString: 'postgres://rus:WehtjaO9XOOAQCxMx8TjZTH5zJ9Grysm@dpg-ctehoq5ds78s73df13e0-a.oregon-postgres.render.com:5432/mydatab_t5fn',
  ssl: {
    rejectUnauthorized: false, // Render requiere conexiones SSL
  },
});

// Prueba de conexión
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error al conectar a la base de datos:', err.stack);
  }
  console.log('Conexión exitosa a PostgreSQL');
  release();
});

export default pool;
