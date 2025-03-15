require("dotenv").config();  // Cargar variables de entorno
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());  // Middleware para JSON
app.use(cors());  // Habilitar CORS

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("✅ Conectado a MongoDB"))
  .catch(err => console.error("❌ Error de conexión:", err));

// Importar rutas
const addressRoutes = require("./routes/addressRoutes");
app.use("/direcciones", addressRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor en http://localhost:${PORT}`));


app.use(express.static("../frontend")); // Servir el frontend desde la carpeta correcta



