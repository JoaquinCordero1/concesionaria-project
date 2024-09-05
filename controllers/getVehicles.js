const Vehicle = require("../database/model.js");

const getVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();

    if (vehicles) return res.json({ message: "Lista de vehiculos", vehicles });
    return res.status(404).json({ message: "Producto no encontrado" });
  } catch (error) {
    console.log("Error al buscar vehiculos: ", err);
  }
};

module.exports = getVehicles;
