import React from 'react';
import { Vehicle } from '../types/Vehicle'; // Asegúrate de ajustar la ruta de importación según tu estructura

type VehicleItemProps = {
  vehicle: Vehicle;
};

const VehicleItem: React.FC<VehicleItemProps> = ({ vehicle }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2">
      <h3 className="text-lg font-semibold">{vehicle.marca} {vehicle.modelo} - {vehicle.anio}</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Placa:</strong> {vehicle.placa}</li>
        <li><strong>Número Económico:</strong> {vehicle.numeroEconomico}</li>
        <li><strong>VIN:</strong> {vehicle.vin}</li>
        <li><strong>Asientos:</strong> {vehicle.asientos}</li>
        <li><strong>Seguro:</strong> {vehicle.seguro} - <strong>Número:</strong> {vehicle.numeroSeguro}</li>
        <li><strong>Color:</strong> {vehicle.color}</li>
      </ul>
      {/* Aquí puedes añadir botones o enlaces para acciones como editar o eliminar el vehículo */}
      {/* Ejemplo de botones con Tailwind CSS */}
      <div className="mt-4 flex justify-end space-x-2">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">Editar</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-300">Eliminar</button>
      </div>
    </div>
  );
};

export default VehicleItem;
