const Vehicle = require("../database/model.js");

const deleteVehicle = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    console.log(id);
    res.status(404).json({ message: "Se necesita un id para borrar" });
  }
  try {
    const deleteVehicle = await Vehicle.findByIdAndDelete(id);
    if (deleteVehicle) {
      console.log("Vehiculo borrado");
      res.status(201).json({ message: "Vehiculo borrado con éxito" }).end();
    } else {
      console.log("El vehiculo ya está borrado");
      res.status(200).json({ message: "El vehiculo ya fue borrado" }).end();
    }
  } catch (error) {
    console.log("No se puedo borrar el vehiculo");
    res.status(404).json({ message: "Hubo un error al borrar este vehiculo" });
  }
};

module.exports = deleteVehicle;
