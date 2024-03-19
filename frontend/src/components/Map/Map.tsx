import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Solución para el problema del icono del marcador que no se muestra correctamente con webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Map = () => {
  const position = [51.505, -0.09]; // Ejemplo de posición (latitud y longitud de Londres)
  const zoom = 13; // Nivel de zoom inicial

  return (
    <div>
      <MapContainer center={position} zoom={zoom} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            Un marcador de ejemplo. <br /> Personaliza este popup con información relevante.
          </Popup>
        </Marker>
        {/* Aquí puedes añadir más marcadores o componentes como líneas para las rutas */}
      </MapContainer>
    </div>
  );
};

export default Map;
