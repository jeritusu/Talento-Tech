// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const addressRoutes = require("./routes/addressRoutes");
// const app = express();

// app.use(express.json());
// app.use(cors());
// app.use("/direcciones", addressRoutes);

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => console.log("Conectado a MongoDB"))
//   .catch(err => console.error("Error de conexión a MongoDB:", err));

// app.listen(3000, () => console.log("Servidor en puerto 3000"));

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



