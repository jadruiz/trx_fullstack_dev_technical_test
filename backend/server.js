const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const errorHandler = require("./api/middlewares/errorHandler");
const vehicleRoutes = require("./api/routes/vehicleRoutes");

const app = express();

app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Successful connection to MongoDB"))
  .catch((err) => console.log("Error connection to MongoDB", err));

app.use("/api/vehicles", vehicleRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server working on port ${PORT}!`);
});
