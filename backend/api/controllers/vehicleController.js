const Vehicle = require("../models/vehicleModel");

exports.getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
