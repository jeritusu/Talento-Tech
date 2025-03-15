const express = require('express');
const cors = require('cors'); // Importar el paquete cors
const app = express();
const port = 4000;

// Habilitar CORS
app.use(cors());
app.use(express.json());

// Rutas
app.get('/api/data', (req, res) => {
    res.json({ message: '¡Hola desde el servidor!' });
});

app.post('/api/data', (req, res) => {
    const data = req.body;
    res.json({ message: 'Datos recibidos', data });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
