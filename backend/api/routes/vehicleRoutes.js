const express = require("express");
const router = express.Router();
const { getAllVehicles } = require("../controllers/vehicleController");

//CRUD Vehicles
router.get("/", getAllVehicles);
/*router.get("/:id", vehicleController.getVehicleById);
router.post("/", vehicleController.createVehicle);
router.put("/:id", vehicleController.updateVehicle);
router.delete("/:id", vehicleController.deleteVehicle);

//Other Routes
router.post("/:id/location", vehicleController.updateVehicleLocation);
router.get("/:id/route", vehicleController.getVehicleRoute);*/

module.exports = router;
