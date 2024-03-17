module.exports = function (io) {
  io.on("connection", (socket) => {
    console.log("Client connected");

    socket.on("updateVehicle", async (vehicleId, updatedData) => {
      try {
        await updateVehicle(vehicleId, updatedData);
        io.emit("vehicleUpdated", { vehicleId, updatedData });
      } catch (error) {
        console.error(`Error updating vehicle: ${error}`);
      }
    });

    socket.on("deleteVehicle", async (vehicleId) => {
      try {
        await deleteVehicle(vehicleId);
        io.emit("vehicleDeleted", vehicleId);
      } catch (error) {
        console.error(`Error deleting vehicle: ${error}`);
      }
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });
};
