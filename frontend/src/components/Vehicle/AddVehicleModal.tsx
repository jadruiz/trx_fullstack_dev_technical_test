import React, { useState, FormEvent } from "react";
import { useVehicles } from "../../context/VehicleContext";
import Modal from "../Modal";
import VehicleForm from "../Vehicle/VehicleForm";
import { Vehicle } from "../../types/vehicle"; // Asegúrate de que este tipo esté correctamente definido

interface VehicleFormValues {
  _id?: string;
  placa: string;
  numeroEconomico: string;
  vin: string;
  asientos: number;
  seguro: string;
  numeroSeguro: string;
  marca: string;
  modelo: string;
  anio: number;
  color: string;
  //latitud: string; longitud: string;
}

const AddVehicleModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { addVehicle } = useVehicles();

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleFormSubmit = async (e: FormEvent, vehicle: VehicleFormValues) => {
    e.preventDefault();
    await addVehicle(vehicle as Vehicle);
    handleClose();
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition-colors"
      >
        Agregar Vehículo
      </button>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={handleClose}>
          <div className="bg-white rounded-lg overflow-hidden">
            <div className="px-6 py-4">
              <h3 className="text-lg font-medium text-gray-900">
                Añadir Nuevo Vehículo
              </h3>
            </div>
            <VehicleForm onSubmit={handleFormSubmit} />
            <div className="flex justify-end p-4 border-t">
              <button
                onClick={handleClose}
                className="mr-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Agregar Vehículo
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default AddVehicleModal;
