const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Ruta GET
app.get('/api/data', (req, res) => {
    res.json({ message: '¡Hola desde el servidor!' });
});

// Ruta POST
app.post('/api/data', (req, res) => {
    const data = req.body;
    res.json({ message: 'Datos recibidos', data });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
