const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const bodyParser = require("body-parser");
const errorHandler = require("./api/middlewares/errorHandler");
const vehicleRoutes = require("./api/routes/vehicleRoutes");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Successful connection to MongoDB"))
  .catch((err) => console.log("Error connection to MongoDB", err));

app.use("/api/vehicles", vehicleRoutes);

app.use(errorHandler);

// Emitir eventos de actualización y eliminación cuando sea necesario
io.on("connection", (socket) => {
  console.log("Client connected");

  socket.on("updateVehicle", async (vehicleId, updatedData) => {
    await updateVehicle(vehicleId, updatedData);
    io.emit("vehicleUpdated", { vehicleId, updatedData });
  });

  socket.on("deleteVehicle", async (vehicleId) => {
    await deleteVehicle(vehicleId);
    io.emit("vehicleDeleted", vehicleId);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

const PORT = process.env.PORT || 9000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
