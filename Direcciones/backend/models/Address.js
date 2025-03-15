const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
  calle: { type: String, required: true },
  ciudad: { type: String, required: true }, 
  codigoPostal: { type: String, required: true },
});

module.exports = mongoose.model("Address", AddressSchema);