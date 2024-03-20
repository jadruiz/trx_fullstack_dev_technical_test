import { Vehicle } from "./vehicle";

type RouteType = any;

export type VehicleContextType = {
  vehicles: Vehicle[];
  selectedVehicleId: string | null;
  setSelectedVehicleId: (id: string | null) => void;
  setVehicles: React.Dispatch<React.SetStateAction<Vehicle[]>>;
  updateVehicles: (updatedVehicles: Vehicle[]) => void;
  deleteVehicle: (vehicleId: string) => void;
  totalPages: number;
  currentPage: number;
  searchVehicles: (keyword: string, page: number, pageSize: number) => void;
  route?: RouteType;
  addVehicle: (vehicle: Vehicle) => Promise<void>;
};