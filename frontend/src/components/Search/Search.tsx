import React, { useState } from 'react';
import { useVehicles } from '../../context/VehicleContext'; 
import VehicleList from '../../components/Vehicle/VehicleList';

const Search = () => {
  const { searchVehicles } = useVehicles();
  const [keyword, setKeyword] = useState('');

  const handleSearch = async () => {
    // Llamar a la función de búsqueda con la palabra clave actual
    await searchVehicles(keyword);
  };

  const handleChange = (event) => {
    // Actualizar el estado de la palabra clave con el valor actual del campo de entrada
    setKeyword(event.target.value);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-4">
    <input
      type="text"
      placeholder="Buscar por marca, modelo, color, etc."
      value={keyword}
      onChange={handleChange}
      className="w-full px-4 py-2 border border-gray-300 rounded-md"
    />
    <button onClick={handleSearch} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">
      Buscar
    </button>
  </div>
  );
};

export default Search;