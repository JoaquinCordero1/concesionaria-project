const mongoose = require("mongoose");
process.loadEnvFile();

const URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    return console.log("Conectado a MongoDB");
  } catch (err) {
    return console.log("Error al conectar a la base de datos", err);
  }
};

module.exports = connectDB;
