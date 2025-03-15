const express = require("express");
const router = express.Router();
const Address = require("../models/Address");

router.post("/", async (req, res) => {
  try {
    const address = new Address(req.body);
    await address.save(); 
    res.status(201).json({ message: "Dirección creada" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


// Obtener todas las direcciones (GET)
router.get("/", async (req, res) => {
    try {
        const addresses = await Address.find(); // Buscar todas las direcciones en la BD
        res.json(addresses);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener direcciones" });
    }
});

module.exports = router;
