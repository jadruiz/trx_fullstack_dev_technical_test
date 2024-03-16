const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema(
  {
    placa: {
      type: String,
      required: true,
      unique: true,
    },
    numeroEconomico: {
      type: String,
      required: true,
    },
    vin: {
      type: String,
      required: true,
      unique: true,
    },
    asientos: {
      type: Number,
      required: true,
    },
    seguro: {
      type: String,
      required: true,
    },
    seguroNumero: {
      type: String,
      required: true,
    },
    marca: {
      type: String,
      required: true,
    },
    modelo: {
      type: String,
      required: true,
    },
    anio: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Vehicle", vehicleSchema, "vehicles");
