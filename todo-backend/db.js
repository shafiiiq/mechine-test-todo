const { Pool } = require('pg');
require('dotenv').config(); // If you are using dotenv for environment variables

// Configure the database connection using environment variables
const pool = new Pool({
  user: process.env.DB_USER, // Database username
  host: process.env.DB_HOST, // Database host (usually localhost)
  database: process.env.DB_NAME, // Database name
  password: process.env.DB_PASSWORD, // Database password
  port: process.env.DB_PORT || 5432, // Database port (default is 5432 for PostgreSQL)
});

pool.connect()
    .then(client => {
        console.log("Database connected successfully!");
        client.release();
    })
    .catch(err => {
        console.error('Database connection error:', err.stack);
    });


module.exports = pool;
