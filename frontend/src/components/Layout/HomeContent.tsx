import React, { useEffect } from 'react';
import { useVehicles, VehicleProvider } from '../../context/VehicleContext';
import Map from '../../components/Map/Map';
import Search from '../../components/Search/Search';
import VehicleList from '../../components/Vehicle/VehicleList';

const HomeContent = () => {
  const { vehicles, updateVehicles } = useVehicles();

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/vehicles');
        if (!response.ok) {
          throw new Error(`Error fetching vehicles: ${response.statusText}`);
        }
        const data = await response.json();
        updateVehicles(data.vehicles);
      } catch (error) {
        console.error('Failed to fetch vehicles', error);
      }
    };

    fetchVehicles();
  }, [updateVehicles]);

  return (
    <>
      <h1 className="text-2xl font-bold text-center my-8">Vehículos Disponibles</h1>
      <Search />
      <Map />
      <VehicleList />
    </>
  );
};

const HomeContentWrapper = () => {
  return (
    <VehicleProvider>
      <HomeContent />
    </VehicleProvider>
  );
};

export default HomeContentWrapper;
