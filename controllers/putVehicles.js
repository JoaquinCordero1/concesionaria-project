const Vehicle = require("../database/model.js");

const putVehicles = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    console.log(id);
    res.status(404).json({ message: "id del vehículo no válido" });
  }
  try {
    const updateVehicles = await Vehicle.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    console.log("Vehiculo agregado correctamente");
    res.json({ message: "Vehiculo agregado con éxito: ", updateVehicles });
  } catch (err) {
    console.log("Error al añadir vehiculo", err);
    res.status(404).json({ message: "Error al añadir el vehiculo" });
  }
};

module.exports = putVehicles;
