const mongoose = require("mongoose");
process.loadEnvFile();

const COLLECTION_NAME = process.env.MONGODB_COLLECTION;

const concesonariaSchema = new mongoose.Schema(
  {
    marca: { type: String, required: true },
    modelo: { type: String, required: true },
    year: { type: Number, required: true },
    precio: { type: Number, required: true },
    color: { type: String, required: true },
    descripcion: { type: String, required: true },
    estado: { type: String, required: true },
    disponible: { type: Boolean, default: false },
  },
  {
    collection: COLLECTION_NAME,
  }
);

const Vehicle = mongoose.model("Vehicle", concesonariaSchema);
module.exports = Vehicle;
