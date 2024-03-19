import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// Suponiendo que ya tienes definido este tipo en algún lugar
type Vehicle = {
  _id: string;
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
};

type VehicleContextType = {
  vehicles: Vehicle[];
  setVehicles: React.Dispatch<React.SetStateAction<Vehicle[]>>;
  // Aquí podrías añadir cualquier otra función para manejar los vehículos, como addVehicle, deleteVehicle, etc.
};

const VehicleContext = createContext<VehicleContextType | undefined>(undefined);

export const VehicleProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  // Simula la carga de datos desde una API o fuente externa
  useEffect(() => {
    const fetchVehicles = async () => {
      // Aquí iría la lógica para cargar los datos, por ejemplo, usando fetch() o axios.
      // Por simplicidad, vamos a simular con datos estáticos:
      const loadedVehicles: Vehicle[] = [
        // Aquí incluirías los vehículos cargados
        // Ejemplo:
        {
          _id: "65f5dc7c48ab62f7be76f140",
          placa: "3771695627",
          numeroEconomico: "6980379542",
          vin: "WBA8Z5C5XFG644485",
          asientos: 39,
          seguro: "Fisher-Rice",
          numeroSeguro: "3238367366",
          marca: "Volvo",
          modelo: "960",
          anio: 1994,
          color: "Teal",
        },
        // Agrega más vehículos según sea necesario
      ];

      setVehicles(loadedVehicles);
    };

    fetchVehicles();
  }, []);

  return (
    <VehicleContext.Provider value={{ vehicles, setVehicles }}>
      {children}
    </VehicleContext.Provider>
  );
};

export const useVehicles = (): VehicleContextType => {
  const context = useContext(VehicleContext);
  if (context === undefined) {
    throw new Error('useVehicles must be used within a VehicleProvider');
  }
  return context;
};
