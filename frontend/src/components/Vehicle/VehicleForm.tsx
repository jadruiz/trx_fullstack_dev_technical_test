import React, { useState } from 'react';
import { Vehicle } from '../../types/vehicle';

type VehicleFormProps = {
  initialVehicle?: Vehicle;
  onSubmit: (vehicle: Vehicle) => void;
};

const VehicleForm: React.FC<VehicleFormProps> = ({ initialVehicle, onSubmit }) => {
  const [vehicle, setVehicle] = useState<Vehicle>(initialVehicle || {
    _id: '', // Solo necesario si estás actualizando un vehículo
    placa: '',
    numeroEconomico: '',
    vin: '',
    asientos: 0,
    seguro: '',
    numeroSeguro: '',
    marca: '',
    modelo: '',
    anio: 1990,
    color: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setVehicle({ ...vehicle, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(vehicle);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="placa" className="block text-sm font-medium text-gray-700">Placa</label>
        <input
          type="text"
          name="placa"
          id="placa"
          value={vehicle.placa}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>
      <div>
        <label htmlFor="modelo" className="block text-sm font-medium text-gray-700">Modelo</label>
        <input
          type="text"
          name="modelo"
          id="modelo"
          value={vehicle.modelo}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>
      
      <div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Guardar Vehículo</button>
      </div>
    </form>
  );
};

export default VehicleForm;
