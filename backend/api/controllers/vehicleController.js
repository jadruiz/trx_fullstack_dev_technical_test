const Vehicle = require("../models/vehicleModel");

// Obtener todos los veículos
exports.getAllVehicles = async (req, res, next) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (err) {
    next(err);
  }
};

// Obtener un vehículo por ID
exports.getVehicleById = async (req, res, next) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    console.log(req.params.id);
    if (vehicle) {
      res.status(200).json(vehicle);
    } else {
      res.status(404).json({ message: "Vehículo no encontrado" });
    }
  } catch (error) {
    next(error);
  }
};

// Crear un vehículo
exports.createVehicle = async (req, res, next) => {
  const {
    placa,
    numeroEconomico,
    vin,
    asientos,
    seguro,
    numeroSeguro,
    marca,
    modelo,
    anio,
    color,
  } = req.body;

  // Validar los datos de entrada
  if (
    !placa ||
    !numeroEconomico ||
    !vin ||
    !asientos ||
    !seguro ||
    !numeroSeguro ||
    !marca ||
    !modelo ||
    !anio ||
    !color
  ) {
    return res
      .status(400)
      .json({ message: "Todos los campos son obligatorios" });
  }

  try {
    const newVehicle = new Vehicle({
      placa,
      numeroEconomico,
      vin,
      asientos,
      seguro,
      numeroSeguro,
      marca,
      modelo,
      anio,
      color,
    });
    const savedVehicle = await newVehicle.save();
    res.status(201).json(savedVehicle);
  } catch (error) {
    next(error);
  }
};

// Actualizar un vehículo
exports.updateVehicle = async (req, res, next) => {
  const vehicleId = req.params.id;
  // Validar que se proporcionen los campos necesarios para la actualización
  const {
    placa,
    numeroEconomico,
    vin,
    asientos,
    seguro,
    numeroSeguro,
    marca,
    modelo,
    anio,
    color,
  } = req.body;
  if (
    !placa ||
    !numeroEconomico ||
    !vin ||
    !asientos ||
    !seguro ||
    !numeroSeguro ||
    !marca ||
    !modelo ||
    !anio ||
    !color
  ) {
    return res.status(400).json({
      message: "Todos los campos son obligatorios para actualizar el vehículo",
    });
  }

  try {
    const updatedVehicle = await Vehicle.findByIdAndUpdate(
      vehicleId,
      {
        placa,
        numeroEconomico,
        vin,
        asientos,
        seguro,
        numeroSeguro,
        marca,
        modelo,
        anio,
        color,
      },
      { new: true }
    );
    if (updatedVehicle) {
      res.status(200).json(updatedVehicle);
    } else {
      res.status(404).json({ message: "Vehículo no encontrado" });
    }
  } catch (error) {
    next(error);
  }
};

// Eliminar un vehículo por ID
exports.deleteVehicle = async (req, res, next) => {
  try {
    const deletedVehicle = await Vehicle.findByIdAndDelete(req.params.id);
    if (deletedVehicle) {
      res.status(200).json({ message: "Vehículo eliminado" });
    } else {
      res.status(404).json({ message: "Vehículo no encontrado" });
    }
  } catch (error) {
    next(error);
  }
};

// Buscar un vehículos
exports.searchVehicles = async (req, res) => {
  try {
    const keyword = req.query.keyword;
    let vehicles;
    if (keyword) {
      vehicles = await Vehicle.find({
        $or: [
          { placa: { $regex: new RegExp(keyword, "i") } },
          { numeroEconomico: { $regex: new RegExp(keyword, "i") } },
          { vin: { $regex: new RegExp(keyword, "i") } },
          { seguro: { $regex: new RegExp(keyword, "i") } },
          { marca: { $regex: new RegExp(keyword, "i") } },
          { modelo: { $regex: new RegExp(keyword, "i") } },
          { color: { $regex: new RegExp(keyword, "i") } },
        ],
      });
    } else {
      vehicles = await Vehicle.find();
    }
    res.json(vehicles);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
