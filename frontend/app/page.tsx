'use client'
import Image from "next/image";
import Map from "../src/components/Map/Map";
import VehicleList from "../src/components/Vehicle/VehicleList";
import {VehicleProvider} from "../src/context/VehicleContext";

export default function Home() {
  return (
    <div>
      <h1>Test</h1>
      <Map/>
      <VehicleProvider>
      <VehicleList />
      </VehicleProvider>
    </div>
  );
}
