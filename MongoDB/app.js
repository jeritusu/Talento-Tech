const express = require('express');
const mongoose = require('mongoose');
const usuarioRoutes = require('./routes/usuarios');
const dotenv = require('dotenv'); // Importar dotenv para manejar variables de entorno
const path = require('path');
const app = express();

// Cargar variables de entorno desde .env
dotenv.config();

// Middleware para parsear JSON
app.use(express.json());

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Conectar a MongoDB usando MONGO_URI desde .env
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Conexión a MongoDB establecida'))
.catch(err => console.error('Error conectando a MongoDB:', err));
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('Conexión a MongoDB establecida'))
// .catch(err => console.error('Error conectando a MongoDB:', err));

// Rutas
app.use('/usuarios', usuarioRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API REST de usuarios funcionando');
});

// Manejo de errores global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: 'Algo salió mal en el servidor' });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000; // Usar el puerto de .env o 3000 por defecto
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});