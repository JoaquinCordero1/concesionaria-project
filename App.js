const express = require("express");
const app = express();
const connectDB = require("./database/config.js");
const controllers = require("./controllers");

const port = process.env.PORT ?? 3000;

app.disable("x-powered-by");
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/vehicles", controllers.getVehicles);
app.post("/vehicles/add", controllers.postVehicles);
app.put("/vehicles/edit/:id", controllers.putVehicles);
app.delete("/vehicles/:id", controllers.deleteVehicle);

app.listen(port, () => {
  console.log(`Servidor abierto en el puerto http://localhost:${port}`);
  connectDB();
});
