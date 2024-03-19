import React, { useState } from 'react';
import { Vehicle } from '../types/Vehicle';
import { useVehicles } from '../../context/VehicleContext'; // Importa el hook useVehicles
import DeleteModal from '../Vehicle/DeleteModal';

type VehicleItemProps = {
  vehicle: Vehicle;
};

const VehicleItem: React.FC<VehicleItemProps> = ({ vehicle }) => {
  const { deleteVehicle, updateVehicle } = useVehicles();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleUpdate = () => {
    //updateVehicle(vehicle);
  };

  const handleDelete = () => {
    //deleteVehicle(vehicle._id);
    console.log(vehicle._id);
  };

  return (
    <div className="shadow-md rounded-lg p-4 m-2">
      <h3 className="text-lg font-semibold">{vehicle.marca} {vehicle.modelo} - {vehicle.anio}</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Placa:</strong> {vehicle.placa}</li>
        <li><strong>Asientos:</strong> {vehicle.asientos}</li>
        <li><strong>Color:</strong> {vehicle.color}</li>
      </ul>
      <div className="mt-4 flex justify-end space-x-2">
        <button onClick={handleUpdate} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">Actualizar</button>
        <button onClick={() => setIsDeleteModalOpen(true)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-300">Eliminar</button>
        <DeleteModal 
        isOpen={isDeleteModalOpen} 
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
        vehicleName={`${vehicle.marca} ${vehicle.modelo}`} 
      />
      </div>
    </div>
  );
};

export default VehicleItem;
