import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

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
  updateVehicles: (updatedVehicles: Vehicle[]) => void; // Función para actualizar la lista de vehículos
  totalPages: number; // Número total de páginas
  currentPage: number; // Página actual
  searchVehicles: (keyword: string, page: number, pageSize: number) => void; // Función para buscar vehículos
};

const VehicleContext = createContext<VehicleContextType | undefined>(undefined);

export const VehicleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const token = 'eyJhbGciOiJIUzI1NiJ9.e30.LWjhAsQBfZsc8486nmm5_NuxblMktku4Yo1foc2Mlwo';

  useEffect(() => {
    const fetchInitialVehicles = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/vehicles/?page=2&pageSize=4', {
          method: "GET",
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          redirect: "follow"
        });
        if (!response.ok) {
          throw new Error(`Error fetching vehicles: ${response.statusText}`);
        }
        const data = await response.json();

        setVehicles(data.vehicles);
        setTotalPages(data.totalPages);
        setCurrentPage(data.currentPage);
      } catch (error) {
        console.error('Failed to fetch initial vehicles', error);
      }
    };
    fetchInitialVehicles();

  }, []);

  const searchVehicles = async (keyword: string, page: number, pageSize: number) => {
    try {
      const response = await fetch(`http://localhost:3001/api/vehicles/search?keyword=${keyword}&page=${page}&pageSize=${pageSize}`, {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        redirect: "follow"
      });
      if (!response.ok) {
        throw new Error(`Error searching vehicles: ${response.statusText}`);
      }
      const data = await response.json();
      setVehicles(data.vehicles);
      setTotalPages(data.totalPages);
      setCurrentPage(data.currentPage);
    } catch (error) {
      console.error('Failed to search vehicles', error);
    }
  };
  const updateVehicles = (updatedVehicles: Vehicle[]) => {
    setVehicles(updatedVehicles);
  };

  return (
    <VehicleContext.Provider value={{ vehicles, setVehicles, updateVehicles, totalPages, currentPage, searchVehicles }}>
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
