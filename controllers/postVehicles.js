const Vehicle = require("../database/model.js");

const postVehicles = async (req, res) => {
  const { marca, modelo, year, precio, color, descripcion, estado } = req.body;
  console.log(marca, modelo, year, precio, color, descripcion, estado);
  if (
    !marca ||
    !modelo ||
    !year ||
    !precio ||
    !color ||
    !descripcion ||
    !estado
  ) {
    console.log("Faltan elementos");
    res
      .status(404)
      .json({ message: "Debes completar todos los campos para guardar" });
  }

  try {
    // Verificar si el vehículo ya existe
    const existingVehicle = await Vehicle.findOne({ marca, modelo, year });

    if (existingVehicle) {
      return res
        .status(409) //409 Conflict
        .json({ message: "El vehículo ya existe en la base de datos." });
    }
    const addVehicles = new Vehicle({
      marca,
      modelo,
      year,
      precio,
      color,
      descripcion,
      estado,
      disponible: true,
    });

    const saveVehicles = await addVehicles.save();
    console.log("Vehículo guardado con éxito");
    res.json({
      message: "El vehiculo fue añadido correctamente: ",
      saveVehicles,
    });
  } catch (error) {
    console.log("Error al añadir vehiculo: ", err);
    res.status(404).json({ message: "No se puede añadir el vehiculo." });
  }
};

module.exports = postVehicles;
