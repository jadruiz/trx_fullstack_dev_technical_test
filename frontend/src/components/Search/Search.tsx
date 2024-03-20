import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { useVehicles } from "../../context/VehicleContext";
import AddVehicleModal from "../Vehicle/AddVehicleModal";

const Search: React.FC = () => {
  const { searchVehicles } = useVehicles();
  const [keyword, setKeyword] = useState<string>("");
  const [isAddVehicleModalOpen, setIsAddVehicleModalOpen] =
    useState<boolean>(false);

  const handleSearch = async () => {
    if (keyword.length >= 3) {
      await searchVehicles(keyword, 1 /* página */, 10 /* tamaño de página */);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && keyword.length >= 3) {
      handleSearch();
    }
  };

  const handleOpenAddVehicleModal = () => {
    setIsAddVehicleModalOpen(true); // Abre el modal
  };

  const handleCloseAddVehicleModal = () => {
    setIsAddVehicleModalOpen(false); // Cierra el modal
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center gap-4">
      <input
        type="text"
        placeholder="Buscar por marca, modelo, color, etc."
        value={keyword}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Buscar
      </button>
      <AddVehicleModal
        isOpen={isAddVehicleModalOpen}
        onClose={handleCloseAddVehicleModal}
      />
    </div>
  );
};

export default Search;
